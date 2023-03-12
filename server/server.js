require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3001;

//cors middleware added so react server and backend server domains are the same
app.use(cors());
app.use(express.json());

//Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id");

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows
      }
    });
  } catch (err) {
    console.log(err);
  };
});

//Get a restaurant and reviews
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    // Reviews get request added to restaurants get request so only one call needs to be made to the db for the requested data
    // const restaurant = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);
    // Better query for restaurant
    const restaurant = await db.query("SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews ON restaurants.id = reviews.restaurant_id WHERE id = $1", [req.params.id]);
    const reviews = await db.query("SELECT * FROM reviews WHERE restaurant_id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *", [req.body.name, req.body.location, req.body.price_range]);

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
    });
  } catch (err) {
    console.log(err);
  };
});

//Update a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *", [req.body.name, req.body.location, req.body.price_range, req.params.id]);

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//Delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id]);

    res.status(204).json({
      status: "success"
    });
  } catch (err) {
    console.log(err);
  }
});

//Store review in db
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query("INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) RETURNING *", [req.params.id, req.body.name, req.body.review, req.body.rating]);

    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0]
      }
    });
  } catch (err) {
      console.log(err);
  };
});

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
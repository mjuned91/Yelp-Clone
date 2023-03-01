import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = (props) => {
  const navigate = useNavigate();
  const {restaurants, setRestaurants} = useContext(RestaurantsContext);
  useEffect(() => {
    //Define fetchData function in useEffect function to handle api calls
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (err) {
  
      };
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id
      }));
    } catch (err) {
      console.log(err);
    };
  };

  const handleUpdate = (id) => {
    navigate(`/restaurants/${id}/update`)
  };

  return (
    <div class="list-group">
      <table class="table table-hover table-dark">
        <thead>
          <tr class="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* First condition added so that the rest of the code is run if restaurant exists  */}
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>Reviews</td>
                  <td>
                    <button onClick={() => handleUpdate(restaurant.id)} class="btn btn-warning">Update</button>
                  </td>
                  <td>
                    {/* Function is added to onClick event handler so that code is run only if button is clicked */}
                    <button onClick={() => handleDelete(restaurant.id)} class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )
            })
          };
          {/* <tr>
            <td>Mcdonalds</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button class="btn btn-warning">Update</button>
            </td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
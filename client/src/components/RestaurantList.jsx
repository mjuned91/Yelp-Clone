import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRating from './StarRating'

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

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id
      }));
    } catch (err) {
      console.log(err);
    };
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`)
  };

  const handleRestaurantSelect = (id) => {
    navigate(`/restaurants/${id}`)
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span class="text-warning ml-1">0 reviews</span>
    };
    return (
      <>
        <StarRating rating={restaurant.average_rating}/>
        <span class="text-warning ml-1">({restaurant.count})</span>
      </>
    );
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
                <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td>
                    <button onClick={(e) => handleUpdate(e, restaurant.id)} class="btn btn-warning">Update</button>
                  </td>
                  <td>
                    {/* Function is added to onClick event handler so that code is run only if button is clicked */}
                    <button onClick={(e) => handleDelete(e, restaurant.id)} class="btn btn-danger">Delete</button>
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
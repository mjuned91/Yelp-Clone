import React, { useEffect } from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";

const RestaurantList = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        console.log(response);
      } catch (err) {
  
      };
    };

    fetchData();
  }, []);

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
          <tr>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
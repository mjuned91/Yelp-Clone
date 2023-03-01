import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateRestaurant = (props) => {
  const {id} = useParams();
  
  return (
    <div>
      <form action="">
        <div class="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" class="form-control" type="text"></input>
        </div>

        <div class="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" class="form-control" type="text" />
        </div>

        <div class="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input id="price_range" class="form-control" type="number" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateRestaurant = (props) => {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  
  return (
    <div>
      <form action="">
        <div class="form-group">
          <label htmlFor="name">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} id="name" class="form-control" type="text"></input>
        </div>

        <div class="form-group">
          <label htmlFor="location">Location</label>
          <input value={location} onChange={e => setLocation(e.target.value)} id="location" class="form-control" type="text" />
        </div>

        <div class="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input value={priceRange} onChange={e => setPriceRange(e.target.value)} id="price_range" class="form-control" type="number" />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
import React from 'react';

const AddRestaurant = () => {
  return (
    <div class="mb-4">
      <form action="">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Name"/>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Location"/>
          </div>
          <div class="col">
            <select class="custom-select my-1 mr-sm-2">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div class="col">
            <button class="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
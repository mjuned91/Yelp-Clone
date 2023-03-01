import React ,{ useState } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';

const AddRestaurant = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location, 
        price_range: priceRange
      });
      console.log(response);
    } catch (err) {

    };
  };
  return (
    <div class="mb-4">
      <form action="">
        <div class="row">
          <div class="col">
            <input value={name} onChange={e => setName(e.target.value)} type="text" class="form-control" placeholder="Name"/>
          </div>
          <div class="col">
            <input value={location} onChange={e => setLocation(e.target.value)} type="text" class="form-control" placeholder="Location"/>
          </div>
          <div class="col">
            <select value={priceRange} onChange={e => setPriceRange(e.target.value)} class="custom-select my-1 mr-sm-2">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div class="col">
            <button onClick={handleSubmit} type="submit" class="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
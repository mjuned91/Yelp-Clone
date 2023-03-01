import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurants = (restaurant) => {
  //Copy existing restaurant list to a new array and add new restaurant to new array
    setRestaurants([...restaurants, restaurant]);
  };
  return (
    <RestaurantsContext.Provider value={{restaurants, setRestaurants, addRestaurants}}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
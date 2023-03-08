import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from "../apis/RestaurantFinder"
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      } catch (err) {
        console.log(err);
      };
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* Only when selectedRestaurant is defined, the restaurant name will render */}
      {selectedRestaurant && (
        <>
          <div class="mt-3">
            <Reviews/>
          </div>
          <AddReview/>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
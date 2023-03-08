import React from 'react';
import StarRating from './StarRating';

const Reviews = ( {reviews} ) => {
  return (
    <div class="row row-cols-3 mb-2">
      {reviews.map((review) => {
        return (
          <div class="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
            <div class="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span><StarRating rating={review.rating}/></span>
            </div>
            <div class="card-body">
              <p class="card-text">{review.review}</p>
            </div>
          </div>
        );
      })};
    </div>
  );
};

export default Reviews;
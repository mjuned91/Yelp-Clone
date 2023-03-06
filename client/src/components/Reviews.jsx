import React from 'react';
import StarRating from './StarRating';

const Reviews = () => {
  return (
    <div class="row row-cols-3 mb-2">
      <div class="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
        <div class="card-header d-flex justify-content-between">
          <span>Joan</span>
          <span><StarRating rating={3.7}/></span>
        </div>
        <div class="card-body">
          <p class="card-text">This restaurant is alright.</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
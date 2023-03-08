import React, { useState } from 'react';

const AddReview = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Select");

  return (
    <div class="mb-2">
      <form action="">
        <div class="form-row">
          <div class="form-group col-8">
            <label htmlFor="name">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} id="name" placeholder="Name" type="text" class="form-control"/>
          </div>
          <div class="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select value={rating} onChange={e => setRating(e.target.value)} id="rating" class="custom-select">
              <option disabled>Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label htmlFor="Review">Review</label>
          <textarea value={reviewText} onChange={e => setReviewText(e.target.value)} id="Review" class="form-control"></textarea>
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
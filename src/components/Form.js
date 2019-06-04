import React, { Fragment } from 'react';

const Form = () => {
  return(
    <Fragment>
      <h2>Create Appointment</h2>
      <form>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
        />

        <label>Pet Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Pet Owner"
        />

        <label>Date</label>
        <input
          type="date"
          className="u-full-width"
          name="date"
        />

        <label>Time</label>
        <input
          type="time"
          className="u-full-width"
          name="time"
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Add</button>
    </form>
  </Fragment>
  );
}

export default Form;

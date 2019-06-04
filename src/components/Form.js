import React, { Fragment } from 'react';

const Form = ({updateState}) => {
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
          onChange={updateState}
        />

        <label>Pet Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Pet Owner"
          onChange={updateState}
        />

        <label>Date</label>
        <input
          type="date"
          className="u-full-width"
          name="date"
          onChange={updateState}
        />

        <label>Time</label>
        <input
          type="time"
          className="u-full-width"
          name="time"
          onChange={updateState}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={updateState}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Add</button>
    </form>
  </Fragment>
  );
}

export default Form;

import React, { useState, Fragment } from 'react';

const Form = ({createAppointment}) => {
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  });


  const updateState = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  const sendAppointment = e => {
    e.preventDefault();
    createAppointment(appointment);
  }
  return(
    <Fragment>
      <h2>Create Appointment</h2>
      <form onSubmit={sendAppointment}>
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

import React, { useState, Fragment } from 'react';

const Form = ({createAppointment}) => {
  const stateInitial = {
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  }

  const [appointment, setAppointment] = useState(stateInitial);


  const updateState = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  const sendAppointment = e => {
    e.preventDefault();
    createAppointment(appointment);
    setAppointment(stateInitial);
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
          value={appointment.pet}
        />

        <label>Pet Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Pet Owner"
          onChange={updateState}
          value={appointment.owner}
        />

        <label>Date</label>
        <input
          type="date"
          className="u-full-width"
          name="date"
          onChange={updateState}
          value={appointment.date}
        />

        <label>Time</label>
        <input
          type="time"
          className="u-full-width"
          name="time"
          onChange={updateState}
          value={appointment.time}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={updateState}
          value={appointment.symptoms}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Add</button>
    </form>
  </Fragment>
  );
}

export default Form;

import React from 'react';

const Appointment = ({appointment, index, deleteAppointment}) => {
  return (
    <div className="appointment">
      <p>Pet: <span>{appointment.pet}</span></p>
      <p>Pet Owner: <span>{appointment.owner}</span></p>
      <p>Date: <span>{appointment.date}</span></p>
      <p>Time: <span>{appointment.time}</span></p>
      <p>Symptoms: <span>{appointment.symptoms}</span></p>
      <button
        onClick={() => deleteAppointment(index)}
        className="button delete u-full-width">Delete</button>
    </div>
  )
}

export default Appointment;

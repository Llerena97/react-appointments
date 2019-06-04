import React, { useState, Fragment, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'))
  if (!initialAppointments) {
    initialAppointments = [];
  }

  const [appointments, setAppointments] = useState(initialAppointments)

  const createAppointment = appointment => {
    const newAppointments = [...appointments, appointment]
    setAppointments(newAppointments)
  }

  const deleteAppointment = index => {
    const newAppointments = [...appointments]
    newAppointments.splice(index, 1)
    setAppointments(newAppointments)
  }

  useEffect(
    () => {
      let initialAppointments = JSON.parse(localStorage.getItem('appointments'))
      if (initialAppointments) {
        localStorage.setItem('appointments', JSON.stringify(appointments))
      } else {
        localStorage.setItem('appointments', JSON.stringify([]))
      }
    }, [appointments]
  )

  const title = Object.keys(appointments).length === 0 ? "There aren't appointments" : "Manage appointments here!"

  return (
    <Fragment>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={createAppointment}
              />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map( (appointment, index) => (
              <Appointment
                  key={index}
                  index={index}
                  appointment={appointment}
                  deleteAppointment={deleteAppointment}
                />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

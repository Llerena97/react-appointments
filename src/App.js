import React, { useState, Fragment} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  const [appointments, setAppointments] = useState([])

  const createAppointment = appointment => {
    const newAppointments = [...appointments, appointment]
    setAppointments(newAppointments)
  }

  const deleteAppointment = index => {
    const newAppointments = [...appointments]
    newAppointments.splice(index, 1)
    setAppointments(newAppointments)
  }

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

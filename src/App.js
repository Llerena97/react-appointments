import React, { useState, Fragment} from 'react';
import Form from './components/Form';

function App() {
  const [appointments, setAppointments] = useState([])

  const createAppointment = appointment => {
    const newAppointments = [...appointments, appointment]
    setAppointments(newAppointments)
  }

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

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

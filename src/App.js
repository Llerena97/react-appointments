import React, { useState, Fragment} from 'react';
import Form from './components/Form';

function App() {
  const [appointment, setAppointments] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  });

  const updateState = e => {
    setAppointments({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }
  
  console.log(appointment);
  return (
    <Fragment>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
                updateState={updateState}
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

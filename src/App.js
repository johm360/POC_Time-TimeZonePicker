import './App.css';
import * as React from 'react';
import moment from 'moment-timezone';

function App() {
  const [timezones, setTimezones] = React.useState([]);
  const [selectedTimezone, setSelectedTimezone] = React.useState('');
  const [userTZ, setUserTZ] = React.useState('');

  React.useEffect(() => {
    const detectTZ = () => {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setSelectedTimezone(tz);
      setUserTZ(tz);
    };

    const fetchTimezones = () => {
      const timeZoneList = moment.tz.names();
      setTimezones(timeZoneList);
    }

    detectTZ();
    fetchTimezones();
  }, []);

  const handleChange = (event) => {
    setSelectedTimezone(event.target.value);
  };

  return (
    <div className="App">
      <div>
          <h1>TimePickerPOC 1</h1>
          <div>
            <input aria-label="Time" type="time" />
          </div>
          <div>        
            <select value={selectedTimezone} onChange={handleChange}>
              {timezones.map((timezone, index) => (
                <option key={index} value={timezone}>
                  {timezone}
                </option>
              ))}
            </select>
          </div>
      </div>
      <div>
        <h1>TimePickerPOC 2</h1>
        <div>
          <input aria-label="Time" type="time" />
          <h4>Your Timezone: {userTZ}</h4>
        </div>        
      </div>
    </div>
  );
}

export default App;

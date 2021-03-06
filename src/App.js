import { useState, useEffect } from 'react'
import Map from './Components/Map'
import Header from './Components/Header'

function App() {
  const [eventData, setEventData] = useState([])


  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
    }

    fetchEvents()
  }, [])
  return (
    <div>
      <Header />
      <Map eventData={eventData} />
    </div>
  );
}

export default App;

import React, { useState } from 'react'

import { ErrorAlert } from '../alert/Alert'

function NumberOfEvents(props) {
  const [numberOfEvents, setNumberOfEvents] = useState(props.numberOfEvents)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setNumberOfEvents(e.target.value)
    props.updateNumberOfEvents(e.target.value)
    if (e.target.value >= 1 && e.target.value <= 32) {
      setError('')
    } else {
      setError('Select a number from 1 to 32')
    }
  }

  return (
    <div className="NumberOfEvents">
      <label>Nº. of events</label>
      <input
        type="number"
        className="numberOfEvents"
        value={numberOfEvents}
        onChange={handleChange}
      />
      <ErrorAlert text={error} />
    </div>
  )
}

export default NumberOfEvents
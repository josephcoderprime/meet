import React, { Component } from 'react';
import Event from '../event/Event'

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="EventList">
        {events.map(event =>
          <Event key={event.id} event={event} />
        )}
      </div>
    );
  }
}

export default EventList;
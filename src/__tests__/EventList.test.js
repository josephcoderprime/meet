import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../components/event-list/EventList';
import Event from '../components/event/Event';
import { mockData } from '../mock-data/mock-data'

describe('<EventList /> component', () => {
  test('render the correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  })
});
import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/event/Event';
import { mockData } from '../mock-data/mock-data'

describe('<Event /> component', () => {
  let event
  let EventWrapper
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />)
  })

  test('should have a collapsed event details by default', () => {
    expect(EventWrapper.find('.event__details')).toHaveLength(1);
    expect(EventWrapper.find('.display-none')).toHaveLength(1);
  })

  test('should show event details when click on button', () => {
    EventWrapper.find('.event__button').simulate('click')
    expect(EventWrapper.find('.display-none')).toHaveLength(0);
  })

  test('should hide event details when click on button', () => {
    EventWrapper.state({
      show: true
    })
    EventWrapper.find('.event__button').simulate('click')
    expect(EventWrapper.find('.display-none')).toHaveLength(1);
  })

  test('should show all the data of the events', () => {
    expect(EventWrapper.find('.event__summary')).toHaveLength(1);
    expect(EventWrapper.find('.event__location')).toHaveLength(1);
    expect(EventWrapper.find('.event__description')).toHaveLength(1);
    expect(EventWrapper.find('.event__organizer')).toHaveLength(1);
    expect(EventWrapper.find('.event__start')).toHaveLength(1);
    expect(EventWrapper.find('.event__end')).toHaveLength(1);
  })
});
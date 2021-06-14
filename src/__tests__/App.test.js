import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/app/App';
import EventList from '../components/event-list/EventList';
import CitySearch from '../components/citysearch/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents/NumberOfEvents';
import { mockData } from '../mock-data/mock-data'
import { extractLocations, getEvents } from '../api/api';

describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    })
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    })

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});

describe('<App /> integration', () => {

    test('App passes "events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });

    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });

    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });

    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    });

    test('App passes number of events as a prop to numberOfEvents component', () => {
        const AppWrapper = mount(<App />);
        const AppNumberOfEventsState = AppWrapper.state('numberOfEvents');
        expect(AppNumberOfEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toBe(AppNumberOfEventsState)
        AppWrapper.unmount();
    })

    test('should change numberofevents App state when the user changes the input', async () => {
        const AppWrapper = mount(<App />);
        const inputNumberOfEvents = AppWrapper.find(NumberOfEvents).find('.numberOfEvents')
        const event = { target: { value: 10 } }
        await inputNumberOfEvents.simulate('change', event)
        expect(AppWrapper.state('numberOfEvents')).toBe(10)
        AppWrapper.unmount();
    })

    test('the event list should be the size of the numberofevents', async () => {
        const AppWrapper = mount(<App />);
        const inputNumberOfEvents = AppWrapper.find(NumberOfEvents).find('.numberOfEvents')
        const event = { target: { value: 10 } }
        await inputNumberOfEvents.simulate('change', event)
        const allEvents = await getEvents();
        await allEvents.slice(0, AppWrapper.state('numberOfEvents'))
        const numberOfEvents = AppWrapper.state('numberOfEvents')
        AppWrapper.update();
        expect(AppWrapper.find(EventList).find('.EventList').children()).toHaveLength(numberOfEvents)
        AppWrapper.unmount();
    })
});
import { loadFeature, defineFeature } from 'jest-cucumber'
import { mount } from 'enzyme'
import { mockData } from '../mock-data/mock-data'

import App from '../components/app/App'

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('the main page is opened', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user gets the list of events', () => {
      AppWrapper.update()
    });

    then('the events should be collapsed by default', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length)
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('the user chose an event', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user clicks on “see events details” button', () => {
      AppWrapper.update()
      AppWrapper.find('.event button').at(0).simulate('click')
    });

    then('they should get a details box showing the details of the specific event', () => {
      const details = AppWrapper.find('.event').at(0).find('.display-none')
      expect(details).toHaveLength(0)
      AppWrapper.unmount();
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user already got the details he wanted', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update()
      AppWrapper.find('.event button').at(0).simulate('click')
    });

    when('the user clicks on collapse event details', () => {
      AppWrapper.find('.event button').at(0).simulate('click')
    });

    then('the event should collapse and hide the details', () => {
      const details = AppWrapper.find('.event').at(0).find('.display-none')
      expect(details).toHaveLength(1)
      AppWrapper.unmount();
    });
  });

})
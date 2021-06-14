Feature: Specify number of events.

  Scenario: When a user hasn’t specific a number, 32 is the default number
    Given the main page is loaded
    When the user gets the list of events
    Then the list of events should have 32 events by default.

  Scenario: User can change the number of events they want to see.
    Given the user wanted to see more/less events
    When the user changes the number of events
    Then the list of events should be as long as the number specify by the user
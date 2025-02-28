Feature: Mobile Flight Booking
  Scenario: User books a flight on mobile
    Given User is on the Home Page
    When User enters 'NYC' in the Origin field
    And User selects 'New York' as the Origin
    And User enters 'LAX' in the Destination field
    And User selects 'Los Angeles' as the Destination
    And User clicks on the Search Flights button
    Then User should see search results

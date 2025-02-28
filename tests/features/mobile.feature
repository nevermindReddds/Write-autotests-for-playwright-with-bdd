<<<<<<< HEAD
Feature: Mobile Flight Booking
  Scenario: User books a flight on mobile
    Given User is on the Home Page
    When User enters 'NYC' in the Origin field
    And User selects 'New York' as the Origin
    And User enters 'LAX' in the Destination field
    And User selects 'Los Angeles' as the Destination
    And User clicks on the Search Flights button
    Then User should see search results
=======
Feature: Desktop Flight Booking

  Scenario: User successfully books a flight
    Given User is on the Home Page
    When User searches for a flight
    And User selects a random flight
    And User proceeds to checkout
    And User fills in the checkout form
    Then User successfully books the flight
>>>>>>> 04f7ab2 (Initial commit)

Feature: Mobile Flight Booking

  Scenario: User successfully books a flight on mobile
    Given User is on the Home Page
    When User searches for a flight
    And User selects a random flight
    And User proceeds to checkout
    And User fills in the checkout form
    Then User successfully books the flight

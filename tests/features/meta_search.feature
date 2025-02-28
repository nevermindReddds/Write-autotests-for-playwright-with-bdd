<<<<<<< HEAD
Feature: Meta Search Flight Booking
  Scenario: User books a flight using meta search
    Given User gets meta-search key via API
    When User opens Ovago with meta-search
    Then User completes booking
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

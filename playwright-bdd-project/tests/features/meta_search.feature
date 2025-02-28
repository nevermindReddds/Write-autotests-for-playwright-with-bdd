Feature: Meta Search Flight Booking

  Scenario: User books a flight via meta search
    Given User gets meta-search key via API
    When User opens Ovago with meta-search
    And User proceeds to checkout
    And User fills in the checkout form
    Then User successfully books the flight

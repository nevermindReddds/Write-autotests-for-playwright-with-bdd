Feature: Meta Search Flight Booking
  Scenario: User books a flight using meta search
    Given User gets meta-search key via API
    When User opens Ovago with meta-search
    Then User completes booking

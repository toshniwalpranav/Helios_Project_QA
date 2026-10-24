Feature: Facility borrower limit

  @Test @TC6
  Scenario: Validate borrower limit for a facility with an allocated borrower
    When user clicks on the edit icon for the "Facility 4" with an allocated borrower
    Then user clicks on overview tab and scrolls down to Facility Global Amount having value "$1000000"
    When User enters invalid amount "$1500000" into the limit field
    Then The value "$1500000" is displayed in the input field
    When User moves focus away from the limit field
    Then A validation error message is displayed
    When User corrects the limit to "$900000"
    And User clicks on save button
    Then The validation error message disappears

Feature: Initiate Event button state after Event #1 approval


  @Test @TC2790524
  Scenario: Validate Initiate Event button is enabled after Event #1 is approved by the Checker
    When Maker logs in and selects a deal with deal status "Event #1 Complete/Approved"
    Then user is on the "Deal Overview" tab
    When user locates the "Submit to Checker" button
    Then the "Submit to Checker" button is visible
    When user locates the "Initiate Event" button
    Then the "Initiate Event" button is enabled

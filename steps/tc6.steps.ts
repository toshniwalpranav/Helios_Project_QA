import { When, Then } from '@cucumber/cucumber';

// 6th scenario - @TC6
// Validate borrower limit for a facility with an allocated borrower

// When user clicks on the edit icon for the "Facility 4" with an allocated borrower
When(
  'user clicks on the edit icon for the {string} with an allocated borrower',
  async function (facility: string) {
    // TODO: add code
  }
);

// Then user clicks on overview tab and scrolls down to Facility Global Amount having value "$1000000"
Then(
  'user clicks on overview tab and scrolls down to Facility Global Amount having value {string}',
  async function (facilityGlobalAmount: string) {
    // TODO: add code
  }
);

// When User enters invalid amount "$1500000" into the limit field
When(
  'User enters invalid amount {string} into the limit field',
  async function (invalidLimit: string) {
    // TODO: add code
  }
);

// Then The value "$1500000" is displayed in the input field
Then(
  'The value {string} is displayed in the input field',
  async function (invalidLimit: string) {
    // TODO: add code
  }
);

// When User moves focus away from the limit field
When('User moves focus away from the limit field', async function () {
  // TODO: add code
});

// Then A validation error message is displayed
Then('A validation error message is displayed', async function () {
  // TODO: add code
});

// When User corrects the limit to "$900000"
When(
  'User corrects the limit to {string}',
  async function (correctLimit: string) {
    // TODO: add code
  }
);

// And User clicks on save button (Cucumber treats "And" as "When" here)
When('User clicks on save button', async function () {
  // TODO: add code
});

// Then The validation error message disappears
Then('The validation error message disappears', async function () {
  // TODO: add code
});

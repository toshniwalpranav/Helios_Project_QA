import { When, Then } from '@cucumber/cucumber';

// EMPTY SKELETON for @TC2790524 (Zephyr test case 2790524)
//
// The step code below is COMMENTED OUT on purpose.
// Reason: steps/initiate_event_button.steps.ts already has the same step texts,
// and Cucumber fails with "Multiple step definitions match" if both are active.
//
// To work from this skeleton:
//   1. Remove the "// " from the step blocks below.
//   2. Delete (or rename) steps/initiate_event_button.steps.ts.

// // Step 1
 When(
   'Maker logs in and selects a deal with deal status {string}',
   async function (dealStatus: string) {
     // TODO: add code
   }
 );

 Then('user is on the {string} tab', async function (tabName: string) {
   // TODO: add code
 });

 // Step 2 and Step 3 (shared)
 When('user locates the {string} button', async function (buttonName: string) {
   // TODO: add code
 });

 Then('the {string} button is visible', async function (buttonName: string) {
   // TODO: add code
 });
//
// // Step 3
 Then('the {string} button is enabled', async function (buttonName: string) {
   // TODO: add code
 });

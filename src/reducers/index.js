// importing actions and payloads from the actions/index.js file
// create a function with switch case (based on action.type)
// make change to the state/update the store

import { DEPOSIT, WITHDRAWAL } from '../actions';

export default (balance = 1234.56, action) => {
    switch (action.type) {
        case DEPOSIT:
        // increment the balance;
        return balance + +action.payload; // adding a '+' before action.payload coerces the payload into a positive number, similar to parsing it as a number
        case WITHDRAWAL:
        // decrement the balance;
        return balance - Number(action.payload);
        default:
        // return the balance
        return balance;
    }
};
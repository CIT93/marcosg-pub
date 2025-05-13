# My App
Age Discount Innovation

**Description of purpose:**
This app helps to determine if a user is eligible for a discount based on their age and membership status.

**Variables:**
- `appName` (string): The name of the app.
- `userAge` (number): The age of the user.
- `isUserMember` (boolean): Whether the user is a member of the app.

**Decision Making Process:**
The app will make a decision based on the user's membership status and age. If the user is a member or is over 60 years old, they will be eligible for a discount. This decision is determined using an `if` statement and is calculated based on the inputs of `userAge` and `isUserMember`.

**Output:**
The app will output a message in the console indicating whether the user is eligible for a discount based on the above criteria.

# Decision-Making Discount App

## Overview
This application determines whether a user qualifies for a discount based on **age** and **membership status**. If eligible, the discount is applied, and the final price is displayed.

## Decision-Making Process
- Users **aged 60 or older** get a **15% discount**.
- If a user is a **member** (but under 60), they receive a **10% discount**.
- If neither condition is met, the user gets **no discount**.

## Best Practices Used
### 1. Ternary Operator
We use a **ternary operator** in `generateMessage()` to simplify the conditional message formatting:
```javascript
let message = discount > 0
    ? `User qualifies for a discount of $${discount.toFixed(2)}.`
    : "User does not qualify for a discount.";



The addToTable function is responsible for dynamically rendering user input and calculated results into a table. It creates a new row in the table for each submitted entry and includes Edit and Delete buttons for future interactivity. While this implementation goes slightly beyond course examples, it uses standard DOM manipulation techniques that are foundational in JavaScript and front-end development.


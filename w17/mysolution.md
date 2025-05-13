I will first ask the user if they have a dishwasher and a washing machine using Yes/No questions. If they say "Yes," I will then show a question asking how many times per week they use it. I will calculate the points separately for each machine based on their answer, and if they have both, I will add the points together. This way, the form only shows questions that are relevant to the user.

In my code, I will use if statements to check how many times the user uses each machine and assign points (3, 2, 1, or 0). If the user has both a dishwasher and a washing machine, I will calculate the points for each one and then add them together for the total.

essentially, coding it in the same way we have coded the rest of them. I belive it will be just as simple as the other.

# Recycling Points Challenge

## Problem Description

We want to evaluate how much waste a user recycles in their daily life and calculate the total points based on their recycling habits. The goal is to reward users who recycle more and penalize those who don't recycle.

## Steps to Implement:

1. **Create a Field for Recycling Habits:**
   - Add a dropdown field to the form where users can select how much waste they recycle.

2. **Points Allocation:**
   - Recycling everything: +20 points.
   - Recycling some items: +10 points.
   - Not recycling: 0 points.

3. **Update the Total Calculation:**
   - Add the recycling points to the total carbon footprint.

4. **Display and Edit:**
   - Display the recycling selection in the table.
   - Allow users to edit their recycling choice when editing their data.

## Code Implementation

Here’s an example of how you might implement the recycling points:

### HTML
```html
<label>Recycling Habits</label>
<select name="recycling" required>
  <option value="">---Select recycling habits---</option>
  <option value="20">I recycle everything</option>
  <option value="10">I recycle some items</option>
  <option value="0">I don't recycle</option>
</select>



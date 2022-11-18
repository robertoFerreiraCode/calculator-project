## Description
A basic calculator designed in HTML/SCSS with functionality written in JS. MVP required number keys from 0 to 9 and have operator keys (+, -, /, *, =). Testing has been added with jest to test the various calculation functions.

![screenshot](https://user-images.githubusercontent.com/93106408/201230084-aff28369-d2b5-4d20-855c-9664449c672c.JPG)

## Setup 
Project is hosted here https://calcu-project.netlify.app/

## Approach
I chose to use SCSS over vanilla CSS as it allows me to improve maintainability, readability and modularity with the additions of nested syntax, variables. I used nested syntax to prevent having to rewrite selectors multiple times whilst providing better code organisation and structure to the code, aiding the maintainability. I used variables to define values for colours which I was using in multiple places on the site, allowing me to change it in one place only aiding in maintainability.

## Struggles
The main struggle I encountered when developing the application was dealing with edge cases in the calculations which were incorrect. These required changes to the way I handled decimals, negatives and things such as dividing by 0. This led to me developing unit tests for the calculation functions with Jest, to ensure I was outputting the correct calculation and it was consistent with any changes I was making to other parts of the application.

## Things I would do differently
multiple calculations, order of operations, more functions such as square root
I would like to change how multiple calculations are handled as currently only one operator can be used at a time, as the program calculates as soon as two numbers, and an operator is present. Adding order of operations would give the user much more flexibility in what kinds of calculations they can do with the calculator which is something I would add in the future. The calculator is also missing some functions such as square root or exponentials which be great to add, broadening the scope of possible calculations possible with the program.

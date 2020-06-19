# Password Generator Exercise [HW#3]
 
 Solution URL: https://johnk9000.github.io/HW3/
 
 In this exercise we generated a password between 8 and 128 characters in length defined via the input of a pop-up prompt.

 Sequentially, the program will ask `yes` or `no` for 'Case Sensitivity' (adds capital letters), 'Alphanumeric' (adds numbers), and 'Special Characters' (implicit) in that order.

 This will then generate the character set that satisfies the parameters specified.

 User will click the `Generate Password` button which triggers the series of functions that generates the password, and writes it into the textbox.

## Debugging
Please goto 'Develop/script.dev1.js' to read annotations and run debugging on console.  Logs will be generated as necessary for the following custom functions:

* RandomInt(max) - random integer generator.

* Password Generator Draft - recursion used to test and display contents of character sets.

* generatePassword() - generation of password within specified parameters.

* Conditional tree - console will display which condition block satisfied requirements.


## Release Notes

* Version 1 is live! Enjoy!


# Instructor Instructions: 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

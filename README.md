# React Testing Library

React Testing Library is an opinionated framework for unit testing.
RTL is opinionated about the philosophy taken when conducting tests. Prior
to React 18 Enzyme had been a popular choice for testing applications and
is still used by many older applications. Unfortunately, Enzyme is unlikely
to ever be updated to function with React 18 as it has gone from being managed
by AirBnB to being managed by an individual.

As such, RTL is now the preferred method for testing modern React apps.
RTL provides a virtual DOM for tests, it works with Jest (a test runner which finds, runs, and evaluates tests).

RTL helps with rendering components into the virtual DOM, interacting with the virtual DOM, and searching the virtual DOM.

RTL does not simply create this virtual DOM used for testing, it also
adds utilities for interacting with said DOM. This allows for front-end
testing without the need for manually testing in your browser.

RTL supports unit tests, where a single unit of code is tested in isolation.

RTL also supports integration tests - testing how multiple units work together.

RTL further support functional tests - testing a particular function (behaviour) of software.

RTL heavily encourages functional tests.

Acceptance tests can be conducted in a browser using tools like Cypress or Selenium.

RTL recommends finding elements by accessibility handles.
[testing-library](https://testing-library.com/docs/queries/about/)

When following this philosophy we often want to find items by role. To find an item by it's role we must know the role definition to look for.
[role-definitions](https://www.w3.org/TR/wai-aria/#role_definitions)

# jest-dom

The jest dom comes with create-react-app. Jest-dom imports the setupTests.js file before running each test, ensuring matchers are available. These matchers are DOM based matchers, even if you have conducted unit testing before it is likely you have never seen this methodology, this is because these matchers are checking against a virtual DOM which is a concept specific to React.

# Jest

Jest is a test runner, there are many alternative runners (e.g. moca) but Jest is the recommended testing library for RTL. Jest has a global test method which takes two arguments, a string description and a function to run. A test is considered to have failed if any error is thrown whilst running function assertions. Assertions henceforth work by throwing errors when your expectation fails.
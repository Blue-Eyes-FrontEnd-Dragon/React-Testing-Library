import { render, screen, fireEvent } from '@testing-library/react';
import { replaceCamelCaseWithSpaces } from './App';
import App from './App';

test('button turns blue when clicked', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  expect(button.textContent).toBe('Change to MediumVioletRed');
});

test('initial conditions', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
});

test('button toggles disabled on checkbox select', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();

  expect(button).not.toBeEnabled();

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();
});

// it is an alias of test
test('button turns grey when disabled', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

// describe is a way of grouping tests
describe('spaces before camel-case capital letters', () => {
  it('Works for no inner capital letters', () =>{
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });

  it('Works for one inner capital letter', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  it('Works for multiple capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
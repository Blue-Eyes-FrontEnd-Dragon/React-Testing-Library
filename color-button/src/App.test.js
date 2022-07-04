import { render, screen, fireEvent } from '@testing-library/react';
import { replaceCamleCaseWithSpaces } from './App';
import App from './App';

test('button turns blue when clicked', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to blue' });

  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  expect(button.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to blue' });

  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
});

test('button toggles disabled on checkbox select', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to blue' });

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

  const button = screen.getByRole('button', { name: 'Change to blue' });

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: 'blue' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: 'blue' });
});

// describe is a way of grouping tests
describe('spaces before camel-case capital letters', () => {
  it('Works for no inner capital letters', () =>{
    expect(replaceCamleCaseWithSpaces('Red')).toBe('Red');
  });

  it('Works for one inner capital letter', () => {
    expect(replaceCamleCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  it('Works for multiple capital letters', () => {
    expect(replaceCamleCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import NavBar from './navbar';

const history = createMemoryHistory({ initialEntries: ['/users'] });

beforeEach(() => {
  render(
    <Router history={history}>
      <NavBar />
    </Router>
  );
});

describe('NavBar Component', () => {
  it('should have users and todo list items', () => {
    const navBar = screen.getByTestId('navbar');

    expect(navBar).toHaveTextContent('Users');
    expect(navBar).toHaveTextContent('To Do');
  });

  it('should redirect to /users when users list item is clicked', () => {
    const usersItem = screen.getByTestId('navbar-users');

    fireEvent.click(usersItem);

    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/users');
  });

  it('should redirect to /todos when todos list item is clicked', () => {
    const todosItem = screen.getByTestId('navbar-todos');

    fireEvent.click(todosItem);

    expect(history.length).toBe(3);
    expect(history.location.pathname).toBe('/todos');
  });
});

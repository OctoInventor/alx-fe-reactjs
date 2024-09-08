// TodoList.test.js
import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import TodoList from '../components/TodoList'; // Adjust the path if necessary

describe('TodoList component', () => {
  it('deletes a todo', () => {
    // Render the TodoList component
    const { getByText, queryByText } = render(<TodoList />);

    // Find the todo item by its text
    const todoItem = getByText('Retrieve the lost artifact');

    // Use `within` to scope the search for the delete button within this todo's list item
    const deleteButton = within(todoItem.closest('li')).getByText('Delete');

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Assert that the todo item has been deleted and is no longer in the document
    expect(queryByText('Retrieve the lost artifact')).toBeNull();
  });
});

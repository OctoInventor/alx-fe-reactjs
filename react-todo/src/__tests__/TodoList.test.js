// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList'; // Adjust the path based on your structure

describe('TodoList component', () => {
  it('renders todos and deletes a todo', () => {
    // Mock todos data
    const todos = [
      { id: 1, text: 'Conquer the dragon', completed: false },
      { id: 2, text: 'Retrieve the lost artifact', completed: true },
      { id: 3, text: 'Brew a potion of courage', completed: false }
    ];

    // Mock the onDeleteTodo function
    const mockDeleteTodo = jest.fn();

    // Render the TodoList component
    const { getByText, queryByText } = render(<TodoList todos={todos} onDeleteTodo={mockDeleteTodo} />);

    // Ensure a todo item is rendered
    expect(getByText('Retrieve the lost artifact')).toBeInTheDocument();

    // Simulate clicking the delete button for the second todo
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    // Ensure the mock function is called when the delete button is clicked
    expect(mockDeleteTodo).toHaveBeenCalled();
  });
});

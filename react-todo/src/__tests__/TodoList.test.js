// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this import is here
import TodoList from '../components/TodoList'; // Adjust the path based on your project structure

describe('TodoList component', () => {
  it('renders todos and deletes a todo', () => {
    // Mock todos data
    const todos = [
      { id: 1, text: 'Conquer the dragon', completed: false },
      { id: 2, text: 'Retrieve the lost artifact', completed: true },
      { id: 3, text: 'Brew a potion of courage', completed: false },
    ];

    // Mock the onDeleteTodo function
    const mockDeleteTodo = jest.fn();

    // Render the TodoList component
    const { getByText, getAllByText } = render(<TodoList todos={todos} onDeleteTodo={mockDeleteTodo} />);

    // Ensure a todo item is rendered
    expect(getByText('Retrieve the lost artifact')).toBeInTheDocument();

    // Get all "Delete" buttons and click the second one (assuming the 2nd item should be deleted)
    const deleteButtons = getAllByText('Delete');
    fireEvent.click(deleteButtons[1]); // Click the second delete button

    // Ensure the mockDeleteTodo function is called with the correct id
    expect(mockDeleteTodo).toHaveBeenCalledWith(2); // Expect the second todo (id: 2) to be deleted
  });
});

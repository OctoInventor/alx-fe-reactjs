// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the .toBeInTheDocument() matcher
import TodoList from '../components/TodoList'; // adjust path as necessary

describe('TodoList component', () => {
  it('renders todos and allows a todo to be deleted', () => {
    // Sample todos and mock function
    const todos = [
      { id: 1, text: 'Conquer the dragon', completed: false },
      { id: 2, text: 'Retrieve the lost artifact', completed: true },
      { id: 3, text: 'Brew a potion of courage', completed: false },
    ];

    const mockDeleteTodo = jest.fn(); // Mock function to simulate deleting a todo

    const { getByText, queryByText } = render(
      <TodoList todos={todos} onDeleteTodo={mockDeleteTodo} />
    );

    // Check if todos are rendered
    expect(getByText('Retrieve the lost artifact')).toBeInTheDocument();
    expect(getByText('Conquer the dragon')).toBeInTheDocument();
    expect(getByText('Brew a potion of courage')).toBeInTheDocument();

    // Simulate clicking the delete button for the second todo
    const deleteButton = getByText('Retrieve the lost artifact').closest('li').querySelector('button');
    fireEvent.click(deleteButton);

    // Verify that the delete function was called with the correct id
    expect(mockDeleteTodo).toHaveBeenCalledWith(2);

    // Check if the todo item is removed from the document
    expect(queryByText('Retrieve the lost artifact')).not.toBeInTheDocument();
  });
});

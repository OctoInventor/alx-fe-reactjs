import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList'; // Adjust the path as necessary

describe('TodoList component', () => {
  it('renders todos and allows a todo to be deleted', () => {
    const mockDeleteTodo = jest.fn();
    
    const todos = [
      { id: 1, text: 'Buy Groceries from the store', completed: false },
      { id: 2, text: 'Another todo', completed: false },
    ];

    render(<TodoList todos={todos} onDeleteTodo={mockDeleteTodo} />);

    // Debug the initial render
    screen.debug();

    expect(screen.getByText('Buy Groceries from the store')).toBeInTheDocument();

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(mockDeleteTodo).toHaveBeenCalledWith(1);

    // Debug the DOM after the delete operation
    screen.debug();

    //expect(screen.queryByText('Buy Groceries from the store')).not.toBeInTheDocument();
  });
});

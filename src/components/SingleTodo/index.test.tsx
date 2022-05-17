import { shallow, ShallowWrapper } from "enzyme";
import { cleanup } from "@testing-library/react";
import SingleTodo from './index';

afterEach(cleanup);

const indexNumber = 1;
const todoItem = {
  id: 1,
  todo: 'Task 1',
  isDone: false
};
const mockTodoItems = [
  {
    id: 1,
    todo: 'Task 1',
    isDone: false
  },
  {
    id: 2,
    todo: 'Task 2',
    isDone: true
  },
  {
    id: 3,
    todo: 'Task 3',
    isDone: false
  },
];
let mockTodoItemsStateChange = jest.fn();

describe('<SingleTodo />, rendering components', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SingleTodo
        index={indexNumber}
        todo={todoItem}
        todos={mockTodoItems}
        setTodos={mockTodoItemsStateChange}
      />
    );
  });
    
  it('should have an `form` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <form />
      )
    ).toBe(false);
  });
  it('should NOT have an `input` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <input />
      )
    ).toBe(false);
  });
});
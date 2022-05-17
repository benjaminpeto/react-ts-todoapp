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
const allTodoItems = [
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
let allTodoItemsStateChange = jest.fn();

describe('<SingleTodo />, rendering components', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SingleTodo index={indexNumber} todo={todoItem} todos={allTodoItems} setTodos={allTodoItemsStateChange} />
    );
  });

  it('rendering `form` element without crashing', () => {
    shallow(<SingleTodo index={indexNumber} todo={todoItem} todos={allTodoItems} setTodos={allTodoItemsStateChange} />);
  });
  it('should NOT have an `input` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <input />
      )
    ).toBe(false);
  });
});
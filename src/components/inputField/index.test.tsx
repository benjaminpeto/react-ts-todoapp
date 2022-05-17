import { shallow, ShallowWrapper } from "enzyme";
import { cleanup } from "@testing-library/react";
import { InputField } from "./index";

import { GrSend } from 'react-icons/gr'

afterEach(cleanup);

const onSubmit = jest.fn();
const todoSetState =  jest.fn();
let todoItem = 'some task';

describe('<InputField />, rendering components', () => {
  let wrapper: ShallowWrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <InputField handleAddTodo={onSubmit} setTodo={todoSetState} todo={todoItem} />
    );
  });

  it('should have an `input` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <input />
      )
    ).toBe(true);
  });
  it('should have a `button` element', () => {
    expect(
      wrapper.containsMatchingElement(
        <button><GrSend className='send' /></button>
      )
    ).toBe(true);
  });

  describe('the user populates the input', () => {
    it('should update the state property input with `some task`', () => {
      expect(wrapper.find('input[type="input"]').prop('value')).toEqual('some task');
    });
  });

  describe('and then submits the form', () => {
    it('clicks the submit button', () => {
      wrapper.find('.input').simulate('submit', {
        preventDefault: () => {},
      }); // 'click' cannot be simulated, as button is inside a form, USE 'submit'
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
    // -------------- this not working still ----------------------------------------
    // it('then should clear the input field', () => {
    //   let form = wrapper.find('input');
    //   form.simulate('submit', {
    //     target: { value: '' }
    //   });
    //   wrapper.find('input');
    //   expect(wrapper.find('input').props().value).toEqual('');
    // });
    // -------------- this not working still ----------------------------------------
  });
});

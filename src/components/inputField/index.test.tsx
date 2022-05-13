import { shallow } from "enzyme";
import { InputField } from "./index";

import { GrSend } from 'react-icons/gr'

describe('<InputField />, rendering components', () => {
  let wrapper: unknown;
  beforeEach(() => {
    wrapper = shallow(
      <InputField />
    );
  });
  it('rendering `form` element without crashing', () => {
    shallow(<InputField />);
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
    it('should update the state property input `some task`', () => {
      wrapper.find('input[type="input"]').simulate('change', {
        target: {
          value: 'some task',
        },
      });
      expect(wrapper.find('input[type="input"]').prop('value')).toEqual('some task');
    });
  })
});
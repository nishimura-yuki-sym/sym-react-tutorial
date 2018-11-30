import * as React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import {placeholder} from '../styles/mixin';

const Input = styled.input`
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  color: ${colors.darkGray};
  background-color: ${colors.white};
  background-image: none;
  border: 1px solid ${colors.darkCloud};
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  border-color: ${props => props['data-is-error'] ? colors.darkRed : colors.darkCloud};
  box-sizing: border-box;
  ${placeholder(colors.darkCloud)}
`;

const TextInput = (props: {
  name: string,
  type?: string,
  value?: number | string,
  placeholder?: string,
  tabIndex?: number,
  disabled?: boolean,
  readOnly?: boolean,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
  onClick?: () => void,
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  isError?: boolean,
}) => {
  const type = props.type ? props.type : 'text';

  return (
    <Input
      name={props.name}
      type={type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      tabIndex={props.tabIndex}
      readOnly={props.readOnly}
      disabled={props.disabled}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      data-is-error={props.isError}
    />
  );
};

export default TextInput;

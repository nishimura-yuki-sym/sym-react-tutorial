import * as React from 'react';
import styled, {StyledFunction} from 'styled-components';
import colors from '../styles/colors';
import Typography from './Typography';

interface ButtonProps {
  buttonType: () => string;
}

const button: StyledFunction<ButtonProps & React.HTMLProps<HTMLInputElement>> = styled.button;
const ButtonStyle = button`  
  width: 100%;
  padding: 7px 12px;
  border: none;
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  touch-action: manipulation;
  transition: background-color .18s ease-in-out;
  box-sizing: border-box;
   
  &:disabled{
    cursor: not-allowed;
  }
  
  ${props => props.buttonType}
`;

const Default = () => `
  background-color: ${colors.darkCloud};
  color: ${colors.darkNavy};
  
  &:hover {
    background-color: ${colors.extraDarkCloud};
  }
  &:active {
    color: ${colors.extraDarkGray};
    background-color: ${colors.lightGray};
    border-color: ${colors.darkCloud};
  }
  &:disabled {
    background-color: ${colors.darkCloud};
    &:hover{
      background-color: ${colors.darkCloud};
    }
    opacity: 0.5;
  }
`;

const Success = () => `
  background-color: ${colors.lightGreen};
  color: ${colors.white};
  
  &:hover {
    background-color: ${colors.green};
  }
  &:active {
    color: ${colors.darkGreen};
    background-color: ${colors.lightGray};
    border-color: ${colors.darkGreen};
  }
  &:disabled {
    background-color: ${colors.lightGreen};
    &:hover{
      background-color: ${colors.lightGreen};
    }
    opacity: 0.5;
  }
`;

const Submit = () => `
  background-color: ${colors.blue};
  color: ${colors.white};
  
  &:hover {
    background-color: ${colors.darkBlue};
  }
  &:active {
    background-color: ${colors.navy};
  }
  &:disabled {
    background-color: ${colors.blue};
    &:hover{
      background-color: ${colors.blue};
    }
    opacity: 0.5;
  }
`;


class Button extends React.Component<Button.Props, {}> {
  render() {
    const {
      onClick,
      disabled,
      children,
    } = this.props;

    const type = this.props.type ? this.props.type : Default;

    return (
      <ButtonStyle onClick={onClick} disabled={disabled} buttonType={type}>
        <Typography variant={Typography.Variant.Button1}>
          {children}
        </Typography>
      </ButtonStyle>
    );
  }
}

namespace Button {
  export interface Props {
    type?: () => string;
    onClick: (e: object) => void;
    disabled?: boolean;
    children: JSX.Element | string;
  }

  export const Type = {
    Default,
    Success,
    Submit,
  };
}

export default Button;

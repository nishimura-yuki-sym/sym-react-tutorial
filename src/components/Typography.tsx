import * as React from 'react';
import styled, {StyledFunction} from 'styled-components';
import fontWeight from '../styles/font-weight';

const Display4 = () => `
  font-size: 110px;
  font-weight: ${fontWeight.thin};
  letter-spacing: -1px;
  line-height: 140px;
`;

const Display3 = () => `
  font-size: 55px;
  font-weight: ${fontWeight.light};
  letter-spacing: -1px;
  line-height: 72px;
`;

const Display2 = () => `
  font-size: 45px;
  font-weight: ${fontWeight.light};
  letter-spacing: -1px;
  line-height: 64px;
`;

const Display1 = () => `
  font-size: 35px;
  font-weight: ${fontWeight.light};
  letter-spacing: -1px;
  line-height: 48px;
`;

const Heading = () => `
  font-size: 31px;
  font-weight: ${fontWeight.medium};
  letter-spacing: -1px;
  line-height: 44px;
  /*
  @include sp {
    font-size: 21px;
    line-height: 32px;
  }
  */
`;

const Title = () => `
  font-size: 25px;
  font-weight: ${fontWeight.regular};
  letter-spacing: -1px;
  line-height: 40px;
  /*
  @include sp {
    font-size: 17px;
    line-height: 28px;
  }
  */
`;

const SectionHeading = () => `
  font-size: 21px;
  font-weight: ${fontWeight.regular};
  letter-spacing: -1px;
  line-height: 32px;
  /*
  @include sp {
    font-size: 17px;
    line-height: 28px;
  }
  */
`;

const SubSectionHeading = () => `
  font-size: 17px;
  font-weight: ${fontWeight.regular};
  line-height: 28px;
`;

const Input = () => `
  font-size: 17px;
  font-weight: ${fontWeight.regular};
  line-height: 28px;
  /*
  @include sp {
    font-size: 15px;
    line-height: 24px;
  }
  */
`;

const Body1 = () => `
  font-size: 15px;
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  /*
  @include sp {
    font-size: 13px;
    line-height: 20px;
  }
  */
`;


const Body2 = () => `
  font-size: 15px;
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  /*
  @include sp {
    font-size: 13px;
    line-height: 20px;
  }
  */
`;

const Button1 = () => `
  font-size: 15px;
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  /*
  @include sp {
    font-size: 13px;
    line-height: 20px;
  }
  */
`;

const Button2 = () => `
  font-size: 15px;
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  /*
  @include sp {
    font-size: 13px;
    line-height: 20px;
  }
  */
`;

const Button3 = () => `
  font-size: 13px;
  font-weight: ${fontWeight.regular};
  line-height: 20px;
`;

const Caption = () => `
  font-size: 13px;
  font-weight: ${fontWeight.regular};
  line-height: 20px;
  /*
  @include sp {
    font-size: 11px;
    line-height: 16px;
  }
  */
`;


interface TypographyProps {
  variant: () => string;
}

const typography: StyledFunction<TypographyProps & React.HTMLProps<HTMLInputElement>> = styled.span;
const TypographyStyle = typography`
  ${props => props.variant}
`;

class Typography extends React.Component<Typography.Props, {}> {
  render() {
    const {variant, children} = this.props;
    return (
      <TypographyStyle variant={variant}>
        {children}
      </TypographyStyle>
    );
  }
}

namespace Typography {
  export interface Props {
    variant;
    children: JSX.Element | string | JSX.Element[] | string[];
  }

  // see: https://brand.ecumerun.com/typography/
  export const Variant = {
    Display4,
    Display3,
    Display2,
    Display1,
    Heading,
    Title,
    SectionHeading,
    SubSectionHeading,
    Input,
    Body1,
    Body2,
    Button1,
    Button2,
    Button3,
    Caption,
  };
}

export default Typography;

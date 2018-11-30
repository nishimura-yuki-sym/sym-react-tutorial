import * as React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Typography from './Typography';
import Button from './Button';

const LoggedInHeaderStyle = styled.header`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 12px;
  background-color: ${colors.lightGreen};
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .24);
  box-sizing: border-box;
`;

const LogoutButton = styled.div`
  width: 120px;
  box-sizing: border-box;
`;

const LoggedInHeader = (props: {
  onClickLogout: (e) => void,
}) => {

  return (
    <LoggedInHeaderStyle>
      <Typography variant={Typography.Variant.Title}>React TODOアプリ</Typography>
      <LogoutButton>
        <Button onClick={props.onClickLogout} >
          ログアウト
        </Button>
      </LogoutButton>
    </LoggedInHeaderStyle>
  );
};

export default LoggedInHeader;

import * as React from 'react';
import {observer} from 'mobx-react';
import styled from 'styled-components';
import LoginStore from '../stores/LoginStore';
import colors from '../styles/colors';
import TextInput from './TextInput';
import Typography from './Typography';
import Button from './Button';

const Form = styled.form`
  width: 360px;
  padding: 14px;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .24);
  
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  margin-bottom: 16px;
  color: ${colors.black};

  display: flex;
  flex-direction: column;
  align-items: center;  
`;

const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;  
`;

const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const ErrorMessage = styled.span`
  color: ${colors.red};
`;


@observer
class LoginForm extends React.Component<LoginForm.Props, {}> {

  render() {

    const {
      store,
      onChangeLoginId,
      onChangePassword,
      onSubmit,
    } = this.props;

    return (
      <Form>
        <Header>
          <Typography variant={Typography.Variant.Title}>ログイン</Typography>
        </Header>

        <Body>
        <InputField>
          <Typography variant={Typography.Variant.Body1}>ログインID</Typography>
          <TextInput
            name="loginId"
            value={store.loginId}
            readOnly={store.submitting}
            placeholder="test@example.com"
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              onChangeLoginId(e.currentTarget.value);
            }}
          />
          { // エラーメッセージがセットされている場合は出力させる
            store.errorMessageLoginId &&
            <ErrorMessage>
              <Typography variant={Typography.Variant.Caption}>
                {store.errorMessageLoginId}
              </Typography>
            </ErrorMessage>
          }
        </InputField>

        <InputField>
          <Typography variant={Typography.Variant.Body1}>パスワード</Typography>
          <TextInput
            name="password"
            type="password"
            value={store.password}
            readOnly={store.submitting}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              onChangePassword(e.currentTarget.value);
            }}
          />
          { // エラーメッセージがセットされている場合は出力させる
            store.errorMessagePassword &&
            <ErrorMessage>
              <Typography variant={Typography.Variant.Caption}>
                {store.errorMessagePassword}
              </Typography>
            </ErrorMessage>
          }
        </InputField>

        { // エラーメッセージがセットされている場合は出力させる
          store.errorMessageAll &&
          <ErrorMessage>
            <Typography variant={Typography.Variant.Caption}>
              {store.errorMessageAll}
            </Typography>
          </ErrorMessage>
        }
        <Button
          type={Button.Type.Submit}
          disabled={store.submitting}
          onClick={(e: React.FormEvent<HTMLButtonElement>) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {store.submitting ? '通信中' : 'ログイン'}
        </Button>
        </Body>
      </Form>
    );
  }

}

namespace LoginForm {
  export interface Props {
    store: LoginStore;
    onChangeLoginId: (value) => void;
    onChangePassword: (value) => void;
    onSubmit: () => void;
  }
}

export default LoginForm;

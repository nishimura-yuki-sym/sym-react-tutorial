import * as React from 'react';
import {observer} from 'mobx-react';
import styled from 'styled-components';
import HomeStore from '../stores/HomeStore';
import colors from '../styles/colors';
import TextInput from './TextInput';
import Typography from './Typography';
import Button from './Button';

const Form = styled.form`
  width: 600px;
  padding: 12px 8px 12px 8px ;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .24);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;


const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const ButtonField = styled.div`
  width: 200px;
`;


@observer
class TodoForm extends React.Component<TodoForm.Props, {}> {

  render() {

    const {
      store,
      onChangeTaskName,
      onSubmit,
    } = this.props;

    return (
      <Form>
        <InputField>
          <Typography variant={Typography.Variant.Body1}>やること</Typography>
          <TextInput
            name="taskName"
            value={store.taskName}
            readOnly={store.submitting}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              onChangeTaskName(e.currentTarget.value);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (store.isSubmittable && e.keyCode === 13) {
                onSubmit();
              }
            }}
          />
        </InputField>

        <ButtonField>
          <Button
            type={Button.Type.Submit}
            disabled={!store.isSubmittable || store.submitting}
            onClick={(e: React.FormEvent<HTMLButtonElement>) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            {store.submitting ? '通信中' : '追加'}
          </Button>
        </ButtonField>
      </Form>
    );
  }

}

namespace TodoForm {
  export interface Props {
    store: HomeStore;
    onChangeTaskName: (value) => void;
    onSubmit: () => void;
  }
}

export default TodoForm;

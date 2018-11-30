import * as React from 'react';
import {observer} from 'mobx-react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Button from './Button';
import Typography from './Typography';
import Todo from '../models/Todo';

const TodoListStyle = styled.ul`
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

const TodoItem = styled.li`
  width: 100%;
  height: 60px;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child){
    border-bottom: 1px solid ${colors.extraDarkCloud};
  }
`;
const NameSection = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const ButtonSection = styled.div`
  width: 100px;
  flex-shrink: 1;
`;

@observer
class TodoList extends React.Component<TodoList.Props, {}> {

  render() {
    const {list, onDelete} = this.props;

    return (
      <TodoListStyle>
        {
          list.map((t: Todo, i) => {
            return (
              <TodoItem key={i}>
                <NameSection>
                  <Typography variant={Typography.Variant.Heading}>{t.name}</Typography>
                </NameSection>
                <ButtonSection>
                  <Button onClick={(e) => {
                    onDelete(t);
                  }}>完了
                  </Button>
                </ButtonSection>
              </TodoItem>
            );
          })
        }
      </TodoListStyle>
    );
  }

}

namespace TodoList {
  export interface Props {
    list: Todo[];
    onDelete: (todo) => void;
  }
}

export default TodoList;

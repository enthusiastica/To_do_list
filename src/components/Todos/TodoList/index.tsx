import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'antd';

import TodoItem from '../TodoItem';

const TodoList = ({ todos, onTodoRemoval, onTodoToggle }) => (
  <List
    locale={{
      emptyText: "There's nothing to do :("
    }}
    dataSource={todos}
    renderItem={todo => (
      <TodoItem
        todo={todo}
        onTodoToggle={onTodoToggle}
        onTodoRemoval={onTodoRemoval}
      />
    )}
    pagination={{
      position: 'top',
      pageSize: 10
    }}
  />
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoToggle: PropTypes.func.isRequired,
  onTodoRemoval: PropTypes.func.isRequired
};

export default TodoList;

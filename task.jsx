import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const MARGIN_PADDING = 10;
const BORDER = 3;
const RADIUS = 50;
const WIDTH_HEIGHT = 40;

const Container = styled.div`
  margin-right: ${MARGIN_PADDING}px;
  border: ${BORDER}px solid lightgrey;
  border-radius: ${RADIUS}%;
  padding: ${MARGIN_PADDING}px;
  background-color: green;
  width: ${WIDTH_HEIGHT}px;
  height: ${WIDTH_HEIGHT}px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export default class Task extends React.Component {
  render(){
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.content.substring(0, 4)}
          </Container>
        )}
      </Draggable>
    );
  }
}
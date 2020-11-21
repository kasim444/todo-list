import { observer } from 'mobx-react-lite'
import { useStore } from '../../models/RootStore'
import { Layout, Title } from './styled'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState, memo } from 'react'
import { quotes as initial } from './data'
import styled from 'styled-components'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const grid = 8
export const borderRadius = 2

const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`

function Quote({ quote, index }) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided) => (
        <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          {quote.content}
        </QuoteItem>
      )}
    </Draggable>
  )
}

// Ensuring the whole list does not re-render when the droppable re-renders
const QuoteList = memo(function QuoteList({ quotes }) {
  return quotes.map((quote, index) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ))
})

const TodoList = observer(function TodoList() {
  const { todos } = useStore()
  const [quotes, setQuotes] = useState(initial)

  function onDragEnd(result) {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const newQuotes = reorder(
      quotes,
      result.source.index,
      result.destination.index
    )

    setQuotes(newQuotes)
  }

  return (
    <Layout className='site-layout'>
      <Title>To Do List</Title>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='list'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <QuoteList quotes={quotes} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Layout>
  )
})

export default TodoList

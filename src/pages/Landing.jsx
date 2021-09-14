import React, {useState, useEffect} from 'react'
import { Button, Checkbox, Input, List, Row, Typography, message, Divider } from 'antd'

function ToDoDemo() {
  const [ myList, setMyList ] = useState([])
  const [ inputState, setInputState ] = useState("")
  const [ username, setUserName ] = useState("")

  const handleClick = () => {
    if (inputState.trim().length > 0) {
      setMyList(l => [
        ...l,
        {
          value: inputState,
          id: l.length,
          checked: false
        }
      ])
      setInputState("")
    } else {
      message.warning("Please input a value")
    }
  }
  const handleInputChange = e => {
    setInputState(e.target.value)
  }
  const getUserName = () => {
    setUserName(window.prompt("What's your name?"))
  }

  const ToDoList = ({checkedState}) => {
    const notification = (checked, task) => {
      if (checked) {
        message.info(`Completed: ${task}`)
      } else {
        message.info(`Undo: ${task}`)
      }
    }
    const toggleCheck = (id, checked) => {
      notification(checked, myList[id].value)
      setMyList(l => {
        return l.map(
          (todo, idx) => {
            if (idx === id) {
              return {
                ...todo,
                checked: !todo.checked
              }
            }
            return todo
          }
        )
      })
    }

    return (
    <List 
      dataSource={myList.filter(todo => todo.checked === checkedState)} 
      style={{width:"100%", height:"100%"}}
      renderItem={
        todoItem => (
          <List.Item>
            <Row 
              style={{width:"100%", padding: "0.5em 1em"}}
              justify="space-between">
              <Checkbox 
                checked={todoItem.checked} 
                onChange={e=>toggleCheck(todoItem.id, e.target.checked)} />
              <Typography.Text>{todoItem.value}</Typography.Text>
            </Row>
          </List.Item>
        )
      }
      />
    )
  }
  useEffect(()=> { getUserName() }, [])

  return (
    <>
      <Typography.Title level={3}>{`What do you wish to complete today, ${username}?`}</Typography.Title>
      <Input value={inputState} onChange={handleInputChange}/>
      <Button block type="primary" onClick={handleClick}>Add ToDo</Button>
      <ToDoList checkedState={false} />
      <Divider>Completed</Divider>
      <ToDoList checkedState={true} />
    </>
  )
}

export default ToDoDemo
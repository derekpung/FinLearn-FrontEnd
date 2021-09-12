import React, {useState, useEffect} from 'react'
import { Button, Input, List, Typography, Checkbox, Row} from 'antd'

function ToDoDemo() {
  const [ myList, setMyList ] = useState([])
  const [ inputState, setInputState ] = useState("")
  const [ username, setUserName ] = useState("")

  const handleClick = () => {
    setMyList(l => [...l, inputState])
    setInputState("")
  }
  const handleInputChange = e => {
    setInputState(e.target.value)
  }
  const getUserName = () => {
    setUserName(window.prompt("What's your name?"))
  }

  useEffect(()=> { getUserName() }, [])

  return (
    <>
      <Typography.Title>{`Hi, ${username}`}</Typography.Title>
      <Input value={inputState} onChange={handleInputChange}/>
      <Button block type="primary" onClick={handleClick}>Add</Button>
      <List 
        dataSource={myList} 
        style={{width:"100%", height:"100%"}}
        renderItem={
          value => (
            <List.Item>
              <Row 
                style={{width:"100%", padding: "0.5em 1em"}}
                justify="space-between">
                <Checkbox />
                <Typography.Text>{value}</Typography.Text>
              </Row>
            </List.Item>
          )
        }
        />
    </>
  )
}

export default ToDoDemo
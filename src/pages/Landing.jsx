import React, {useState, useEffect} from 'react'
import { Button, Input, List, Typography, Checkbox, Row} from 'antd'

function ToDoDemo() {
  const [ myList, setMyList ] = useState([])
  const [ inputState, setInputState ] = useState("")

  const handleClick = () => {
    setMyList(l => [...l, inputState])
    setInputState("")
  }
  const handleInputChange = e => {
    setInputState(e.target.value)
  }
  const promptUserName = () => {
    window.prompt("What's your name?")
  }
  useEffect(()=> { promptUserName() }, [ ])

  return (
    <>
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
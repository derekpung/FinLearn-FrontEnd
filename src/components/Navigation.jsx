import React, { useState } from "react";
import { Layout, Row, Collapse, Button, Space } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useAppContext } from '@src/Context'
import { signOut } from '@js/auth'
import '@styles/Navigation.css'


function MobileNavigation({ expandedKeyState, closeNav }) {
  const navClassName = "mobile-nav"
  const [ expandedKey, setExpandedKey ] = expandedKeyState
  const { userAuth } = useAppContext()

  return (
    <Collapse
      activeKey={expandedKey}
      bordered={false}
      className = {`${navClassName} ${expandedKey ? "expanded" : ""}`}
    >
      <Collapse.Panel
        key="expanded-nav"
        className="mobile-nav-panel"
      > 
        <div className="menu-link-container">
          {
            userAuth?
            <div
              className="menu-link"
              onClick={()=>signOut().then(()=>window.location.reload(false))}
            >
            Sign Out
            </div>
            : 
            <Link to="/signin" target="_blank" onClick={closeNav} className="menu-link">Sign in</Link>
          }
        </div>
        <div className="menu-link-container">
          <Link to="/about" target="_blank" onClick={closeNav} className="menu-link">About</Link>
        </div>
      </Collapse.Panel>
    </Collapse>
  )
}

function DesktopNavigation() {
  const { userAuth } = useAppContext()

  return (
    <div className="desktop-nav">
      <Space size="large">
        {
          userAuth ?
          <Link 
            to="/"
            onClick={()=>signOut().then(()=>window.location.reload(false))}
            className="menu-link"
            style={{fontSize: "0.7em"}}
          >Sign Out</Link>
          : 
          <Link 
            to="/signin"
            className="menu-link"
            style={{fontSize: "0.7em"}}
          >Sign in</Link>
        }
      </Space>
    </div>
  )
}

function Navigation() {
  const [ expandedKey, setExpandedKey ] = useState("")
  const { neutralShade0 } = useAppContext()
  const closeNav = () => setExpandedKey("")

  return (
    <>
    <Layout.Header
      id="top-nav"
      style={{
        position: "fixed",
        zIndex: 10,
        width: "100%"
      }}
    >
      <Row justify="space-between" style={{height:"64px"}}>
        <div style={{ marginLeft: "2em"}}>
          <Link to="/" onClick={closeNav} >
            FinLearn
          </Link>
        </div>
        <DesktopNavigation /> 
        <div id="menu-button">
          <Button type="text" onClick={() => expandedKey==="" ? setExpandedKey("expanded-nav") : setExpandedKey("")}>
            {expandedKey ? <CloseOutlined style={{color: neutralShade0 }}/> : <MenuOutlined style={{color: neutralShade0 }}/>}
          </Button>
        </div>
      </Row>
      <MobileNavigation expandedKeyState={ [expandedKey, setExpandedKey] } closeNav={closeNav}/>
    </Layout.Header>
    </>
  )
}

export default Navigation

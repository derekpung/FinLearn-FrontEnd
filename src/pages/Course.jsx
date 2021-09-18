import React from 'react';
import Page from '@components/Page';
import Button from '@mui/material/Button';
// import { textAlign } from '@mui/system';
// import ButtonLine from '../components/ButtonLine';
// import TitlebarImageList from '../components/ImageLine';
import { Avatar } from '@mui/material';

function Course() {

  return (
    <Page pageTitle="Course" containertype="containerprofile">
      <div className="containerprofile">
      <section className="certificate">
      
      <h4 className="certTitle" style={{textAlign:"justified"}}>Blockchain</h4>
      <br />
      
      <p className="contents" style={{textAlign:"justified"}}>Innovate with the Next Frontier in Technology. Learn how the&nbsp;&nbsp; blockchain is leading to a paradigm shift in decentralized&nbsp;&nbsp; application programming</p>

      <h5 className="offered">&nbsp;&nbsp;Offered by <br/>&nbsp;&nbsp;D University</h5>
      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<Button variant="contained" className="centerbutton"> Start Course</Button>
      
      
      <p className="space">&nbsp;</p>
    </section>
    <section className="coursepage">
      
      <h4 className="certTitle" style={{textAlign:"justified"}}>About the Course</h4>
      <br />
      <div className="sideby">
      <button class="btn"><i class="fa fa-globe" style={{color:"#007AFF"}}></i>100% Online</button>
      &nbsp; &nbsp; &nbsp; 
      {/* <button style={{fontSize:"12px"}}>English </button> */}
      <button><i class="fa fa-comment" style={{color:"#007AFF"}}></i>English</button>
      &nbsp; &nbsp; &nbsp;
      <button><i class="fa fa-tasks" style={{color:"#007AFF"}}></i>Beginner Level</button>
      &nbsp; &nbsp; &nbsp;
      <button> <i class="fa fa-hourglass-start" style={{color:"#007AFF"}}></i>1 Hour to Complete</button>
      </div>

    </section>
    <section className="coursepage">
      
      <h4 className="certTitle" style={{textAlign:"justified"}}>Skills You Will Gain</h4>
      <br />
      <div className="sideby">
      <button class="btn"><i class="fa fa-check" style={{color:"green"}}></i>Blockchains</button>
      &nbsp; &nbsp; &nbsp; 
      <button class="btn"><i class="fa fa-check" style={{color:"green"}}></i>Ethereum</button>
      &nbsp; &nbsp; &nbsp;
      <button class="btn"><i class="fa fa-check" style={{color:"green"}}></i>Solidity</button>
      &nbsp; &nbsp; &nbsp;
      <button class="btn"><i class="fa fa-check" style={{color:"green"}}></i>Smart Contracts</button>
      
      </div>

    </section>
    <section className="coursepage">
      
      <h4 className="certTitle" style={{textAlign:"justified"}}>Taught By</h4>
    
      <div className="sideby">
        
      <Avatar alt="Amal" src="https://images.unsplash.com/photo-1551862253-418b05e65c41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" sx={{ width: 80, height: 80 }} variant="round" margin="3px"/>
      <h5>Dr. Amal Almoud</h5>
      <br />
      </div>
      <br />
      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<Button variant="contained" className="centerButton"> Start Course</Button>
    
      
      

    </section>


    

    
    </div>
    </Page>
  )
}

export default Course
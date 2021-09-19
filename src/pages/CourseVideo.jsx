import React from 'react';
import Page from '@components/Page';
import { Button } from '@mui/material';

function CourseVideo() {

  return (
    <Page pageTitle="Blockchain Basics" containertype="containercourse">
     <div className="containercourse">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yubzJw0uiE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* QUIZ */}
      <div id="quiz">
        <br />
      <Button variant="contained" className="coursebuttons"><i class='fas fa-edit'></i>Quiz</Button>
      </div>
       {/* CASE STUDY 1 */}
       <div id="case">
        <br />
      <Button variant="contained" className="coursebuttons"><i class='fas fa-book-open'></i>Case Study 1</Button>
      </div>
       {/* CASE STUDY 2 */}
       <div id="case">
        <br />
      <Button variant="contained" className="coursebuttons"><i class='fas fa-book-open'></i>Case Study 2</Button>
      </div>
 
      
      {/* <Button variant="contained"><i class='fas fa-book-open'></i>Quiz</Button> */}
      
       {/* <div id="quiz">
        <br />
      </div>
      <Button variant="contained" className="coursebuttons"><i class='fas fa-book-edit'></i>Quiz</Button> */}

    </div>
    
    </Page>
  )
}

export default CourseVideo
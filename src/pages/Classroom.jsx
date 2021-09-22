import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import Page from '@components/Page';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { completeTransaction } from '@js/transaction'

function useQuery() {
  return queryString.parse(useLocation().search)
}

function Classroom() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const query = useQuery()

  const handleMock = () => {
    completeTransaction(user.sub, query.id)
  }
  
  if( !isLoading && isAuthenticated ) {
    return (
      <Page pageTitle="Blockchain Basics" containertype="containercourse">
      <div className="containercourse">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yubzJw0uiE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* QUIZ */}
        <div id="quiz">
          <br />
        <Button variant="contained" className="coursebuttons"><i className='fas fa-edit'></i>Quiz</Button>
        </div>
        {/* CASE STUDY 1 */}
        <div id="case">
          <br />
        <Button variant="contained" className="coursebuttons"><i className='fas fa-book-open'></i>Case Study 1</Button>
        </div>
        {/* CASE STUDY 2 */}
        <div id="case">
          <br />
        <Button variant="contained" className="coursebuttons"><i className='fas fa-book-open'></i>Case Study 2</Button>
        </div>
        <div>
        <br/>
        <Button variant="contained" onClick={handleMock}>Mock completion</Button>
        </div>
        
        {/* <Button variant="contained"><i className='fas fa-book-open'></i>Quiz</Button> */}
        
        {/* <div id="quiz">
          <br />
        </div>
        <Button variant="contained" className="coursebuttons"><i className='fas fa-book-edit'></i>Quiz</Button> */}

      </div>
      </Page>
    )
  }
}

export default Classroom
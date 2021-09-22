import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Avatar, Grid, Divider } from '@mui/material';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { getCourseById } from '@js/courses'
import Loading from '@components/Loading'
import Page, { PageSection } from '@components/Page';

function useQuery() {
  return queryString.parse(useLocation().search)
}
const TempAbout = () => (
  <div>
    <button class="btn"><i class="fa fa-globe" style={{color:"#007AFF"}}></i>100% Online</button>
    &nbsp; &nbsp; &nbsp; 
    <button><i class="fa fa-comment" style={{color:"#007AFF"}}></i>English</button>
    &nbsp; &nbsp; &nbsp;
    <button><i class="fa fa-tasks" style={{color:"#007AFF"}}></i>Beginner Level</button>
    &nbsp; &nbsp; &nbsp;
    <button> <i class="fa fa-hourglass-start" style={{color:"#007AFF"}}></i>1 Hour to Complete</button>
  </div>
)
const TempSkills = () => (
  <div className="sideby">
    <button class="btn"><i class="fa fa-check" style={{color:"green"}}></i>Blockchains</button>
    &nbsp; &nbsp; &nbsp; 
    <button class="btn"><i class="fa fa-check" style={{color:"green"}}></i>Ethereum</button>
    &nbsp; &nbsp; &nbsp;
    <button class="btn"><i class="fa fa-check" style={{color:"green"}}></i>Solidity</button>
    &nbsp; &nbsp; &nbsp;
    <button class="btn"><i class="fa fa-check" style={{color:"green"}}></i>Smart Contracts</button>
  </div>
)
const TempInstructor = () => (
  <>
    <Avatar alt="Amal" src="https://images.unsplash.com/photo-1551862253-418b05e65c41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" sx={{ width: 80, height: 80 }} variant="round" margin="3px"/>
    <h5>Dr. Amal Almoud</h5>
  </>
)

const RenderCourse = ({ course }) => {
  const gridSettings = {
    xs:12,
    sm:6,
  }
  
  return (
    <Page pageTitle={course.title}>
      <Grid
      container
      columnSpacing={{ xs: 1, sm: 2 }}
      >
        <Grid
          {...gridSettings}
          item>
          <PageSection >{course.description}</PageSection>
          <PageSection sectionTitle="Offered By">{course.provider}</PageSection>
          <Divider />
          <PageSection sectionTitle="About the course">
            <TempAbout />
          </PageSection>
          <PageSection sectionTitle="Skills you will gain">
            <TempSkills />
          </PageSection>
          <PageSection sectionTitle="Instructors">
            <TempInstructor />
          </PageSection>
          <PageSection>
            <Button variant="contained">Start Learning</Button>
          </PageSection>
        </Grid>
        <Grid
          {...gridSettings}
          item>
          <PageSection>
            <img alt="course" src={course.image_link} style={{maxWidth:"100%"}}/>
          </PageSection>
        </Grid>
      </Grid>
    </Page>
  )
}

function Course() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ course, setCourse ] = useState(null)
  const query = useQuery()

  useEffect(
    () => { 
      isLoading && getCourseById(query.id, setCourse)
      .then(()=>{ setIsLoading(false) })
      .catch((err)=>{ console.log(err); window.location.href = "/404" } )
    }
  ,[ isLoading, query.id ])

  return isLoading ? <Loading /> : <RenderCourse course={course}/>
}

export default Course
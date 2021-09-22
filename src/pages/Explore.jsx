import React, { useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import Page from '@components/Page';
import ImageGrid from '@components/ImageGrid';
import ButtonGrid from '@components/ButtonGrid'
import { PageSection } from '@components/Page';
import { useAppContext } from '@src/Context';
import { getAllCourses } from '@js/courses';
import { getAllMentors } from '@js/mentors';

function Explore() {  
  const { alertDispatch, notImplemented } = useAppContext()
  const [ isLoading, setIsLoading ] = useState(true)
  const [ topCourses, setTopCourses ] = useState([])
  const [ topMentors, setTopMentors ] = useState([])

  const getDbData = async () => {
    try {
      Promise.all(
        [
          getAllCourses(setTopCourses),
          getAllMentors()
          .then(
            result => setTopMentors(result)
          )
        ]
      ).finally(
        setIsLoading(false)
      )
    } catch (err) {
      console.log('error')
    }
  }
  useEffect(() => { isLoading && getDbData() }, [ isLoading ])

  const filterTags = [
    "Finance",
    "Business",
    "Computer Science"
  ]
  const courseClickBehavior = course => (
    course.id !== 'TGS-2020507496' ? // non-bitcoin courses
    (event => { 
      alertDispatch({
        type: 'alert', 
        payload: {
          message: `clicked ${course.title}`, 
          alertType: 'info'
        }})
    })
    : (
      event => {
        window.location.href = `/explore/course?id=${course.id}`
      }
    )
  )
  const mentorClickBehavior = mentor => notImplemented
  const buttonClickBehavior = (label) => notImplemented

  return (
    <Page pageTitle="Explore">
      <PageSection>
        <ButtonGrid 
          labels={filterTags} 
          behaviorGenerator={buttonClickBehavior}/>
      </PageSection>
      <Divider />
      <PageSection sectionTitle="Popular Courses">
        <ImageGrid 
          itemData={ topCourses } 
          behaviorGenerator={courseClickBehavior}/>
      </PageSection> 
      <PageSection sectionTitle="Top Mentors">
        <ImageGrid 
          itemData={ topMentors } 
          behaviorGenerator={mentorClickBehavior}/>
      </PageSection>
    </Page>
  )
}


export default Explore
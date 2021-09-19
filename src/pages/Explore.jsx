import React, { useEffect, useState } from 'react';
import Page from '@components/Page';
import ImageGrid from '@components/ImageGrid';
import ButtonGrid from '@components/ButtonGrid'

const getAllCourses = async () => {
  // this function should be returning a list of top courses from our db
  // keys according to database schema
  return [
    {
      img: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80", 
      title: "Investment 101" 
    },
    {
      img: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?11ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW52ZXN0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60', 
      title: "Finance 101" 
    },
    {
      img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
      title: "Econometrics" 
    },
    {
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGludmVzdG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60', 
      title: "Blockchain"
    },
  ]
}
const getAllMentors = async () => {
  // this function should be returning a list of top mentors from our db
  // keys according to database schema
  return [
    {
      img: "https://images.unsplash.com/photo-1601655781320-205e34c94eb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title:"Dr. Vikran Amoun"
    },{
      img: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title:"Dr. Jessica Smith"
    },{
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title:"Dr. Michael Hudson"
    },{
      img: 'https://images.unsplash.com/photo-1551862253-418b05e65c41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title:"Dr. Amal Almoud"
    }
  ]
}


function Explore() {
  const [ topCourses, setTopCourses ] = useState([])
  const [ topMentors, setTopMentors ] = useState([])

  const getDbData = async () => {
    try {
      getAllCourses().then(
        result => setTopCourses(result)
      )
      getAllMentors().then(
        result => setTopMentors(result)
      )
    } catch (err) {
      console.log('error')
    }
  }
  useEffect(() => { getDbData() }, [])

  const filterTags = [
    "Finance",
    "Business",
    "Computer Science"
  ]
  const courseClickBehavior = course => (
    event => { console.log(`clicked ${course.title}`)}  
  )
  const mentorClickBehavior = mentor => (
    event => { console.log(`clicked ${mentor.title}`)}  
  )
  const buttonClickBehavior = (label) => (
    event => { console.log(`clicked ${label}`)}
  )

  return (
    <Page pageTitle="Explore">
      <ButtonGrid 
        labels={filterTags} 
        behaviorGenerator={buttonClickBehavior}/>
      <h3 className="subheading">Popular Courses</h3>
      <ImageGrid 
        itemData={ topCourses } 
        behaviorGenerator={courseClickBehavior}/>
      <div>
      <h3 className="subheading explorehead">Top Mentors</h3>
      <ImageGrid 
        itemData={ topMentors } 
        behaviorGenerator={mentorClickBehavior}/>
      </div>
    </Page>
  )
}


export default Explore
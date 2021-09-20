import React,{useState,useEffect} from 'react';
import Page from '@components/Page'
import axios from "axios";

function Explore() {
  // course contains a list of courses obtained from the database, but currently there is only 1 course in the database
  const [course, setCourse] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3002/course/all').then((response)=>{
    setCourse(response.data);
    })
  },[])
  return (
    <Page pageTitle="Explore">

    {/* For reference, to delete */}
    <pre>
      <code>
        {JSON.stringify(course, null, 2)}
      </code>
    </pre>   

    {/* example of accessing course information */}
    {course.map((val)=>{
      return (<div>
      <p>{val.id}</p>
      <p>{val.title}</p>
      </div>)
    })}
 
    </Page>
  )
}

export default Explore
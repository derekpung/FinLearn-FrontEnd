import axios from "axios"

export const getAllCourses = async (setTopCourses) => {
  return await 
    axios.get(`${process.env.REACT_APP_LOCAL_API_URL}/course/all`).then(
      result => {
        setTopCourses(result.data)
      }
    )
}

export const getCourseById = async (id, setData) => {
  return await
    axios.get(
      `${process.env.REACT_APP_LOCAL_API_URL}/course/by-cid`,
      {
        params: {
          cid: id
        }
      }
      ).then(
        result => {
          setData(result.data[0])
        }
    )
}


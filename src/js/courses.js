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

export const postSignUp = async (cid, uid, callback) => {
  return await
    axios.post(
      `${process.env.REACT_APP_LOCAL_API_URL}/transaction/add/by-uid-cid`,
      {
        params: {
          uid,
          cid
        }
      }
    ).then(callback)
}
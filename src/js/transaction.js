import axios from "axios"

// Add a new transaction when the user clicks "Start Learning" at a specific course page
export const addTransaction = async (user_id, course_id) => {
  return await
    axios.post(
      `${process.env.REACT_APP_LOCAL_API_URL}/transaction/add/by-uid-cid`,
      {
        params: {
          uid: user_id,
          cid: course_id
        }
      }
    ).then((response)=>{
          console.log(response);
        })
}

// Update the transaction to completed when the user completes the course
export const completeTransaction = async (user_id, course_id) => {
  return await
    axios.put(
      `${process.env.REACT_APP_LOCAL_API_URL}/transaction/update/by-uid-cid`,
      {
        params: {
          uid: user_id,
          cid: course_id
        }
      }
    ).then((response)=>{
          console.log(response);
        })
}

// Get completed courses by user id
export const getCompletedById = async (user_id, setData) => {
  return await
    axios.get(
      `${process.env.REACT_APP_LOCAL_API_URL}/transaction/status/by-user-complete`,
      {
        params: {
          uid: user_id
        }
      }
      ).then(
        result => {
          setData(result.data)
        }
    )
}

export const getIncompleteById = async (user_id, setData) => {
  return await
    axios.get(
      `${process.env.REACT_APP_LOCAL_API_URL}/transaction/status/by-user-incomplete`,
      {
        params: {
          uid: user_id
        }
      }
      ).then(
        result => {
          setData(result.data)
        }
    )
}

// Get all transactions details by user id
export const getTransactionsById = async (user_id, setData) => {
  return await
    axios.get(
      `${process.env.REACT_APP_LOCAL_API_URL}/transaction/all/by-uid`,
      {
        params: {
          uid: user_id
        }
      }
      ).then(
        result => {
          setData(result.data)
        }
    )
}
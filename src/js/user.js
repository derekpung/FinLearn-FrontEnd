import axios from "axios"

export const getUserById = async (id, callback) => {
  return await 
    axios.get(`${process.env.REACT_APP_LOCAL_API_URL}/user/by-uid`,
      {
        params: {
          uid: id
        }
      })
}

export const addUser = async (user) => {
  const userData = {
      id: user.sub, 
      name: user.nickname,
      email: user.email,
      signup: user.updated_at, 
      verified: user.email_verified
    }
  return await 
    axios.post(
      `${process.env.REACT_APP_LOCAL_API_URL}/user/add`,
      userData
    ).then(() => userData)      
}
// Update the user's wallet when the user completes the course
export const updateWallet = async (user_id, course_id) => {
  return await
    axios.put(
      `${process.env.REACT_APP_LOCAL_API_URL}/user/wallet/update/by-uid-cid`,
      {
        params: {
          uid: user_id,
          cid: course_id
        }
      }
    )
}
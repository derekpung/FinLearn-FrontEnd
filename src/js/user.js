import axios from "axios"

export const getUserById = async (id, setWallet) => {
  return await 
    axios.get(`${process.env.REACT_APP_LOCAL_API_URL}/user/by-uid`,
      {
        params: {
          uid: id
        }
      }).then(
      result => {
        setWallet(result.data[0].wallet)
      }
    )
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
    ).then((response)=>{
          console.log(response);
        })
}
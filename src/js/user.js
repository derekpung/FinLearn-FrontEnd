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
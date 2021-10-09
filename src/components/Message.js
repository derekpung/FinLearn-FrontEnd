import { Typography } from '@mui/material';

const Message = ({ balance }) => {
    return (
      <div>
      <Typography variant="h6"> LTE Tokens: {balance}</Typography>
      </div>
  )
}

export default Message
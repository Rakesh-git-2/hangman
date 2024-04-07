import React from 'react'
import { Typography } from '@mui/material';

// rafce
const Header = ({hint}) => {
  return (
    <>
      <Typography
          variant="h2"
          gutterBottom
          style={{ fontFamily: "Spicy Rice", color: "pink" ,marginTop:"20px"}}
        >
          Hangman
        </Typography>
      <p>Guess the word - Enter a letter</p>
      <p>💡 {hint}</p>
    </>
  )
}

export default Header
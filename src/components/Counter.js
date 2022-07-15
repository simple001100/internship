import React from 'react'
import { Button, Container } from '@mui/material'

export const Counter = ({ count, setCount }) => {

   return (
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "20px", borderWidth: "2px", borderColor: "#282D36", backgroundColor: "#0F131B" }} disableGutters={true}>
         <Button
            onClick={() => count > 1 ? setCount(count - 1) : count}
            variant="text"
            size="small"
            sx={{ padding: "0 0 0 0", borderRadius: "50%", fontSize: 16, color: "#A6E50F" }}
         >
            -
         </Button>
         <span style={{ fontSize: 16, color: "white", paddingRight: "3px", paddingLeft: "3px" }}>{count}</span>
         <Button
            onClick={() => setCount(count + 1)}
            variant="text"
            size="small"
            sx={{ padding: "0 0 0 0", borderRadius: "50%", fontSize: 16, color: "#A6E50F" }}
         >
            +
         </Button>
      </Container >
   )
}

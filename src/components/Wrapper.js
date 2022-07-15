import React, { forwardRef } from "react";
import { makeStyles } from '@mui/styles';
import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: "#131720",
   },
}));

export const Wrapper = forwardRef((props, ref) => {
   const styles = useStyles();

   return (
      <Container
         className={styles.root}
         maxWidth="100%"
         disableGutters={true}
         {...props}
      />
   );
});
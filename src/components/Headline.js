import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
       color: "white",
       
    },
 }));

 export const Headline = (props) => {
    const styles = useStyles();
  return (
    <Typography variant="h5" component="h2" className={styles.root} {...props} />
  );
};

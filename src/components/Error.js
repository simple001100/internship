import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
       color: "#FC6E50",
       fontSize: 14,
       
    },
 }));

 export const Error = (props) => {
    const styles = useStyles();
  return (
    <Typography className={styles.root} {...props} />
  );
};

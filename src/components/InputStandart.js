import React, { forwardRef } from "react";
import { InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 14,
    borderBottom: "1.5px solid #1D222B",
    marginBottom: "15px",
  },
}));

export const InputStandart = forwardRef((props, ref) => {
  const styles = useStyles();
  return (
    <InputBase className={styles.root} inputRef={ref} fullWidth {...props} />
  );
});

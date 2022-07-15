import React, { forwardRef } from "react";
import { InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "53px",
    border: "1px solid #1D222B",
    borderRadius: "6px",
    paddingLeft: "21px",
    marginBottom: "18px",
    backgroundColor: "#0C0E14",
  },
}));

export const InputOutlined = forwardRef((props, ref) => {
  const styles = useStyles();
  return (
    <InputBase
      className={styles.root}
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});

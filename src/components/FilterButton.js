import React from "react";
import { Button } from "@mui/material";

export const FilterButton = (props) => {
  return (
    <Button
      onClick={() => {
        props.setFilter(props.manufacturer);
      }}
      variant="text"
      style={{ fontSize: 16, color: "#56A2FD"}}
    >
      {props.manufacturer}
    </Button>
  );
};

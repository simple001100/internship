import React from "react";
import { useHistory } from "react-router";
import { CardActionArea } from "@mui/material";
import { CardMedia } from "@mui/material";

export const Cards = (props) => {
  let history = useHistory();

  function onClick() {
    history.push(`/${props.route}`);
  }

  return (
    <CardActionArea onClick={onClick}>
      <CardMedia
        component="img"
        image={props.image}
      />
    </CardActionArea>
  );
};

import React from "react";
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import { useSelector } from "react-redux";
import Loader from "../images/Loader.svg";
import { CardMedia } from "@mui/material";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "140px 0 0 0",
      backgroundColor: "#0F1A23"
   },
}));

export const MainContainer = ({ children, ...props }) => {
   const styles = useStyles();

   const isFetch = useSelector(state => state.loginReducer.isFetching);

   return (
      <Container
         className={styles.root}
         component="main"
         disableGutters={true}
         {...props}
      >
         {isFetch ? <Container sx={{ positin: "absolute", display: "flex", justifyContent: "center" }} disableGutters={true}>
            <CardMedia
               component="img"
               image={Loader}
               sx={{ position: "fixed", width: "10%" }}
            />
         </Container> : children}
      </Container>
   );
};
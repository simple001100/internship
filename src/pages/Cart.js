import { Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import List from '@mui/material/List';
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Item } from "../components/Item";
import { MainContainer } from "../components/MainContainer";
import { Wrapper } from "../components/Wrapper";

const Cart = () => {
  const listItem = useSelector((state) => state.userReducer.cart);

  return (
    <Wrapper>
      <Header />
      <MainContainer
        sx={{
          display: "flex",
          minHeight: "100vh",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "0px",
          paddingBottom: "26px",
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "3.6%",
            width: "83%",
            fontSize: 42,
            fontWeight: "bold",
          }}
        >
          Cart
        </Typography>

        <Container sx={{ width: "83%", height: "100%" }} disableGutters={true}>
          {listItem &&
            <List>
              {listItem.map((el, index) => <Item
                key={index}
                product={el}
                isInCart={false}
                route={'/' + el.product.type + '/' + el.product.id}
              />)}
            </List>
          }
        </Container>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default Cart;

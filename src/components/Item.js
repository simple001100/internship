import React, { useState } from "react";
import { CardMedia, Container, ListItem, Typography } from "@mui/material";
import { PrimaryButton } from "./PrimaryButton";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { addProductToCart, deleteProduct } from "../redux/store/users/userReducer";
import { CART_ROUTE } from "../utils/consts";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Counter } from "./Counter";
import { getProduct } from "../redux/store/categories/categoryReducer";

export const Item = (props) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const route = props.route;
  const isInCart = props.isInCart;
  const productInfo = props.product;
  let product;
  let quantity;

  const isCart = location.pathname === CART_ROUTE;

  if (isCart) {
    product = productInfo.product;
    quantity = productInfo.quantity;
  }
  else {
    product = productInfo;
    quantity = 1;
  }

  const [count, setCount] = useState(quantity);

  return (
    <ListItem
      sx={{
        height: "208px",
        backgroundColor: "#131720",
        marginBottom: "8px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {isCart ? (
        <CancelOutlinedIcon
          onClick={() => {
            dispatch(deleteProduct(product.id));
          }}
          fontSize="large"
          color="error"
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        />
      ) : null}

      {isCart ? (
        <Container sx={{
          width: "15%",
          position: "absolute",
          bottom: "30px",
          right: "5.5%",
        }} disableGutters={true}>
          <Counter count={count} setCount={setCount} />
        </Container>
      ) : null}

      <CardMedia component="img" sx={{ width: "14%" }} image={product.photo} />

      <Container
        sx={{
          height: "50%",
          width: "39%",
          display: "flex",
          flexDirection: "column",
        }}
        disableGutters={true}
      >
        <NavLink
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            fontSize: 18,
            textDecoration: "none",
          }}
          onClick={() => { if (isCart) dispatch(getProduct(product.id)); }}
          to={route}
        >
          {`${product.manufacturer} ${product.name} ${product.serial_number}`}
        </NavLink>
        <Container sx={{
          display: "flex",
          alignItems: "flex-start",
        }} disableGutters={true}>
          <span style={{ fontSize: 16, color: "#989898" }}>
            {product.shortDescription}
          </span>
        </Container>
      </Container>

      <Typography sx={{ fontSize: 28 }}>{`$${product.cost * count}`}</Typography>

      <PrimaryButton
        onClick={() => {
          isInCart
            ? history.push("/cart")
            : isCart
              ? alert(`Name: ${product.name}\nCost: $${product.cost * count}\nQuantity: ${count}`)
              : dispatch(addProductToCart({ id: product.id, quantity: count }));
        }}
        variant={isInCart ? "outlined" : "contained"}
        sx={{
          marginLeft: "8%",
          marginRight: "3%",
          width: "18%",
          height: "23%",
          fontSize: 13,
          backgroundColor: isInCart ? "" : "#2E3192",
        }}
      >
        {isInCart ? "In Cart" : isCart ? "Buy" : "Add To Cart"}
      </PrimaryButton>
    </ListItem>
  );
};

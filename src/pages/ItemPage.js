import React, { useEffect, useState } from "react";
import {
  CardMedia,
  Container,
  FormControl,
  Typography,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContainer } from "../components/MainContainer";
import { Wrapper } from "../components/Wrapper";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { isInCart } from "../utils/func";
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "../components/PrimaryButton";
import { Counter } from "../components/Counter";
import { addProductToCart } from "../redux/store/users/userReducer";
import { RadioGroupSpecifications } from "../components/RadioGroupSpecifications";
import { getProduct } from "../redux/store/categories/categoryReducer";

const ItemPage = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  let category = location.pathname.split("/")[1];

  const id = Number(location.pathname.split("/")[2]);

  useEffect(() => dispatch(getProduct(id)), []);

  const cart = useSelector((state) => state.userReducer.cart);

  const cartItems = cart.map(el => el.product);

  const categoryProducts = useSelector(
    (state) => state.categoryReducer[category]
  );

  const productInfo = categoryProducts.find(el => el.id === id) || null;

  const [count, setCount] = useState(1);

  const specifications = ['processor', 'videoCard', 'os', 'memory', 'memoryType', 'ram', 'color'];

  const breadcrumbs = [
    <NavLink
      style={{ textDecoration: "none", fontSize: 18, color: "#56A2FD" }}
      to={`/${category}`}
    >
      {category[0].toUpperCase() + category.slice(1)}
    </NavLink>,
    <Typography sx={{ fontSize: 18 }} color="#56A2FD">
      {!productInfo || productInfo.name}
    </Typography>,
  ];

  return (
    <Wrapper>
      <Header />
      <MainContainer
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1.5%",
        }}
      >
        {productInfo ? <><Container
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            paddingLeft: "2%",
          }}
          disableGutters={true}
        >
          <Breadcrumbs
            separator={<NavigateNextIcon color="success" fontSize="large" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Container>

          <Container
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            disableGutters={true}
          >
            <Container
              sx={{
                marginTop: "5%",
                marginLeft: "1.5%",
                display: "flex",
              }}
              disableGutters={true}
            >
              <Container sx={{ width: "50%", margin: 'auto' }} disableGutters={true}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%" }}
                  image={productInfo.photo}
                />
              </Container>

              <Container
                sx={{
                  width: "35%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
                disableGutters={true}
              >
                <Typography sx={{ color: "#989898", fontSize: 36 }}>
                  {`${productInfo.manufacturer} ${productInfo.name} 
                  ${productInfo.serial_number}`}
                </Typography>
                <Typography sx={{ color: "white", fontSize: 30 }}>
                  {`$${productInfo.cost * count}`}
                </Typography>

                <FormControl
                  sx={{ marginTop: "3%", width: "52%" }}
                  component="fieldset"
                >
                  <Container sx={{ display: "flex", flexDirection: "column" }} disableGutters={true}>
                    {specifications.map((el, index) =>
                      <RadioGroupSpecifications
                        key={index}
                        specification={el}
                        productInfo={productInfo}
                      />)}
                  </Container>

                  <PrimaryButton
                    onClick={() => {
                      isInCart(cartItems, productInfo)
                        ? history.push("/cart")
                        : dispatch(addProductToCart({ id: productInfo.id, quantity: count }));
                    }}
                    variant={isInCart(cartItems, productInfo) ? "outlined" : "contained"}
                    sx={{
                      marginTop: "5%",
                      padding: "10% 0 10% 0",
                      width: "100%",
                      fontSize: 13,
                      backgroundColor: isInCart(cartItems, productInfo) ? "" : "#2E3192",
                    }}
                  >
                    {isInCart(cartItems, productInfo) ? "In Cart" : "Add To Cart"}
                  </PrimaryButton>
                  <Typography
                    sx={{ marginTop: "5%", color: "#989898", fontSize: 14 }}
                  >{`Or from $${productInfo.installment}/mon`}</Typography>
                  <Container
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                    disableGutters={true}
                  >
                    {!isInCart(cartItems, productInfo) ? <>
                      <Typography
                        sx={{
                          marginTop: "5%",
                          color: "#989898",
                          fontSize: 20,
                          paddingRight: "7%",
                        }}
                      >
                        Quantity:
                      </Typography>
                      <Counter count={count} setCount={setCount} />
                    </> : <></>
                    }
                  </Container>
                </FormControl>
              </Container>
            </Container>
            <Container
              sx={{ width: "80%", marginBottom: "3%" }}
              disableGutters={true}
            >
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "8%",
                  marginBottom: "3%",
                  width: "83%",
                  fontSize: 42,
                  fontWeight: "bold",
                }}
              >
                Description
              </Typography>
              <span
                style={{ color: "#989898", fontSize: 20, letterSpacing: 0.2 }}
              >
                {productInfo.description.split("|").map((el) => (
                  <p>{el}</p>
                ))}
              </span>
            </Container>
          </Container></> :
          <Container sx={{ height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }} disableGutters={true}>
            <Typography variant="h2" component="h2">NOT FOUND</Typography>
          </Container>}
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default ItemPage;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import { Wrapper } from "../components/Wrapper";
import { Header } from "../components/Header";
import { MainContainer } from "../components/MainContainer";
import { Footer } from "../components/Footer";
import {
  PHONES_ROUTE,
  LAPTOPS_ROUTE,
  WATCHES_ROUTE,
  VIDEOCARDS_ROUTE,
  PROCESSORS_ROUTE,
  SSDS_ROUTE,
} from "../utils/consts";
import { isInCart } from "../utils/func";
import { FiltrationPanel } from "../components/FiltrationPanel";
import { Item } from "../components/Item";
import List from "@mui/material/List";
import { getCategoryPage } from "../redux/store/categories/categoryReducer";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [heading, setHeading] = useState("");
  const [listItems, setListItems] = useState([]);
  const [renderListItems, setRenderListItems] = useState([]);
  const [listFilters, setListFilters] = useState([]);

  useEffect(() => {
    dispatch(getCategoryPage(location.pathname.split("/")[1]));
  }, []);

  const dataItems = useSelector((state) => state.categoryReducer);

  const cartItems = useSelector((state) => state.userReducer.cart).map(el => el.product);

  const [filter, setFilter] = useState();

  const [sort, setSort] = useState();

  useEffect(() => {
    if (!filter) setRenderListItems(listItems);
    else setRenderListItems(
      listItems.filter((el) => el.manufacturer === filter));
  }, [filter]);

  useEffect(() => {
    if (!sort) setRenderListItems(renderListItems);
    else setRenderListItems(
      [...renderListItems].sort((a, b) => b[sort] - a[sort])
    );
  }, [sort]);

  const listPageInfo = [
    {
      name: PHONES_ROUTE,
      heading: "Phones",
      items: dataItems.phone,
      filters: ["Apple", "Xiaomi "],
    },
    {
      name: LAPTOPS_ROUTE,
      heading: "Laptops",
      items: dataItems.laptop,
      filters: ["Apple", "Asus", "Lenovo "],
    },
    {
      name: WATCHES_ROUTE,
      heading: "Watches",
      items: dataItems.watch,
      filters: ["Apple", "Xiaomi"],
    },
    {
      name: VIDEOCARDS_ROUTE,
      heading: "Video cards",
      items: dataItems.videocard,
      filters: ["Nvidia", "AMD"],
    },
    {
      name: PROCESSORS_ROUTE,
      heading: "Processors",
      items: dataItems.processor,
      filters: ["Intel", "AMD "],
    },
    {
      name: SSDS_ROUTE,
      heading: "SSDs",
      items: dataItems.ssd,
      filters: ["Kingston", "Gigabyte"],
    },
  ];

  const isLocation = () => {
    listPageInfo.forEach((el) => {
      if (location.pathname === el.name) {
        setHeading(el.heading);
        setListItems(el.items);
        setRenderListItems(el.items);
        setListFilters(el.filters);
      }
    });
  };

  useEffect(isLocation, [dataItems]);

  return (
    <Wrapper>
      <Header />
      <MainContainer
        sx={{
          minHeight: "100vh",
          display: "flex",
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
          {heading}
        </Typography>
        <FiltrationPanel
          setFilter={setFilter}
          setSort={setSort}
          manufacturers={listFilters}
          listItems={listItems}
          setListItems
        />
        <Container sx={{ width: "83%" }} disableGutters={true}>
          <List>
            {renderListItems.map((el) => (
              <Item
                key={el.id}
                product={el}
                isInCart={isInCart(cartItems, el)}
                route={location.pathname + "/" + el.id}
              />
            ))}
          </List>
        </Container>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default CategoryPage;

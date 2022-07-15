import React from "react";
import "swiper/swiper.min.css";
import { Wrapper } from "../components/Wrapper";
import { Header } from "../components/Header";
import { MainContainer } from "../components/MainContainer";
import { Footer } from "../components/Footer";
import { Container } from "@mui/material";
import { Headline } from "../components/Headline";

import Phones from "../images/Phones.png";
import Notebooks from "../images/Notebooks.png";
import Processors from "../images/Processors.png";
import SSD from "../images/SSD's.png";
import VideoCards from "../images/VideoCards.png";
import Watches from "../images/Watches.png";
import { Cards } from "../components/Card";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { useSelector } from "react-redux";
import { Slide } from "../components/Slide";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Market = () => {
  const advertising = useSelector((state) => state.categoryReducer.advertising);

  return (
    <Wrapper>
      <Header />
      <MainContainer
        sx={{
          height: "1527px",
          display: "flex",
          flexDirection: "colomn",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "48px",
        }}
      >
        <Container sx={{ width: "82%", height: "430px" }} disableGutters={true}>
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            navigation={true}
          >
            {advertising.map((el, index) => (
              <SwiperSlide>
                <Slide
                  key={index}
                  product={el}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
        <Container
          sx={{
            width: "693px",
            height: "768px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          disableGutters={true}
        >
          <Headline style={{ display: "flex" }}>Category</Headline>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "684px",
            }}
            disableGutters={true}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "48%",
              }}
              disableGutters={true}
            >
              <Cards image={Phones} route="phone" />
              <Cards image={Watches} route="watch" />
              <Cards image={Processors} route="processor" />
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "48%",
              }}
              disableGutters={true}
            >
              <Cards image={Notebooks} route="laptop" />
              <Cards image={VideoCards} route="videocard" />
              <Cards image={SSD} route="ssd" />
            </Container>
          </Container>
        </Container>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default Market;

import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { MARKET_ROUTE } from "../utils/consts";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  const history = useHistory();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "83px",
      }}
      disableGutters={true}
    >
      <Typography
        onClick={() => history.push("/")}
        sx={{ cursor: "pointer", fontSize: "23px" }}
      >
        DigitalMarket
      </Typography>

      <ul
        style={{
          width: "400px",
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        <li>
          <NavLink
            to={MARKET_ROUTE}
            style={{ fontSize: 14, color: "white", textDecoration: "none" }}
          >
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink
            to={MARKET_ROUTE}
            style={{ fontSize: 14, color: "white", textDecoration: "none" }}
          >
            SERVICE
          </NavLink>
        </li>
        <li>
          <NavLink
            to={MARKET_ROUTE}
            style={{ fontSize: 14, color: "white", textDecoration: "none" }}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to={MARKET_ROUTE}
            style={{ fontSize: 14, color: "white", textDecoration: "none" }}
          >
            SUPPORT
          </NavLink>
        </li>
      </ul>

      <ul
        style={{
          width: "165px",
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        <li
          style={{
            width: "42px",
            height: "42px",
            border: "2px solid #282D36",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href={"https://www.facebook.com/"}
            style={{ color: "#D3DADF", paddingTop: "4px" }}
          >
            <FacebookIcon />
          </a>
        </li>
        <li
          style={{
            width: "42px",
            height: "42px",
            border: "2px solid #282D36",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href={"https://www.linkedin.com/"}
            style={{ color: "#D3DADF", paddingTop: "4px" }}
          >
            <LinkedInIcon />
          </a>
        </li>
        <li
          style={{
            width: "42px",
            height: "42px",
            border: "2px solid #282D36",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href={"https://www.twitter.com/"}
            style={{ color: "#D3DADF", paddingTop: "4px" }}
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </Container>
  );
};

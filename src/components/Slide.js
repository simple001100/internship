import React from "react";
import { CardMedia, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PrimaryButton } from "./PrimaryButton";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  name: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
}));

export const Slide = ({ product }) => {
  const styles = useStyles();
  const history = useHistory();

  const manufacturer = product.manufacturer;
  const name = product.name;
  const appearence = product.shortDescription;
  const cost = product.cost;
  const installment = product.installment;
  const image = product.photo;
  const productType = product.type;
  const productId = product.id;

  return (
    <Container
      sx={{ height: "430px", display: "flex", justifyContent: "center" }}
      disableGutters={true}
    >
      <Container
        sx={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
        disableGutters={true}
      >
        <Typography variant="h2" component="h2" className={styles.name}>
          {`${manufacturer} ${name}`}
        </Typography>
        <p style={{ fontWeight: 16, color: "#989898" }}>{appearence}</p>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6%",
            backgroundColor: "#131720",
          }}
          disableGutters={true}
        >
          <PrimaryButton onClick={() => { history.push(`/${productType}/${productId}`) }} color="success" sx={{ width: "80%", height: "90%" }}>
            Buy now
          </PrimaryButton>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            disableGutters={true}
          >
            <span style={{ fontSize: 30 }}>${cost}</span>
            <span style={{ fontSize: 14, color: "#989898" }}>
              {`Or from $${installment} /mo`}
            </span>
          </Container>
        </Container>
      </Container>
      <Container
        sx={{ width: '315px', display: "flex", justifyContent: "flex-end", alignItems: 'center' }}
        disableGutters={true}
      >
        <CardMedia
          component="img"
          image={image}
        />
      </Container>
    </Container>
  );
};

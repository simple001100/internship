import React from "react";
import {
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { FilterButton } from "./FilterButton";

export const FiltrationPanel = (props) => {
  const { setSort, manufacturers, setFilter } = props;

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Container
      sx={{
        width: "83%",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "21px",
        paddingLeft: "3%",
        paddingRight: "4.6%",
        paddingBottom: "21px",
        marginTop: "1.7%",
        marginBottom: "2.3%",
        backgroundColor: "#131720",
      }}
      disableGutters={true}
    >
      <Container
        sx={{
          width: "49%",
          display: "flex",
          flexDirection: "column",
          marginLeft: 0,
          marginRight: 0,
        }}
        disableGutters={true}
      >
        <Typography
          component="h3"
          variant="h3"
          sx={{ fontSize: 18, marginBottom: "1%" }}
        >
          Manufacturer:
        </Typography>
        <Container disableGutters={true}>
          {manufacturers.map((el, index) => (
            <FilterButton
              setFilter={setFilter}
              key={index}
              manufacturer={el}
            />
          ))}
        </Container>
      </Container>
      <Container
        sx={{ width: "33%", marginLeft: 0, marginRight: 0 }}
        disableGutters={true}
      >
        <Typography component="h3" variant="h3" sx={{ fontSize: 18 }}>
          Sort By:
        </Typography>
        <FormControl variant="standard" fullWidth>
          <Select
            id="sort-select"
            sx={{ fontSize: 16, color: "white" }}
            onChange={handleChange}
          >
            <MenuItem value={''}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'rating'} sx={{ fontSize: 16 }}>
              Rating
            </MenuItem>
            <MenuItem value={'cost'} sx={{ fontSize: 16 }}>
              Cost
            </MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Container>
  );
};

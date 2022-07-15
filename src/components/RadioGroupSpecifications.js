import React from "react"
import {
   FormControlLabel,
   FormLabel,
   RadioGroup,
} from "@mui/material";
import Radio from "@mui/material/Radio";

export const RadioGroupSpecifications = (props) => {
   const specification = props.specification;
   const productInfo = props.productInfo;

   return (
      <>
         {!productInfo[specification] ||
            <RadioGroup
               aria-label={specification}
               name="radio-buttons-group"
               sx={{ marginRight: "20%" }}
            >
               <FormLabel
                  sx={{
                     color: "#989898",
                     fontSize: 20,
                     paddingTop: "5%",
                     paddingRight: "7%",
                  }} component="legend">{specification[0].toUpperCase() + specification.slice(1)}</FormLabel>


               <FormControlLabel
                  sx={{ color: "#989898", fontSize: 16 }}
                  value={`${productInfo[specification]}`}
                  control={<Radio checked={true} />}
                  label={`${productInfo[specification]}`}
               />
            </RadioGroup >
         }
      </>
   );
}

import React from "react";
import Button from '@mui/material/Button';

export const PrimaryButton = ({ children, ...props }) => {
   return (
      <Button
         type="submit"
         variant="contained"
         fullWidth
         {...props}
      >
         {children}
      </Button>
   );
};

// color: "#989898"
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

function DivideLine() {
   return (
      <hr
         style={{
            backgroundColor: COLORS.lightGray2,
            height: 0.15,
            width: "100%",
            marginTop: 2,
         }}
      />
   );
}

export default DivideLine;

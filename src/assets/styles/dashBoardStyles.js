import { makeStyles } from "@mui/material";
import { COLORS, FONTS, SIZES, images } from "../../constants";
const dashBoardStyles = makeStyles({
   dashBoardTitle: {
      color: COLORS.white,
      fontSize: SIZES.h2,
      fontFamily: "Roboto",
      margin: "30px",
   },
   infoBoxGroup: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "20px",
      paddingRight: "20px",
   },
   cardListSmall: {
      flex: 1,
      height: "300px",
      maxHeight: "300px",
      margin: "20px",
      padding: "30px",
      overflow: "auto",
   },
   cardListMedium: {
      flex: 2,
      height: "300px",
      maxHeight: "300px",
      margin: "20px",
      padding: "30px",
      overflow: "auto",
   },
   cardTitle: {
      color: COLORS.darkPrimary,
      textTransform: "uppercase",
      fontSize: "1.1rem",
      fontWeight: "500",
      fontFamily: "Roboto",
   },
   cardListHeader: {
      fontSize: "0.9rem",
      fontWeight: "500",
      fontFamily: "Roboto",
   },
   cardListHeaderStrength: {
      fontSize: "0.9rem",
      fontWeight: "500",
      fontFamily: "Roboto",
      color: COLORS.primary,
      marginBottom: "5px",
   },
   cardListHeaderOpp: {
      fontSize: "0.9rem",
      fontWeight: "500",
      fontFamily: "Roboto",
      marginBottom: "5px",
   },
   inline: {
      fontSize: "0.8rem",
      display: "inline",
      fontFamily: "Roboto",
   },
   inlineHeaderStrength: {
      fontSize: "0.9rem",
      fontWeight: "900",
      display: "inline",
      fontFamily: "Roboto",
      color: COLORS.primary,
   },
   inlineHeaderOpp: {
      fontSize: "0.9rem",
      fontWeight: "900",
      display: "inline",
      fontFamily: "Roboto",
      color: COLORS.darkBrown,
   },
   ownerSelector: {
      display: "flex",
      alignItems: "center",
      // width: "100%",
      backgroundColor: COLORS.darkBrown,
      padding: SIZES.radius,
   },
   formField: {
      width: "200px",
      //color: COLORS.white,
      backgroundColor: COLORS.white,
   },
   formFieldLarge: {
      width: "250px",
      //color: COLORS.white,
      backgroundColor: COLORS.white,
   },
   ownerSelectorFormPair: {
      display: "flex",
      alignItems: "center",
      marginRight: "40px",
   },
   ownerSelectorLabel: {
      color: COLORS.white,
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "Roboto",
      marginRight: "5px",
   },
   dateSelectGroup: {
      display: "flex",
      alignItems: "center",
      // width: "100%",
      marginLeft: "40px",
      marginRight: "40px",
      marginTop: "40px",
   },
   drComments: {
      fontSize: "0.85rem",
      fontStyle: "italic",
      fontFamily: "Roboto",
      color: COLORS.darkgray,
   },
   strengthOppGroup: {
      display: "flex",
      // width: "100%",
      justifyContent: "space-between",
      marginLeft: "40px",
      marginRight: "40px",
      marginTop: "40px",
   },
   metricExpertGroup: {
      display: "flex",
      marginLeft: "40px",
      marginRight: "40px",
      marginTop: "40px",
   },
   metricExpertTile: {
      flex: 2,
   },
});

export { dashBoardStyles };

import { makeStyles } from "@mui/material";
import { COLORS, FONTS, SIZES, images } from "../../constants";

const dbTileStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginRight: "40px",
        marginBottom: "20px",
    },
    tileHeaderGroup: {
        display: "flex",
        alignItems: "center",
        backgroundColor: COLORS.darkBrown,
        padding: SIZES.radius,
    },
    titleHeader: {
        color: COLORS.white,
        fontSize: "1rem",
        fontWeight: "500",
        fontFamily: "Roboto",
        marginRight: "5px",
        textTransform: "uppercase",
    },
    tileTextPrime: {
        color: COLORS.primary,
        fontSize: "0.8rem",
        fontWeight: "500",
        fontFamily: "Roboto",
    },
    tileText: {
        fontSize: "0.8rem",
        fontWeight: "500",
        fontFamily: "Roboto",
    },
    tileTextGray: {
        color: COLORS.darkgray,
        fontSize: "0.8rem",
        fontWeight: "500",
        fontFamily: "Roboto",
    },
    footNotes: {
        fontSize: "0.85rem",
        fontStyle: "italic",
        fontFamily: "Roboto",
        color: COLORS.darkgray,
    },
    legend: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        margin: "20px",
    },
    selectionGroup: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        margin: "20px",
    },
    selectionGroupWide: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px",
    },
    iconTextGroup: {
        display: "flex",
        alignItems: "center",
        marginLeft: "10px",
    },
    tableHolder: {
        paddingInline: "20px",
        paddingBottom: "20px",
    },
    dashTag: {
        color: COLORS.white,
        marginRight: "5px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "7px",
        paddingRight: "7px",
        borderRadius: "7px",
    },
    neutralTag: {
        //color: COLORS.black,
        backgroundColor: COLORS.white,
        marginRight: "5px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "7px",
        paddingRight: "7px",
        borderRadius: "7px",
    },
    tableRow: {
        height: 20,
    },
    underConstTile: {
        paddingInline: "20px",
        paddingBottom: "20px",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    actionCoachSidebar: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: COLORS.lightGray3,
    },
    actionCoaching: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        margin: "20px",
    },
    actionCoachTileInactive: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.white,
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
    },
    actionCoachTileActive: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.primary,
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
    },
    actionCoachTileTextInactive: {
        fontSize: "0.8rem",
        fontWeight: "400",
        fontFamily: "Roboto",
    },
    actionCoachTileTextActive: {
        fontSize: "0.8rem",
        fontWeight: "400",
        fontFamily: "Roboto",
        color: COLORS.white,
    },
    actionCoachTileTextBoldInactive: {
        fontSize: "0.8rem",
        fontWeight: "700",
        fontFamily: "Roboto",
    },
    actionCoachTileTextBoldActive: {
        fontSize: "0.8rem",
        fontWeight: "700",
        fontFamily: "Roboto",
        color: COLORS.white,
    },
});

export { dbTileStyles };

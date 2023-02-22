import React, { useState, useEffect, useContext } from "react";
import {
    AppBar,
    Avatar,
    Button,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Badge,
} from "@mui/material";
import { mainStyles } from "../../assets/styles/mainStyles";
import { images } from "../../constants";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { pocRequests } from "../../api/pocAPI";
import { UserContext } from "../../context/UserContext";
import pocAPI from "../../api/pocAPI";
import "./Header.css";

function Header(props) {
    const classes = mainStyles();
    const navigate = useNavigate();

    const { userInfo } = useContext(UserContext);

    let newDate = new Date().toLocaleString();
    const [lastRefreshDate, setLastRefreshDate] = useState(newDate);

    const [activePath, setActivePath] = useState("/");

    //*********************************************** */
    //*********************************************** */
    //CURRENT PULL REFRESH DATE FOR POC -- NEEDS TO CHANGE --
    // useEffect(() => {
    //    const urlPOC = pocRequests("getLastSnapshotDate", "");
    //    //console.log(props.userInfo);
    //    pocAPI.get(urlPOC).then((res) => {
    //       // console.log(res.data);

    //       const snapDateList = res.data.map((snapDate) => ({
    //          snapShotDate: snapDate.snpshtDt,
    //          maxDate: snapDate.max_TimeRange,
    //          minDate: snapDate.minTimeRange,
    //       }));

    //       // console.log(snapDateList);
    //       setLastRefreshDate(snapDateList[0].snapShotDate);
    //    });
    // }, []);
    //*********************************************** */
    //*********************************************** */
    const handlePageBtnClick = (pageURL) => {
        setActivePath(pageURL);
        navigate.push(pageURL);
        handleClose(pageURL);
    };

    //LOGIC TO OPEN AND CLOSE DROPDOWN MENU
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl2(null);
    };
    //********************************* */

    return (
        // <AppBar position='static' className={classes.appBar}>
        //     <Toolbar>
        //         <div className='appBar'>
        //             <div className='leftGroup'>
        //                 <div className='logoGroup'>
        //                     <img
        //                         src={images.logo}
        //                         alt='logo'
        //                         className={classes.appBarLogo}
        //                     />
        //                     <Typography className={classes.appBarLogoTitle}>
        //                         {" "}
        //                         iPerform
        //                     </Typography>
        //                 </div>
        //                 <div className='btnGroup'>
        //                     <Button
        //                         className={
        //                             activePath === "/"
        //                                 ? classes.appBarButtonAct
        //                                 : classes.appBarButton
        //                         }
        //                         onClick={() => handlePageBtnClick("/")}
        //                     //onClick={handleMenu2}
        //                     >
        //                         Dashboard
        //                     </Button>

        //                     {/* <Menu
        //                 anchorEl={anchorE2}
        //                 anchorOrigin={{
        //                    vertical: "top",
        //                    horizontal: "left",
        //                 }}
        //                 keepMounted
        //                 transformOrigin={{
        //                    vertical: "top",
        //                    horizontal: "left",
        //                 }}
        //                 open={open2}
        //                 onClose={handleClose2}
        //              >
        //                 <MenuItem onClick={() => handleClose2("/")}>Coach Dashboard</MenuItem>
        //                 <MenuItem onClick={() => handleClose2("/expertdash")}>
        //                    Export Dashboard
        //                 </MenuItem>
        //              </Menu> */}
        //                     <Button
        //                         className={
        //                             activePath === "/forms"
        //                                 ? classes.appBarButtonAct
        //                                 : classes.appBarButton
        //                         }
        //                         onClick={() => handlePageBtnClick("/forms")}
        //                     >
        //                         <Badge badgeContent={3} color='secondary'>
        //                             Forms
        //                         </Badge>
        //                     </Button>
        //                     <Button
        //                         className={
        //                             activePath === "/reports"
        //                                 ? classes.appBarButtonAct
        //                                 : classes.appBarButton
        //                         }
        //                         onClick={() => handlePageBtnClick("/reports")}
        //                     >
        //                         Reports
        //                         {/*  <ArrowDropDownIcon fontSize="small"></ArrowDropDownIcon> */}
        //                     </Button>
        //                     <Button
        //                         className={
        //                             activePath === "/survey"
        //                                 ? classes.appBarButtonAct
        //                                 : classes.appBarButton
        //                         }
        //                         onClick={() => handlePageBtnClick("/survey")}
        //                     >
        //                         NPS Details
        //                     </Button>

        //                     <Button
        //                         className={
        //                             activePath === "/other"
        //                                 ? classes.appBarButtonAct
        //                                 : classes.appBarButton
        //                         }
        //                         onClick={(e) => setAnchorEl(e.currentTarget)}
        //                     >
        //                         Other Tools{" "}
        //                         <ArrowDropDownIcon fontSize='small'></ArrowDropDownIcon>
        //                     </Button>
        //                     <Menu
        //                         anchorEl={anchorEl}
        //                         keepMounted
        //                         open={Boolean(anchorEl)}
        //                         onClose={() => setAnchorEl(null)}
        //                     >
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/oneonone")
        //                             }
        //                         >
        //                             CCS
        //                         </MenuItem>
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/teamconnection")
        //                             }
        //                         >
        //                             CORE
        //                         </MenuItem>
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/teamhuddle")
        //                             }
        //                         >
        //                             Medallia
        //                         </MenuItem>
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/instantfeedback")
        //                             }
        //                         >
        //                             NBA
        //                         </MenuItem>
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/oneonone")
        //                             }
        //                         >
        //                             P&L
        //                         </MenuItem>
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/teamconnection")
        //                             }
        //                         >
        //                             Quality Resources
        //                         </MenuItem>
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/toolsmanager")
        //                             }
        //                         >
        //                             T2
        //                         </MenuItem>
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/profilemanager")
        //                             }
        //                         >
        //                             Workday
        //                         </MenuItem>
        //                     </Menu>
        //                     <Button
        //                         className={
        //                             activePath === "/Admin"
        //                                 ? classes.appBarButtonAct
        //                                 : classes.appBarButton
        //                         }
        //                         onClick={(e) => setAnchorEl2(e.currentTarget)}
        //                     >
        //                         Admin{" "}
        //                         <ArrowDropDownIcon fontSize='small'></ArrowDropDownIcon>
        //                     </Button>
        //                     <Menu
        //                         anchorEl={anchorEl2}
        //                         keepMounted
        //                         open={Boolean(anchorEl2)}
        //                         onClose={() => setAnchorEl2(null)}
        //                     >
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/toolsmanager")
        //                             }
        //                         >
        //                             Tool Manager
        //                         </MenuItem>
        //                         <MenuItem
        //                             onClick={() =>
        //                                 handlePageBtnClick("/profilemanager")
        //                             }
        //                         >
        //                             Admin Profile Manager
        //                         </MenuItem>
        //                     </Menu>
        //                 </div>
        //             </div>

        //             <div className='rightGroup'>
        //                 <div className='refreshDateDiv'>
        //                     <Typography className={classes.refreshDate}>
        //                         Data last refreshed: {lastRefreshDate}{" "}
        //                     </Typography>
        //                 </div>

        //                 <div className='userGroup'>
        //                     <Avatar
        //                         alt={userInfo.userName}
        //                         src={images.avatar2.default}
        //                         style={{ marginRight: "10px" }}
        //                     />
        //                     <Typography className={classes.userName}>
        //                         {" "}
        //                         {userInfo.userName} - {userInfo.sysRlName}
        //                     </Typography>
        //                 </div>

        //                 {/* <div className="controlBtnGroup">
        //              <Button className={classes.controlButton}>Sign Out</Button>
        //           </div> */}
        //             </div>
        //         </div>
        //     </Toolbar>
        // </AppBar>
        <div>HELD</div>
    );
}

export default Header;

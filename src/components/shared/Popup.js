import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";

function Popup(props) {
   const { title, children, openPopup, setOpenPopup, fullWidth, maxWidth } = props;

   return (
      <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={openPopup}>
         <DialogTitle>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
               {title}
               <IconButton size="small" onClick={() => setOpenPopup(false)}>
                  <CloseIcon fontSize="small" color="secondary" />
               </IconButton>
            </div>
         </DialogTitle>
         <DialogContent dividers>{children}</DialogContent>
      </Dialog>
   );
}

export default Popup;

import {
  AppBar,
  Autocomplete,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const Header = ({ setCoords }) => {
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Biso map</Typography>
        <Box display="flex">
          <Typography variant="h6">Explore new places</Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="Search">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

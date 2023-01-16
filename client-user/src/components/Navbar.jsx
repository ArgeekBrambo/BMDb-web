import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "../components/SearchBar"

const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                position: "sticky",
                top: 0,
                justifyContent: "space-between",
            }}
            className="bg-orange-400 p-2"
        >
          <Link to='/' style={{ display: "flex", alignItems: "center" }}>
            <img src={ logo } alt="logo" className="h-12" />
          </Link>
          <SearchBar />
        </Stack>
    );
};

export default Navbar;

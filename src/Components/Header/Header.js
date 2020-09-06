import React from 'react';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuStyles ={
        display: 'flex',
        backgroundColor: 'palegoldenrod',
        color: 'black',
        textTransform: 'uppercase'
    }
    return (
        <div>
            <MenuList style={menuStyles}>
                <MenuItem component={Link} to="/home">
                    Home
                </MenuItem>
                <MenuItem component={Link} to="/login">
                    User Login
                </MenuItem>
            </MenuList>
        </div>
    );
};

export default Header;
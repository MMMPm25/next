import React from 'react';
import { Button, Typography, Container, Menu, MenuItem ,Box } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        ยินดีต้อนรับสู่ Next.js + MUI
        <p className="text-3xl font-bold underline text-emerald-700">
      Hello world!
    </p>
      </Typography>
      <Button variant="contained" color="primary">
        กดตรงนี้ได้เลย!
      </Button>
    </Container>
    






    //menu button

    // <div>
    //   <Button
    //     aria-controls={open ? 'basic-menu' : undefined}
    //     aria-haspopup="true"
    //     aria-expanded={open ? 'true' : undefined}
    //     onClick={handleClick}
    //     variant="contained"
    //   >
    //     Open Menu
    //   </Button>
    //   <Menu
    //     id="basic-menu"
    //     anchorEl={anchorEl}
    //     open={open}
    //     onClose={handleClose}
    //     MenuListProps={{
    //       'aria-labelledby': 'basic-button',
    //     }}
    //   >
    //     <MenuItem onClick={handleClose}>โปรไฟล์</MenuItem>
    //     <MenuItem onClick={handleClose}>การตั้งค่า</MenuItem>
    //     <MenuItem onClick={handleClose}>ออกจากระบบ</MenuItem>
    //   </Menu>
    // </div>
    

   

    
  );
}

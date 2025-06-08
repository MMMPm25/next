import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Button,Box } from '@mui/material';
import { useState } from 'react';

export default function Navbar(){
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
    
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    return(
        // <nav>
        //     <div className="logo">
        //         <Link href="/">
        //             <Image src="/logo-shop.png" width={50} height={50} alt="logo"/>
        //         </Link>

        //     </div>
        //     {/* <ul>
        //         <li>หน้าแรก</li>
        //         <li>เกี่ยวกับเรา</li>
        //     </ul> */}
        //     <Link href="/">หน้าแรก</Link>
        //     <Link href="/about">เกี่ยวกับเรา</Link>
        //     <Link href="/products">สินค้าทั้งหมด</Link>
           
        // </nav>

        <div>
      
        <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between', // หรือ space-between, flex-start ตามต้องการ
                gap: 2,
                bgcolor: '#333',
                p: 2,
                color: 'white'
              }}
        >
            <div className="logo">
                  <Link href="/">
                      <Image src="/logo-shop.png" width={50} height={50} alt="logo"/>
                  </Link>
               
            </div>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button href="/" variant="text" color="inherit"  
                  sx={{
                    '&:hover': {
                      color: 'warning.main', // เปลี่ยนสีตอน hover
                      backgroundColor: 'action.hover', // เพิ่มพื้นหลังเบาๆ ตอน hover
                    },
                  }}>หน้าแรก</Button>
                  <Button href="/about" variant="text" color="inherit"    
                  sx={{
                    '&:hover': {
                      color: 'warning.main', // เปลี่ยนสีตอน hover
                      backgroundColor: 'action.hover', // เพิ่มพื้นหลังเบาๆ ตอน hover
                    },
                  }}>เกี่ยวกับเรา</Button>
                  <Button href="/products" variant="text" color="inherit"    
                  sx={{
                    '&:hover': {
                      color: 'warning.main', // เปลี่ยนสีตอน hover
                      backgroundColor: 'action.hover', // เพิ่มพื้นหลังเบาๆ ตอน hover
                    },
                  }}>สินค้าทั้งหมด</Button>
                  
                </Box>
          
                
        </Box>
 
      </div>
    );
}
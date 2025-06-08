import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react';
import { Button, Typography, Container } from '@mui/material';
export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | MMMPm2.5</title>
        <meta name="keywords" content="MMMPm2.5,ร้านค้า,ขายเสื้อผ้า"></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซต์</h1>
        <Image src="/ps.png" width={300} height={300} alt="logo"/>
        <p>ยินดีต้อนรับสู่ร้าน Pm2.5</p>
        {/* <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link> */}
        <Button variant="contained" color="primary" className={styles.btn} href="/products">
            ดูสินค้าทั้งหมด
        </Button>
      </div>
    

    </>
  )
}

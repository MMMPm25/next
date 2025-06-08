import styles from '@/styles/About.module.css'
import Image from 'next/image'
import Head from 'next/head'
export default function About(){
    return(
        <>
        <Head>
            <title>เกี่ยวกับเรา | MMMPm2.5</title>
            <meta name="keywords" content="MMMPm2.5,ร้านค้า,ขายเสื้อผ้า"></meta>
        </Head>
        <div className={styles.container}>
            <h1 className={styles.title}>เกี่ยวกับเรา</h1>
            <Image src="/about.png" width={300} height={300} alt="logo"/>
        </div>
        </>
    )
}
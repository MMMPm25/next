import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Product.module.css"
import Link from "next/link";
//https://dummyjson.com/products?limit=12
//https://dummyjson.com/products/search?q=phone&limit=12
export async function getStaticProps(){
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()

    return{
        props:{products:data.products}
    }
}
export default function Index({products}){
    return(
        <>
            <Head>
                <title>สินค้าทั้งหมด | MMMPm2.5</title>
                <meta name="keywords" content="MMMPm2.5,ร้านค้า,ขายเสื้อผ้า"></meta>
            </Head>
            <div className={styles.container}>
                {products.map(item=>(
                    <Link href={'/products/'+item.id}>
                        <div key={item.id}>
                            <h2 className={styles.title}>{item.title} </h2>
                            <Image src={item.thumbnail} width={250} height={250} alt={item.title}/>
                        </div>
                    </Link>
           

                ))}
            </div>
        </>
    );
}
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}){
    return(
        <div /* children จะแสดงเนื้อหาที่แตกต่างกันตามไฟล์ที่ได้ถูกคลุมโดย Layout ลดความซ้ำซ้อนของโครงสร้างที่จะใช้เหมือนกันทุก pages*/ >
            <Navbar/>
                {children} 
            <Footer/>
        </div>
 
    );
}
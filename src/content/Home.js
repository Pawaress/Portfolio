import React, { Component } from "react";
import profilepic from "../img/p2.jpg";
import bgg from "../img/bgg.jpg";

class Home extends Component {
  render() {
    const containerStyle = {
      backgroundImage: `url(${bgg})`,
      //backgroundColor: "#808080", // เปลี่ยนเป็นสีเทา (#808080)
      backgroundSize: "cover",
      height: "100vh", // สูงเต็มจอ
      width: "100vw",
      display: "flex",
      flexDirection: "column",
    };

    const imgStyle = {
      width: "20vw",
      height: "25vw",
      marginTop: "5vw",
      borderRadius: "50%",
      marginBottom: "1vw",
      // คำสั่งอื่น ๆ ที่คุณต้องการใส่
    };

    const textNermalStyle = {
      marginTop: "2vw",
      marginLeft: "20vw",
      marginRight: "10vw",
      fontSize: "2vw",
      textAlign: "start",
      display: "flex",
      flexDirection: "row",
    };

    const textWithBackgroundStyle = {
      background: "rgba(0, 0, 0, 1)", // สีพื้นหลังด้านหลังข้อความ (ในที่นี้คือสีดำทึบทึก)
      padding: "5px", // ใส่ padding เพื่อทำให้ข้อความไม่ติดกับพื้นหลัง
      marginTop: "2vw", // ขยับข้อความไปด้านล่างเล็กน้อย
      marginLeft: "20vw",
      marginRight: "50vw",
      borderRadius: "5px", // กำหนดมุมขอบ
      color: "#ffffff", // สีข้อความ
      fontSize: "2.5vw",
      justifyContent: "center",
      display: "flex",
      flexDirection: "row",
    };

    return (
      <div style={containerStyle}>
        <div style={{ fontSize: "10vw", marginTop: "10vw" }}>Portfolio</div>
        <center>
          <img src={profilepic} alt="p2" style={imgStyle} />
        </center>
        <div style={textWithBackgroundStyle}>Profile</div>
        <div style={textNermalStyle}>
          ชื่อ ปวเรศ จรูญฉาย วันเกิด 30 สิงหาคม 2544 อายุ 22 ปี ชื่อเล่น แม็กซ์
        </div>

        <div style={textWithBackgroundStyle}>About Me</div>
        <div style={textNermalStyle}>
          สวัสดีครับ ผมชื่อนายปวเรศ จรูญฉาย นักศึกษาปี 4
          สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ แขนง คอมพิวเตอร์
          มหาวิทยาลัยพระจอมเกล้าพระนครเหนือ ที่มีความสนใจใน การเขียน
          โปรแกรมจากที่ออกแบบ ในโมบายแอปพลิเคชัน ในส่วนของ front end
        </div>
        <div style={textWithBackgroundStyle}>Contact</div>
        <div style={textNermalStyle}>เบอร์โทร: 0838258253</div>
        <div style={textNermalStyle}>อีเมล: hs2max@gmail.com</div>
        <div style={textNermalStyle}>
          ที่อยู่: 27 หมู่ 22 เขตสายไหม แขวง สายไหม จังหวัด กรุงเทพมหานคร 110220
        </div>
      </div>
    );
  }
}

export default Home;

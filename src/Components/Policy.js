import Slide from "react-reveal";

const Policy = () => {


  return (
    <section id="policy">
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>นโยบายการรับประกัน</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  1. การรับประกันครอบคลุมข้อบกพร่องที่เกิดจากผู้ผลิต
                  ภายในระยะเวลา 1 ปี โดยนับจากวันที่ซื้อสินค้า
                  ตามที่ปรากฎบนใบประกัน และใบเสร็จรับเงิน
                </div>
                <div>
                  2. การใช้สิทธิ์
                  กรุณาติดต่อแจ้งข้อบกพร่องของตัวสินค้าทางช่องทางการติดต่อ
                  เบอร์โทร หรือ เพจของทางร้าน
                </div>
                <div>
                  3.การรับประกันครอบคลุมส่วน
                  <ul>- โครงสร้างเตียง 1 ปี</ul>
                  <ul>- ระบบมือหมุน 1 ปี</ul>
                  <ul>- มอเตอร์สำหรับเตียงไฟฟ้า 1 ปี</ul>
                </div>
                <div>
                  4. การอนุมัติการรับประกันถือเป็นดุลพินิจของบริษัท
                  ซึ่งจะดำเนินการตรวจสอบว่าการใช้งานถูกประเภท และ
                  เป็นไปตามเงื่อนไขของการรับประกันหรือไม่
                </div>
                <div>
                  5.
                  หากสินค้ามีปัญหาหรือข้อผิดพลาดที่ไม่ได้เกิดจากทางผู้ผลิตอาทิเช่น
                  ผู้ใช้ใช้งานแบบผิดวิธีทำให้สินค้าได้รับการชำรุดเสียหายอันไม่ได้เกิดจากโรงงานตั้งแต่แรกจะมีค่าใช้จ่ายในการ
                  SERVICE ตามปกติแม้อยู่ในระยะเวลาประกันสินค้าก็ตาม
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>ขั้นตอนการเคลมสินค้า</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div>
              <p>""</p>
            </div>
          </div>
        </div>
      </Slide>
      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>ต่ออายุการรับประกัน</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div>
              <p>""</p>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Policy;

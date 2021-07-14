import React, { useState } from "react";
import axios from "axios";
const Contact = (props) => {
  const [show, setshow] = useState(false);

  const [name, setname] = useState();
  const [serialID, setserialID] = useState();
  const [email, setemail] = useState();
  const [tel, settel] = useState();
  const [message, setmessage] = useState();
  const [base64TextString, setBase64TextString] = useState();
  const [subject, setsubject] = useState("สอบถามเกี่ยวกับนโยบายประกันสินค้า");
  const handleFileChange = (e: any) => {
    let file = e.target.files[0];
    if (file) {
      if (file.size <= 3 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = _handleReaderLoaded;
        reader.readAsBinaryString(file);
      } else {
        alert("ไฟล์จะต้องมีขนาดไม่เกิน 3 MB");
        setBase64TextString();
      }
    }
  };
  const _handleReaderLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setBase64TextString(btoa(binaryString));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      serialID: serialID,
      email: email,
      tel: tel,
      subject: subject,
      message: message,
      image: base64TextString,
    };
    axios
      .post("http://api.klhealthcare.net:8080/api/ticket/add", formData)
      .then((res) => {
        setshow(true);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        alert(resMessage);
      });
  };

  return (
    <>
      <div className="row">
        <div className="twelves columns">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  ชื่อ / Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  id="contactName"
                  name="name"
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">รหัสสินค้า / Serial No.</label>
                <input
                  type="text"
                  size="35"
                  id="contactEmail"
                  name="serialID"
                  onChange={(e) => setserialID(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  เบอร์โทรศัพท์ / Tel. <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  size="35"
                  id="contactEmail"
                  name="tel"
                  onChange={(e) => settel(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  อีเมลล์ / Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">หัวข้อ / Subject</label>
                <select
                  name="subject"
                  onChange={(e) => setsubject(e.target.value)}
                >
                  <option value="สอบถามเกี่ยวกับนโยบายประกันสินค้า">
                    สอบถามเกี่ยวกับนโยบายประกันสินค้า
                  </option>
                  <option value="เคลมประกันสินค้า">เคลมประกันสินค้า</option>
                  <option value="ขยายเวลารับประกันสินค้า">
                    ขยายเวลารับประกันสินค้า
                  </option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>

              <div>
                <label htmlFor="contactMessage">
                  ข้อความ / Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="message"
                  onChange={(e) => setmessage(e.target.value)}
                ></textarea>
              </div>

              <div>
                <label htmlFor="contactEmail">ภาพประกอบ / Image</label>
                <input
                  type="file"
                  size="35"
                  id="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                />
              </div>

              <button className="submit" type="submit">
                ส่ง
              </button>
            </fieldset>
          </form>
          {show && (
            <div id="message-success">
              <i className="fa fa-check"></i>ทางเราได้รับข้อความแล้ว
              จะทำการติดต่อกลับโดยเร็วที่สุด!
              <br />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;

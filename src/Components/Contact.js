import React, { useState } from "react";
import axios from "axios";
const Contact = (props) => {
  const initialTicketState = {
    name: "",
    serialID: "",
    tel: "",
    email: "",
    subject: "สอบถามเกี่ยวกับนโยบายประกันสินค้า",
    message: "",
  };
  const [show, setshow] = useState(false);
  const [ticket, setTicket] = useState(initialTicketState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTicket({ ...ticket, [name]: value });
  };
  const [base64TextString, setBase64TextString] = useState();
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
    const formData = new FormData();
    formData.append("ticket", ticket);
    if (!base64TextString) formData.set("base64TextString", null);
    if (base64TextString) {
      formData.append("base64TextString", base64TextString);
    }
    console.log(ticket);
    axios
      .post("http://api.klhealthcare.net:8080/api/ticket/add", formData)
      .then((res) => {
        setshow(true);
      })
      .catch((e) => {
        console.log(e);
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
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">รหัสสินค้า / Serial No.</label>
                <input
                  type="text"
                  size="35"
                  id="contactEmail"
                  name="serialID"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  เบอร์โทรศัพท์ / Tel. <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  id="contactEmail"
                  name="tel"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  อีเมลล์ / Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  id="contactEmail"
                  name="email"
                  onchange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">
                  หัวข้อ / Subject<span className="required">*</span>
                </label>
                <select name="subject" onChange={handleInputChange}>
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
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div>
                <label htmlFor="contactEmail">
                  ภาพประกอบ / Image <span className="required">*</span>
                </label>
                <input
                  type="file"
                  size="35"
                  id="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <button className="submit" type="submit">
                  ส่ง
                </button>
              </div>
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

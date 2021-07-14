import React from "react";
const Contact = (props) => {
  const handleChange = (e) => {};
  // const sendData = () => {
  //   var data = {
  //     name: record.name,
  //     tel: record.tel,
  //     address: record.address,
  //     modelID: modelID,
  //     serialID: record.serialID,
  //     purchaseDate: moment(purchaseDate).format('DD/MM/YYYY'),
  //     warrantyTime: warrantyTime,
  //     expireDate: moment(purchaseDate)
  //       .add(warrantyTime, 'y')
  //       .format('DD/MM/YYYY'),
  //     invoiceID: record.invoiceID,
  //   };
  //   CustomerDataService.create(data)
  //     .then(response => {
  //       setModalShow(false);
  //       setStatus(1);
  //       form.reset();
  //     })
  //     .catch(error => {
  //       const resMessage =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //       alert(resMessage);
  //     });
  // };

  return (
    <>
      <div className="row">
        <div className="twelves columns">
          <form>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  ชื่อ / Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => handleChange}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  รหัสสินค้า / Serial No.
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => handleChange}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  เบอร์โทรศัพท์ / Tel. <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => handleChange}
                />
              </div>
              <div>
                <label htmlFor="contactEmail">
                  อีเมลล์ / Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => handleChange}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">
                  หัวข้อ / Subject<span className="required">*</span>
                </label>
                <select>
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
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button className="submit">ส่ง</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning">เกิดข้อผิดพลาด</div>
          <div id="message-success">
            <i className="fa fa-check"></i>ทางเราได้รับข้อความแล้ว
            จะทำการติดต่อกลับโดยเร็วที่สุด!
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

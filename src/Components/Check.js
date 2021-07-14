import React, { useState } from "react";
import { Fade, Slide } from "react-reveal";
import Contact from "./Contact";
import axios from "axios";
var recData = [];
const Check = () => {
  const [searchID, setsearchID] = useState();
  const [data, setData] = useState([]);

  const [message, setMessage] = useState("");
  const getData = (e) => {
    e.preventDefault();
    axios
      .get(`http://api.klhealthcare.net:8080/api/record/get/${searchID}`)
      .then(
        (response) => {
          if (response.data != null) {
            setData(response.data);
          }
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          if (!data) setMessage(resMessage);
        }
      );
  };

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">ตรวจสอบการรับประกัน</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="twelves columns">
            <form onSubmit={getData}>
              <div>
                <label htmlFor="contactName">
                  รหัสสินค้า / Serial No.<span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="กรอกหมายเลข Serial No."
                  size="35"
                  maxLength="18"
                  minLength="18"
                  onChange={(e) => setsearchID(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Search</button>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </form>
            {data[0] ? (
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <p style={{ color: "white" }}>
                      รุ่นสินค้า : {data[0].modelID}
                    </p>
                    <p style={{ color: "white" }}>
                      วันที่ซื้อสินค้า : {data[0].purchaseDate}
                    </p>
                    <p style={{ color: "white" }}>
                      ระยะเวลาการรับประกัน : {data[0].warrantyTime} ปี
                    </p>
                    <p style={{ color: "white" }}>
                      วันที่สิ้นสุดการรับประกัน : {data[0].expireDate}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <Fade bottom duration={1000}>
              <div className="row section-head">
                <div className="ten columns">
                  <p className="lead">ติดต่อเรา</p>
                  <Contact />
                </div>
              </div>
            </Fade>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Check;

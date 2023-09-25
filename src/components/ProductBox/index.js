import React from "react";
import "./index.css";
import CIcon from "@coreui/icons-react";
import { cilCart } from "@coreui/icons";

export default function ProductBox(props) {
  return (
    <div className="box-container" onClick={props.productClick}>
      <img className="hls-img" src={props.src} alt="" />
      <span className="title-name">{props.name}</span>
      <span>{props.price}</span>
      <button onClick={props.btnClick} className="box-btn">Thêm vào giỏ</button>
    </div>
  );
}

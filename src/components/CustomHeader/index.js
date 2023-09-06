import React from "react";
import "./index.css";

export default function CustomHeader(props) {
  return (
    <div className="custom-header">
       {props.title && <span>Xin chào <span className="ch-title">{props.title}</span></span>}
    </div>
  );
}

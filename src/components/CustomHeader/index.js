import React from "react";
import "./index.css";

export default function CustomHeader(props) {
  return (
    <div className="custom-header">
       {props.titleHi && <span>Xin chào <span className="ch-titleHi">{props.titleHi}</span></span>}
       {props.title && <span className="ch-titleHi">{props.title}</span>}
    </div>
  );
}

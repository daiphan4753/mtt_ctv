import React from "react";
import "./index.css";
import CIcon from "@coreui/icons-react";
import { cilCart } from "@coreui/icons";

export default function CustomHeader(props) {
  return (
    <div className="custom-header">
      <div className="header-title">
        {props.titleHi && (
          <span>
            Xin chào <span className="ch-titleHi">{props.titleHi}</span>
          </span>
        )}
        {props.title && <span className="ch-titleHi">{props.title}</span>}
      </div>
      {props.showCart && (
        <div className="header-card">
          <div className="hc-icon-container">
            <div className="hc-icon-box">
              <CIcon icon={cilCart} className="hc-icon" />
            </div>
            {props.countValue && props.countValue> 0 ?
              <div className="hc-icon-number">
                <span>{props.countValue}</span>
              </div>
              : <div></div>
            }
          </div>
        </div>
      )}
    </div>
  );
}

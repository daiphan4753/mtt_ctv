import React from "react";
import "./index.css";
import CIcon from "@coreui/icons-react";
import { SCREEN_WIDTH } from "../../cores/extra";

export default function CustomCardView(props) {
  return (
    <div
      className="custom-card-view"
      style={{ width: SCREEN_WIDTH / 2 - 30 }}
    >
      <div className="ccv-box-header">
        {props.icon && (
          <CIcon
            icon={props.icon}
            className="ccv-icon"
            style={{ color: props.color }}
          />
        )}
        <span className="ccv-title" style={{ color: props.color }}>
          {props.title}
        </span>
      </div>
      <div className="ccv-value">{props.value}</div>
    </div>
  );
}

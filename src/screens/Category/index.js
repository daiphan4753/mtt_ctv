import React from "react";
import "./index.css";
import { data_category } from "../../data/dataCategory";
import CustomHeader from "../../components/CustomHeader";

export default function Category() {
  const showlist = data_category.map((item) => (
    <li className="cate-card" key={item.name}>
      <div className="cate-img-box">
        <img className="cate-img" src={item.src} alt="" />
      </div>
      <span className="cate-txt">{item.name}</span>
    </li>
  ));
  return (
    <div>
      <CustomHeader title={"Category"} />
      <div className="cate-show-list-container">
        <ul className="csl-ul">{showlist}</ul>
      </div>
    </div>
  );
}

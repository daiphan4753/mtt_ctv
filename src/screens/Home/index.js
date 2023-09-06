import React from "react";
import CustomHeader from "../../components/CustomHeader";
import CustomCardView from "../../components/CustomCardView";
import "./index.css";
import { cilTruck, cilWallet, cilClock } from "@coreui/icons";
import { data_product } from "../../data/dataProduct";
import { data_news } from "../../data/dataNews";
import CIcon from "@coreui/icons-react";

export default function Home() {
  const name = "Nguyen Van";
  return (
    <div className="home">
      <CustomHeader title={name} />
      <div className="home-thongke">
        <CustomCardView
          icon={cilTruck}
          title={"Số đơn hàng"}
          value={0}
          color={"#3300FF"}
        />
        <CustomCardView
          icon={cilWallet}
          title={"Doanh thu"}
          value={0}
          color={"#00EE00"}
        />
      </div>
      <div className="home-list">
        <div className="hl-header">
          <span>Sản phẩm bán chạy</span>
        </div>
        <ul className="home-list-box">
          {data_product.map((item) => (
            <li className="home-list-showdata" key={item.name}>
              <div className="hls-box-img">
                <img className="hls-img" src={item.src} alt="" />
              </div>
              <div className="hls-box-title">
                <span className="hls-title-name">{item.name}</span>
                <span>{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="home-news">
        <div className="hn-header">
          <span>Tin tức mới cập nhật</span>
        </div>
        <ul className="home-news-box">
          {data_news.map((item) => (
            <li className="home-news-shownews" key={item.title}>
              <div className="hn-box-img">
                <img className="hn-img" src={item.src} alt="" />
              </div>

              <div className="hn-box-title">
                <span className="hn-title">{item.title}</span>
              </div>
              <span className="hn-date">
                <CIcon className="hn-date-icon" icon={cilClock} />
                {item.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

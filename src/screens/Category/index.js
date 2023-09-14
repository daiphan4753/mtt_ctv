import React from "react";
import "./index.css";
import CustomHeader from "../../components/CustomHeader";
import ProductBox from "../../components/ProductBox";
import { data_product } from "../../data/dataProduct";

export default function Category() {
  return (
    <div>
      <CustomHeader title={"Bán hàng"} showCart countValue={5} />
      <div className="cate-product-container">
        <ul className="cate-ul">
          {data_product.map((item) => (
            <li className="cate-li" key={item.name}>
              <ProductBox src={item.src} name={item.name} price={item.price} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./Coupons.css";

const Coupons = () => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((result) => setCoupons(result));
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {coupons &&
          coupons.map((coupon) => (
            <div className="m-10 coupon" key={coupon.id}>
              <div className="center">
                <div>
                  <p className="mb-2 line-clamp-1 max-w-[25ch] text-[15px] font-light	">
                    {coupon.title}
                  </p>
                  <p className="text-xs font-light line-clamp-2 max-w-[28ch] leading-4">
                    {coupon.description}
                  </p>
                  <p className="mt-1 text-[13px] font-bold">
                    Code: {coupon.code}
                  </p>
                  {/* <PopUp coupon={coupon} getCoupons={getCoupons} /> */}
                </div>
              </div>

              <div className="flex-1 right">
                <p className="mb-2 font-light ">Spend: {coupon.minSpend}TK</p>
                <p className="text-2xl font-light ">{coupon.discount}TK</p>
                <p className="font-light ">Max Discount</p>
                <p className="mt-3 text-[10px] font-thin">
                  <span className="mr-1"> Valid Until</span>
                  {new Date().toLocaleDateString("en-US", options)}
                </p>
              </div>

              <div className="circle1 left-[-25px]"></div>
              <div className="circle2 right-[-25px]"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Coupons;

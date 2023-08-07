import React from "react";
import "./Coupons.css";

const Coupons = () => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="coupon m-10">
          <div className="center">
            <div>
              <p className="mb-2 line-clamp-1 max-w-[25ch]">
                ALL NIGHT WINGS 8 PADS
              </p>
              <p className="text-sm line-clamp-2 max-w-[28ch] leading-4">
                10tk Joya Anti-Bacterial Sanitary Napkin All Night Wings 8 Pads
                Pack
              </p>
              <p className="text-sm text-bold mt-1">Code: JNW08</p>
              {/* <PopUp coupon={coupon} getCoupons={getCoupons} /> */}
            </div>
          </div>

          <div className="right flex-1">
            <p className="mb-2">Spend: 200TK</p>
            <p className="text-2xl">30TK</p>
            <p>Max Discount</p>
            <p className="text-xs mt-3 font-thin">
              Valid Until
              {new Date().toLocaleDateString("en-US", options)}
            </p>
          </div>

          <div className="circle1 left-[-25px]"></div>
          <div className="circle2 right-[-25px]"></div>
        </div>

        <div className="coupon m-10">
          <div className="center">
            <div>
              <p className="mb-2 line-clamp-1 max-w-[25ch]">
                ALL NIGHT WINGS 8 PADS
              </p>
              <p className="text-sm line-clamp-2 max-w-[28ch] leading-4">
                10tk Joya Anti-Bacterial Sanitary Napkin All Night Wings 8 Pads
                Pack
              </p>
              <p className="text-sm text-bold mt-1">Code: JNW08</p>
              {/* <PopUp coupon={coupon} getCoupons={getCoupons} /> */}
            </div>
          </div>

          <div className="right flex-1">
            <p className="mb-2">Spend: 200TK</p>
            <p className="text-2xl">30TK</p>
            <p>Max Discount</p>
            <p className="text-xs mt-3 font-thin">
              Valid Until
              {new Date().toLocaleDateString("en-US", options)}
            </p>
          </div>

          <div className="circle1 left-[-25px]"></div>
          <div className="circle2 right-[-25px]"></div>
        </div>
      </div>
    </>
  );
};

export default Coupons;

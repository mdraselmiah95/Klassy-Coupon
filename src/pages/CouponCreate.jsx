import { Input, Button } from "@nextui-org/react";
import { data } from "autoprefixer";
import { useCallback, useEffect, useRef, useState } from "react";
// import Coupons from "../components/coupon/Coupons";

const CouponCreate = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const minSpendRef = useRef();
  const amountRef = useRef();
  const expiryDateRef = useRef();
  // const voucher_codes = require("voucher-code-generator");
  const [coupons, setCoupons] = useState([]);

  const createCoupon = (e) => {
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      amount: Number(amountRef.current.value),
      minSpend: Number(minSpendRef.current.value),
      expiryDate: expiryDateRef.current.value,
    };
    console.log(data);
  };

  return (
    <div className="h-screen">
      <p className="my-5 text-2xl text-center text-bold">CREATE COUPON</p>
      <form
        onSubmit={createCoupon}
        className="flex flex-col items-center justify-center my-10"
      >
        <div className="flex gap-5 mb-5">
          <Input
            ref={titleRef}
            isClearable
            isRequired
            type="text"
            label="Title"
            variant="bordered"
            className="min-w-[220px]"
            placeholder="Enter coupon title"
            size="sm"
          />

          <Input
            ref={descriptionRef}
            isClearable
            isRequired
            type="text"
            label="Description"
            variant="bordered"
            className="min-w-[520px]"
            placeholder="Enter coupon description"
            size="sm"
          />
        </div>

        <div className="flex gap-5 mb-5">
          <Input
            ref={minSpendRef}
            isClearable
            isRequired
            type="number"
            label="Minimum Spend (BDT)"
            variant="bordered"
            placeholder="Enter minimum amount"
            className="min-w-[220px]"
            size="sm"
          />

          <Input
            ref={amountRef}
            isClearable
            isRequired
            type="number"
            label="Amount (BDT)"
            variant="bordered"
            className="min-w-[220px]"
            placeholder="Enter coupon amount"
            size="sm"
          />

          <Input
            ref={expiryDateRef}
            isClearable
            isRequired
            type="date"
            label="Validity"
            variant="bordered"
            className="min-w-[250px]"
            placeholder="valid till"
            size="sm"
          />
        </div>

        <Button type="submit" className="bg-black text-white min-w-[220px]">
          Generate
        </Button>
      </form>

      {/* <Coupon coupons={coupons} getCoupons={getCoupons} /> */}
    </div>
  );
};

export default CouponCreate;

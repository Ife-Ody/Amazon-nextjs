import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain"></Image>
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" key={i}></StarIcon>
            ))}
        </div>
        <p className="my-2 text-xs line-clamp-3">{description}</p>
        <div className="mb-5">
          <Currency quantity={price} currency="GBP"></Currency>
        </div>
        {hasPrime && (
          <div className="flex items-center -mt-5 space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
              loading="lazy"
            />
            <p className="text-xs text-gray-500">Free Next Day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col my-auto space-y-2 justify-self-end">
        <button className="button" onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;

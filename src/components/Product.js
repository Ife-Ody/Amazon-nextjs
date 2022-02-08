import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative z-30 flex flex-col p-10 bg-white ">
      <p className="absolute text-xs italic text-gray-400 top-2 right-2">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain"></Image>
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i}></StarIcon>
          ))}
      </div>
      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP"></Currency>
      </div>
      {hasPrime && (
        <div className="flex items-center -mt-5 space-x-2">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next Day Delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto button ">
        Add to basket
      </button>
    </div>
  );
};

export default Product;

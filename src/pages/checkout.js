import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";

const checkout = () => {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  return (
    <div className="bg-gray-100">
      <Header></Header>
      <main className="mx-auto lg:flex max-w-screen-2xl">
        {/* left side */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src={"https://links.papareact.com/ikj"}
            height={250}
            width={1020}
            objectFit="contain"
          ></Image>
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="pb-4 text-3xl border-b">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              ></CheckoutProduct>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col p-10 bg-white shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap ">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  {" "}<Currency quantity={total} currency="GBP"></Currency>
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
      I am the checkout page
    </div>
  );
};

export default checkout;

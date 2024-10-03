import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

function Section02() {
  const [productDetail, setProductsDetails] = useState([]);
  const [is_loading, setIsLoading] = useState(false);
  const [categoryName, setCategoryName] = useState([]);
  const [category, setCategory] = useState("");

  const allCategoryProducts = async (typeProducts) => {
    setIsLoading(true);
    try {
      let res = await fetch(`https://dummyjson.com/${typeProducts}`);
      let result = await res.json();

      setProductsDetails(result.products);
      // Assuming the API returns a 'products' array
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error); // Add error logging
    }
  };

  const allCategoryName = async () => {
    try {
      let res = await fetch("https://dummyjson.com/products/categories");
      let data = await res.json();
      setCategoryName(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    allCategoryProducts("products");
    allCategoryName();
  }, []);

  const handleOnchangeCategory = (e) => {
    console.log(e.target.value);

    let cate = e.target.value;
    setCategory(cate);
    if (cate === "") {
      allCategoryProducts("products");
    } else {
      allCategoryProducts(`products/category/${cate}`);
    }
  };

  return (
    <div className="w-10/12 mx-auto md:mt-44  mb-3 mt-32">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-semibold text-slate-600 font-serif">
          All Products
        </h1>
        <div className="bg-gray-400 h-1 rounded-full w-24 mt-1 mb-3"></div>
      </div>
      <div className="flex gap-40 mb-6 mt-10">
        <div>
          <span className="text-slate-400 font-semibold">Filter:</span>
          <select name="" id="" onClick={handleOnchangeCategory}>
            <option value="">All Products</option>
            {categoryName.map((items) => (
              <option key={items.name} value={items.name}>
                {items.name}
              </option>
            ))}

            <option value="makeup">Make Up</option>
          </select>
        </div>
        <div>
          <span className="text-slate-400 font-semibold">Sort:</span>
          <select name="" id="">
            <option value="">All</option>
            <option value="best-seller">Best Seller</option>
            <option value="top-rating">Top Rating</option>
          </select>
        </div>
      </div>

      {is_loading ? (
        <div className="flex justify-center ">
          <Spinner animation="border" variant="success" size="lg" />
        </div>
      ) : productDetail.length > 0 ? (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {productDetail.map((items, index) => {
            // console.log(items
            return (
              <div
                key={index}
                className="shadow-md hover:scale-105 rounded-md p-3 flex flex-col items-center justify-center border"
              >
                <div className="flex items-center justify-center ">
                  <img
                    src={items.images[0]}
                    alt=""
                    className="aspect-square items-center "
                    width={250}
                  />
                </div>
                <div>
                  <h1 className="md:text-lg text-sm text-slate-600 font-semibold ">
                    {items.title}
                  </h1>
                  {/* <p className="text-sm text-slate-400">{items.description}</p> */}
                  <label className="text-slate-500 font-mono">
                    Price:{" "}
                    <span className="text-green-600"> ${items.price}</span>
                  </label>
                </div>
                <div className="grid justify-center mt-5">
                  <button className="border-2 hover:bg-indigo-500 hover:text-white border-indigo-500 md:px-6 md:py-2 px-3 py-1 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Products Not Found</p>
      )}

      <div className="grid justify-center mt-12">
        <button className="hover:bg-sky-500 hover:text-white border-2 border-sky-500 rounded-md px-4 py-1 text-lg">
          View All
        </button>
      </div>
    </div>
  );
}

export default Section02;

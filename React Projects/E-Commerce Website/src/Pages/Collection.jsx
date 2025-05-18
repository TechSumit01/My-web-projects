import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../Components/ProductItem";
import { assets } from "../asset/frontend_assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [allProducts, setAllProducts] = useState([]); // stores all the list of products on this page //
  const [showFilter, setShowFilter] = useState(false); // to show and hide filter on small screen //
  const [sortOption, setSortOption] = useState("relevant");
  // const [originalProducts, setOriginalProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);


  const handleFilter = (category) => {
    const filtered = products.filter((item) => (item.category === category));
    setFilterProducts(filtered);
  };

  // };

  // product ko sort / filter krne ke leye

  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    setSortOption(selectedValue);
    const sortedProducts = [...allProducts];

    if (selectedValue === "Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedValue === "High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedValue === "relevant") {
      setAllProducts(originalProducts);
    }
    setAllProducts(sortedProducts);
  };
  useEffect(() => {
    setAllProducts(products);
    // setOriginalProducts(products);
  }, [products]);
  return (
    <>
      <hr />
      <div className="flex flex-col sm:flex-row gap-10 mt-10 ">
        {/* Side filterroduct optionn  */}
        <div className="min-w-60  ">
          <h2
            onClick={() => setShowFilter(!showFilter)}
            className="cursor-pointer text-xl font-medium text-black flex items-center gap-3"
          >
            FILTERS
            <img
              className="w-2 h-4 sm:hidden text-black"
              src={assets.dropdown_icon}
              alt="dropdown-icon"
            />
          </h2>
          <div
            className={` sm:block transition-all ${
              showFilter ? "block" : "hidden "
            }`}
          >
            <div className="border border-gray-400 px-4 py-3 mt-8 ">
              <p className=" text-base font-medium text-black  mb-2">
                CATAGORIES
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className=" flex flex-col gap-1"
                action="#"
              >
                <label htmlFor="men">
                  <input
                    onClick={() => handleFilter("men")}
                    className=" mr-2"
                    name="men"
                    type="checkbox"
                  />
                  Men
                </label>
                <label htmlFor="women">
                  <input
                    onClick={() => handleFilter("women")}
                    className=" mr-2"
                    name="women"
                    type="checkbox"
                  />
                  Women
                </label>
                <label htmlFor="kids">
                  <input
                    onClick={() => handleFilter("kids")}
                    className=" mr-2"
                    name="kids"
                    type="checkbox"
                  />
                  Kids
                </label>
              </form>
            </div>

            <div className="border border-gray-400 px-4 py-3  mt-6">
              <p className=" text-base font-medium text-black  mb-2">TYPE</p>
              <form className=" flex flex-col gap-1" action="#">
                <label htmlFor="Topwear">
                  <input className=" mr-2" name="Topwear" type="checkbox" />
                  Topwear
                </label>
                <label htmlFor="Winterwear">
                  <input className=" mr-2" name="Winterwear" type="checkbox" />
                  Winterwear
                </label>
                <label htmlFor="BottomWear">
                  <input className=" mr-2" name="BottomWear" type="checkbox" />
                  BottomWear
                </label>
              </form>
            </div>
          </div>
        </div>

        {/* This will display all the products */}
        <div className="flex-1 ">
          <div className=" flex items-center justify-between mb-7 ">
            <h1 className="text-lg md:text-2xl text-gray-500 flex gap-2 ">
              ALL <p className="text-gray-800 ">COLLECTIONS </p>
            </h1>
            <select
              onChange={handleSortChange}
              value={sortOption}
              name="sort "
              id="sort"
              className=" px-2 py-2 text-sm text-gray-800 border-2  border-black"
            >
              <option value="relevant"> Sort by : Relevent</option>
              <option value="Low to High"> Sort by : Low to High</option>
              <option value="High to Low"> Sort by : High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
            {(filterProducts.length > 0 ? filterProducts : allProducts).map(
              (v, i) => {
                return (
                  <ProductItem
                    key={i}
                    id={v._id}
                    image={v.image}
                    name={v.name}
                    price={v.price}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;

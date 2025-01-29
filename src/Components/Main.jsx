/* eslint-disable no-unused-vars */
import { Pagination } from "@mui/material";
import Fetchapi from "./Fetchapi";
import "./Main.css";
import { useEffect, useState } from "react";
import Model from "./Model";
import ProductsGrid from "./ProductsGrid";

const Main = () => {
  const [page, setPage] = useState(1);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { data } = Fetchapi(
    `https://dummyjson.com/products?limit=20&skip=${page * 20 - 20}`
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModelOpen(true);
  };

  return (
    <>
      <div>
        <ProductsGrid data={data} onProductClick={handleProductClick} />
        {data.length > 0 && (
          <div className="pagination">
            <Pagination
              count={10}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        )}
      </div>

      {isModelOpen && (
        <Model product={selectedProduct} onClose={() => setIsModelOpen(false)} />
      )}
    </>
  );
};

export default Main;

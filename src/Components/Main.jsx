import { Pagination } from "@mui/material";
import Fetchapi from "./Fetchapi";
import "./Main.css";
import { useState } from "react";
const Main = () => {
  const [page, setPage] = useState(1);
  
  const { data } = Fetchapi(
    `https://dummyjson.com/products?limit=20&skip=${page * 20 - 20}`
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <div className="products">
        {data.map((prod) => {
          return (
            <span className="products__single" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />{" "}
              <span>{prod.title.split("").splice(0, 20).join("")}</span>
            </span>
          );
        })}
      </div>
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
  );
};

export default Main;

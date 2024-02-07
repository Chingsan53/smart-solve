import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./category.component.scss";
import CurrencyConverter from "../currency-converter/currency-converter.component";

const Category = () => {
  return (
    <Fragment>
      <div>
        <h1>All Utilities</h1>
        <div>
          <Link className="" to="currency-converter">
            <img className="card-image" src="" alt="" />
            <div className="card-title">Currency Converter</div>
          </Link>
          <Link className="" to="/tip-calculation">
            <img className="card-image" src="" alt="" />
            <div className="card-title">TIps Calculation</div>
          </Link>
          <Link className="" to="/todo-list">
            <img className="card-image" src="" alt="" />
            <div className="card-title">Todo List</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Category;

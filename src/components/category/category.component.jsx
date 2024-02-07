import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./category.component.scss";


const Category = () => {
  return (
    <Fragment>
      <div className="categories">
        <h1>All Utilities</h1>
        <div className="categories-container">
          <Link className="card" to="/currency-converter">
            
            <img className="card-image" src="/img/currency.jpg" alt="" />
            <div className="card-title">Currency Converter</div>
          </Link>
          <Link className="card" to="/tip-calculation">
            <img className="card-image" src="/img/tip-calculator.jpg" alt="" />
            <div className="card-title">Tips Calculation</div>
          </Link>
          <Link className="card" to="/todo-list">
            <img className="card-image" src="/img/todo-list.jpg" alt="" />
            <div className="card-title">Todo List</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Category;

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
          <Link className="card" to="/tip-calculator">
            <img className="card-image" src="/img/tip-calculator.jpg" alt="" />
            <div className="card-title">Tips Calculation</div>
          </Link>
          <Link className="card" to="/unit-converter">
            <img className="card-image" src="/img/unit-converter.jpg" alt="" />
            <div className="card-title">Unit Converter</div>
          </Link>
          <Link className="card" to="/todo-list">
            <img className="card-image" src="/img/todo-list.jpg" alt="" />
            <div className="card-title">Todo List</div>
          </Link>
          <Link className="card" to="/weather-forecast">
            <img className="card-image" src="/img/weather.jpg" alt="" />
            <div className="card-title">Weather Forecast</div>
          </Link>
          <Link className="card" to="/recipe-finder">
            <img className="card-image" src="/img/recipe.jpg" alt="" />
            <div className="card-title">Recipe Finder</div>
          </Link>
          <Link className="card" to="/note-taking">
            <img className="card-image" src="/img/note-taking.jpg" alt="" />
            <div className="card-title">Note Taking</div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Category;

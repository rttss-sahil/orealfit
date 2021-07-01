import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import categoriesSample from "../../../public/json/categoriesSample.json";

export const index = (props) => {
  return (
    <div className="categories homepage">
      <h2>Categories</h2>
      <ul className="category__list">
        {categoriesSample.map((category) => (
          <li>
            <Link
              key={category.id}
              href={`/category/${category.name.toLowerCase()}`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);

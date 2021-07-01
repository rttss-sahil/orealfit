import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

export const Category = ({ categories }) => {
  return (
    <div className="category-page">
      <h1 className="category-title">All Categories</h1>
      {console.log("categ", categories)}
      <ul className="category-all">
        {categories.map((category) => (
          <Link
            className="category-item"
            key={category.id}
            href={`/category/${category.slug}`}
          >
            {category.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({ categories: state.categories });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

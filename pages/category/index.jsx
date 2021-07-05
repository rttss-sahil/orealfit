import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

export const Category = ({ state }) => {
  return (
    <div className="category-page">
      <h1 className="category-title">All Categories</h1>
      <ul className="category-all">
        {[...state.categories].map((category) => (
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

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

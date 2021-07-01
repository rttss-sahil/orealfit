import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

const categories = [
  {
    id: 1,
    slug: "hel",
    name: "abc",
  },
];

export const Category = (props) => {
  return (
    <div className="category-page">
      <h1 className="category-title">All Categories</h1>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

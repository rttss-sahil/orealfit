import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import proteins from "../../public/img/shop-by-categories/normal_1460333_o.png";
import gainers from "../../public/img/shop-by-categories/normal_1476745_o.png";
import prepost from "../../public/img/shop-by-categories/normal_1476747_o.png";
import fatloss from "../../public/img/shop-by-categories/normal_1476749_o.png";
import vitamins from "../../public/img/shop-by-categories/normal_1476751_o.png";

export const Category = ({ state }) => {
  const [proteinActive, setProteinActive] = React.useState(true),
    [gainerActive, setGainerActive] = React.useState(false),
    [prepostActive, setPrepostActive] = React.useState(false),
    [fatlossActive, setFatlossActive] = React.useState(false),
    [vitaminActive, setVitaminsActive] = React.useState(false),
    removeEverything = () => {
      setProteinActive(false);
      setGainerActive(false);
      setPrepostActive(false);
      setFatlossActive(false);
      setVitaminsActive(false);
    };
  return (
    <div className="category-page">
      <h1 className="category-title">All Categories</h1>
      <div className="categories-all">
        <div className={`category ${proteinActive ? "active" : ""}`}>
          <div
            className="category-heading"
            onClick={() => {
              removeEverything();
              setProteinActive(true);
            }}
          >
            <Image src={proteins} />
            <p>Protein</p>
          </div>
          <ul className="category-list">
            <h2>Protein Supplements</h2>
            {/* <li>
              <Link href="/category/all-proteins">All Proteins</Link>
            </li> */}
            <li>
              <Link href="/category/whey-proteins">Whey Protein</Link>
            </li>
            <li>
              <Link href="/category/whey-protein-isolate">
                Whey Protein Isloate
              </Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">
                Whey Protein Concentrate
              </Link>
            </li>
            <li>
              <Link href="/category/">Reus Whey</Link>
            </li>
          </ul>
        </div>
        <div className={`category ${gainerActive ? "active" : ""}`}>
          <div
            className="category-heading"
            onClick={() => {
              removeEverything();
              setGainerActive(true);
            }}
          >
            <Image src={gainers} />
            <p>Gainers</p>
          </div>
          <ul className="category-list">
            <h2>Gainers</h2>

            {/* <li>
              <Link href="/category/">All Gainers</Link>
            </li> */}
            <li>
              <Link href="/category/weight-gain">Weight Gain</Link>
            </li>
            <li>
              <Link href="/category/whey-protein-isolate">L Arginine</Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">Muscle Gain</Link>
            </li>
          </ul>
        </div>
        <div className={`category ${prepostActive ? "active" : ""}`}>
          <div
            className="category-heading"
            onClick={() => {
              removeEverything();
              setPrepostActive(true);
            }}
          >
            <Image src={prepost} />
            <p>Pre / Post Workout</p>
          </div>
          <ul className="category-list">
            <h2>Pre & Post Workout</h2>
            {/* <li>
              <Link href="/category/">All Pre/Post Workout</Link>
            </li> */}
            <li>
              <Link href="/category/weight-gain">Pre Workout</Link>
            </li>
            <li>
              <Link href="/category/whey-protein-isolate">BCAA</Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">L Arginine</Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">EAA</Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">Creatine</Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">Glutamine</Link>
            </li>
          </ul>
        </div>
        <div className={`category ${fatlossActive ? "active" : ""}`}>
          <div
            className="category-heading"
            onClick={() => {
              removeEverything();
              setFatlossActive(true);
            }}
          >
            <Image src={fatloss} />
            <p>Fat Loss</p>
          </div>
          <ul className="category-list">
            <h2>Fat Loss Products</h2>
            {/* <li>
              <Link href="/category/">All Fat Loss</Link>
            </li> */}
            <li>
              <Link href="/category/weight-gain">CLA</Link>
            </li>
            <li>
              <Link href="/category/whey-protein-isolate">L Arginine</Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">L Cosmitine</Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">Garcinia Com</Link>
            </li>
          </ul>
        </div>
        <div className={`category ${vitaminActive ? "active" : ""}`}>
          <div
            className="category-heading"
            onClick={() => {
              removeEverything();
              setVitaminsActive(true);
            }}
          >
            <Image src={vitamins} />
            <p>Vitamins & Essential</p>
          </div>
          <ul className="category-list">
            <h2>Vitamins & Other Supplements</h2>
            {/* <li>
              <Link href="/category/">All Vitamins & Wellness</Link>
            </li> */}
            <li>
              <Link href="/category/weight-gain">Omega Fatty Acids</Link>
            </li>
            <li>
              <Link href="/category/whey-protein-isolate">Multi-Vitamins</Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">WorkOut Essential</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(Category);

{
  /* <ul className="category-all">
    {[...state.categories].map((category) => (
      <Link
        className="category-item"
        key={category.id}
        href={`/category/${category.slug}`}
      >
        {category.name}
      </Link>
    ))}
  </ul> */
}

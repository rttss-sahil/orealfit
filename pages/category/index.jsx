import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import proteins from "../../public/img/shop-by-categories/proteins.jpg";
import gainers from "../../public/img/shop-by-categories/Gainer.jpg";
import prepost from "../../public/img/shop-by-categories/Pre Post.jpg";
import fatloss from "../../public/img/shop-by-categories/normal_1460333_o.png";
import vitamins from "../../public/img/shop-by-categories/vitamins.jpg";
import Head from "next/head";

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
    <>
    <Head>
      <title>Categories by Orealfit</title>
    </Head>
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
              <Link href="/category/whey-proteins-isolate">
                Whey Proteins Isloate
              </Link>
            </li>
            <li>
              <Link href="/category/whey-proteins-concentrate">
                Whey Proteins Concentrate
              </Link>
            </li>
            <li>
              <Link href="/category/rues-whey">
              Reus Whey
              </Link>
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
              <Link href="/category/l-arginine">
              L Arginine</Link>
            </li>
            <li>
              <Link href="/category/muscle-gain">
              Muscle Gain</Link>
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
              <Link href="/category/pre-workout">
              Pre Workout</Link>
            </li>
            <li>
              <Link href="/category/bcca">BCAA
              </Link>
            </li>
            <li>
              <Link href="/category/l-arginine">
              L Arginine</Link>
            </li>
            <li>
              <Link href="/category/eaa">EAA</Link>
            </li>
            <li>
              <Link href="/category/creatine">
              Creatine</Link>
            </li>
            <li>
              <Link href="/category/glutamine">
              Glutamine</Link>
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
              <Link href="/category/cla">CLA</Link>
            </li>
            <li>
              <Link href="/category/l-arginine">
              L Arginine</Link>
            </li>
            <li>
              <Link href="/category/l-cosmitine">L Cosmitine</Link>
            </li>
            <li>
              <Link href="/category/garcinia-com">Garcinia Com</Link>
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
              <Link href="/category/omega-fatty-acid">Omega Fatty Acids</Link>
            </li>
            <li>
              <Link href="/category/multi-vitamins">Multi-Vitamins</Link>
            </li>
            <li>
              <Link href="/category/workout-essential">Workout Essential</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
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

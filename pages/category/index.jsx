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
  return (
    <div className="category-page">
      <h1 className="category-title">All Categories</h1>
      <div className="categories-all">
        <div className="categories-left">
          <div className="category-heading">
            <Image src={proteins} />
            <p>Protein</p>
          </div>
          <div className="category-heading">
            <Image src={gainers} />
            <p>Gainers</p>
          </div>
          <div className="category-heading">
            <Image src={prepost} />
            <p>Gainers</p>
          </div>
          <div className="category-heading">
            <Image src={vitamins} />
            <p>Gainers</p>
          </div>
        </div>
        <div className="categories-right">
          <ul>
            <li>
              <Link href="/category/">All Proteins</Link>
            </li>
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
          <ul>
            <li>
              <Link href="/category/">All Gainers</Link>
            </li>
            <li>
              <Link href="/category/weight-gain">Weight Gain</Link>
            </li>
            <li>
              <Link href="/category/whey-protein-isolate">L </Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">Muscle Gain</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/category/">All Pre/Post Workout</Link>
            </li>
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
          <ul>
            <li>
              <Link href="/category/">All Fat Loss</Link>
            </li>
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
          {/* <ul>
            <li>
              <Link href="/category/">All Vitamins & Wellness</Link>
            </li>
            <li>
              <Link href="/category/weight-gain">Omega Fatty Acids</Link>
            </li>
            <li>
              <Link href="/category/whey-protein-isolate">Multi-Vitamins</Link>
            </li>
            <li>
              <Link href="/category/whey-concentrate">WorkOut Essential</Link>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Category);

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

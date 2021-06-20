import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Header from "../Header/index.jsx";

export const Home = (products) => {
  return (
    <>
      <Head>
        <title>OrealFit</title>
        <meta name="description" content="Orealfit website/app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {console.log(products)}
      <Header homepage={true} />
      <div>HomePage</div>
    </>
  );
};

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

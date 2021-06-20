import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Header from "../../components/Major/Header";
import Footer from "../../components/Major/Footer";
import HomePage from "../../components/Major/Homepage";
import HomePageCategories from "../../components/Minor/HomePageCategories";
export const Home = (products) => {
  return (
    <>
      <Head>
        <title>OrealFit</title>
        <meta name="description" content="Orealfit website/app" />
      </Head>
      <Header homepage={true} />
      <HomePageCategories />
      <HomePage />
      <Footer />
    </>
  );
};

const mapStateToProps = ({ products }) => ({ products });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

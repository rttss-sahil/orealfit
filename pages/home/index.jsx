import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import HomePage from "../../components/Major/Homepage";
import HomePageCategories from "../../components/Minor/HomePageCategories";
export const Home = ({ state }) => {
  return (
    <>
      <Head>
        <title>OrealFit</title>
        <meta name="description" content="Orealfit website/app" />
      </Head>
      {/* <HomePageCategories /> */}
      <HomePage />
    </>
  );
};

const mapStateToProps = (state, dispatch) => ({ state, dispatch });

export default connect(mapStateToProps)(Home);

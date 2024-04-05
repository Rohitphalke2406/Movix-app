import React from "react";

import Banner from "../components/Home/Banner";
import ToogleFetch from "../components/Home/Fetch";
import Trending from "../components/Home/Trending";
import Popular from "../components/Home/Famous";

const Home = () => {
  return (
    <div className="mt-14 py-24 bg-navy-blue ">
      <Banner />
      <ToogleFetch />
      <Trending />
      <Popular />
    </div>
  );
};

export default Home;
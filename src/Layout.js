import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header-Footer/Header";
import Footer from "./components/Header-Footer/Footer";
import Home from "./pages/Home";
import PageNoteFound from "./pages/PageNotFound";
import Movies from "./pages/Movies";
import TvShows from "./pages/tvShows";
import Search from "./pages/Search";
import MovieDetails from "./components/Details/movieDetails";
import TvShowDetails from "./components/Details/showDetails";

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tvShows/:id" element={<TvShowDetails />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="*" element={<PageNoteFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
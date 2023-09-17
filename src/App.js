import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import fetchDataFromAPI from "./utils/api";

import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'

import Explore from './pages/explore/Explore'

import PageNotFound from './pages/404/pagenotfound'



function App() {
  const dispatch = useDispatch();  
  const {url} = useSelector((state) =>state.home);
  // console.log(url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, [])// eslint-disable-next-line
  
  const fetchApiConfig = async()=>{
    // try { 
      const res = await fetchDataFromAPI("/configuration");
      // console.log(res);

      const url = {
        backdrop: res.images.secure_base_url+"original",
        poster: res.images.secure_base_url+"original",
        profile: res.images.secure_base_url+"original",
      }

      dispatch(getApiConfiguration(url));
    // } 
    // catch (error) {
    //   console.log(error);
    // }
  };
const genresCall = async()=>{
  let promises = [];
  let endPoints = ["tv", "movie"];
  let allGenres = {};
  endPoints.forEach((url)=> {
    promises.push(fetchDataFromAPI(`/genre/${url}/list`));
  });

  const data = await Promise.all(promises);

  data.map(({genres})=>{
    return genres.map((entity)=>{
      allGenres[entity.id] = entity;
    });
  });
  dispatch(getGenres(allGenres));
  // console.log(allGenres);
}

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/:mediaType/:id" element = {<Details/>}></Route>
        <Route path="/search/:query" element = {<SearchResult></SearchResult>}></Route>
        <Route path="/explore/:mediaType" element = {<Explore/>}></Route>
        <Route path="*" element = {<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
} 

export default App;
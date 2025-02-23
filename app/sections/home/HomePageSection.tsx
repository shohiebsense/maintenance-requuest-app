import React, { useEffect } from "react";
import  HomePageView  from "./HomePageView";
import HomePageStore from "./HomePageStore"; 

const HomePageSection = () => {

 useEffect(() => {
   
 }, []);
 
   const executeOnceProps = () => {
     return {};
   };
  
  return <HomePageView stats={executeOnceProps()} />;
};

export default HomePageSection;

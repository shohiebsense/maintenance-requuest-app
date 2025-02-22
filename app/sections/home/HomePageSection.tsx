import React, { useEffect } from "react";
import  HomePageView  from "./HomePageView";
import HomePageStore from "./HomePageStore"; 

const HomePageSection = () => {

 useEffect(() => {
   /* const requestsToAdd = [
     {
       title: "New Request 1",
       date: "25 Dec 2024",
       status: "Non Urgent",
       info: "This is the first request",
     },
   ];

   // Add each request with a 1-second delay
   requestsToAdd.forEach((request, index) => {
     setTimeout(() => {
       HomePageStore.addRequest(request);
     }, (index + 1) * 1000); // Delay increases by 1 second for each request
   }); */
 }, []);
 
  return (
    <HomePageView />
  );
};

export default HomePageSection;

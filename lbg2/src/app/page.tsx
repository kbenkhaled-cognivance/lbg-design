"use client"; // This is needed to use React hooks

import { useState } from "react";
import { ExpertVideoReviewComponent } from "../components/expert-video-review";
import { HomePage } from "../components/home-page";
import './/globals.css'; // Make sure this file exists

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string | null>(null); // Initially, no component is shown

  const showExpertVideoReview = () => {
    setCurrentPage("expert");
  };

  const showHomePage = () => {
    setCurrentPage("home");
  };

  return (
    <div>
      {/* Buttons to choose which component to show */}
      <button onClick={showHomePage}>Go to Home</button>
      <button onClick={showExpertVideoReview}>Go to Expert Video Review</button>

      {/* Conditionally render components based on the button click */}
      {currentPage === "home" && <HomePage />}
      {currentPage === "expert" && <ExpertVideoReviewComponent />}
    </div>
  );
}

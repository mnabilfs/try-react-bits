import React from "react";
import AnimatedList from "../components/AnimatedList";
import BlurText from "../components/BlurText";

const Home = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="flex gap-5">
      <AnimatedList
        items={items}
        onItemSelect={(item, index) => console.log(item, index)}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={true}
      />
      <BlurText
        text="Isn't this so cool?! SO CRAZYYYYY"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
    </div>
  );
};

export default Home;

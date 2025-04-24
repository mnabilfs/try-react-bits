import React from "react";
import AnimatedList from "../components/AnimatedList";
import BlurText from "../components/BlurText";
import Stepper, { Step } from "../components/Stepper";
import CountUp from "../components/CountUp";

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
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2>Welcome to the React Bits stepper!</h2>
          <p>Check out the next step!</p>
        </Step>
        <Step>
          <h2>Step 2</h2>
          <img
            style={{
              height: "100px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center -70px",
              borderRadius: "15px",
              marginTop: "1em",
            }}
            src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
          />
          <p>Custom step content!</p>
        </Step>
        <Step>
          <h2>How about an input?</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name?"
          />
        </Step>
        <Step>
          <h2>Final Step</h2>
          <p>You made it!</p>
        </Step>
      </Stepper>
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text text-5xl font-bold"
      />
    </div>
  );
};

export default Home;

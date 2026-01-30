import React, { useEffect } from "react";
import Whatweoffer from "../components/whatweoffer";
import SmartBusPage from "../components/Smartbuspage";
import Whychooseus from "../components/Whychooseus";

const Smartbus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <SmartBusPage />
      {/* <Whatweoffer /> */}
      <Whychooseus />
    </div>
  );
};

export default Smartbus;

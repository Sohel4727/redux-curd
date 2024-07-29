import React from "react";
import useScrollDetec from "../Hooks/useScrollDetec";

const ScrollDetection = () => {
    const scroll = useScrollDetec()
  return (
    <div>
        <h1>Scroll Direction === {scroll}</h1>
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quam
        alias repellendus magni dignissimos dolore quis in reprehenderit
        exercitationem ea laboriosam quidem, distinctio, reiciendis ipsum iure
        ex odit quia ab?
      </h1>
    </div>
  );
};

export default ScrollDetection;

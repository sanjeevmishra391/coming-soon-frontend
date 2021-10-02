import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import load from "./svgs/load.json";

function Loading(props) {
  const anime = useRef(null);

  useEffect(() => {
    // Logic goes here
    lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: load,
    });
    return () => lottie.stop();
  }, []);

  return (
    <div className={props.type === "page" ? "alrt-container" : ""}>
      <div className="load-content">
        <div style={{ height: 200, width: 250 }} ref={anime}></div>
      </div>
    </div>
  );
}

export default Loading;

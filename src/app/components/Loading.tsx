"use client";
import React from "react";

interface LoadingProps {
  width: number;
  complete?: () => void;
}

const Loading: React.FC<LoadingProps> = ({ width, complete }) => {
  React.useEffect(() => {
    if (width > 90 && complete) {
      complete();
      window.scrollTo(0, 0);
    }
  }, [width, complete]);

  return (
    <div className="w-screen h-screen flex gap-16 flex-col justify-center items-center bg-white overflow-hidden">
      <h1 className="text-3xl md:text-7xl font-medium">
        Hold up, wait just a second!
      </h1>
      <div className="overflow-hidden relative h-[50px] w-[80%] bg-white border-black border-8 rounded-xl">
        <div className="h-full w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 absolute">
          <div
            className="bg-white h-full origin-right transition-all"
            style={{ transform: `translateX(${width}%)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Loading, (prevProps, nextProps) => {
  return (
    prevProps.width === nextProps.width &&
    prevProps.complete === nextProps.complete
  );
});

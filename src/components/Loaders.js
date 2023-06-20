import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";

const Loaders = ({ loading, error, loaderType, className }) => {
  const classes = classNames(className);
  return (
    <>
      {loading && (
        <Box className={`${classes} flex flex-col gap-[10px] my-8`}>
          {/* Should be only for admin */}

          {error && (
            <Typography component="p">
              ADMIN | ERROR: {error?.message}
            </Typography>
          )}
          {/* // todo Could be good to have a proper like input = 10 and it would render 10 loading inputs instead of having logic below */}
          {loaderType === "faq" && (
            <>
              <div className="bg-gray-400 drop-shadow-xl animate-pulse w-full h-[40px] rounded p-2"></div>
              <div className="bg-gray-400 drop-shadow-xl animate-pulse w-full h-[40px] rounded p-2"></div>
              <div className="bg-gray-400 drop-shadow-xl animate-pulse w-full h-[40px] rounded p-2"></div>
            </>
          )}
          {loaderType === "faqEdit" && (
            <>
              <div className="border-solid border-[1px] border-graphit drop-shadow-xl animate-pulse w-full h-[50px] rounded p-2"></div>
              <div className="border-solid border-[1px] border-graphit drop-shadow-xl animate-pulse w-full h-[50px] rounded p-2"></div>
              <div className="bg-gray-400 drop-shadow-xl animate-pulse w-full h-[50px] rounded p-2"></div>
            </>
          )}
          {loaderType === "stepsEdit" && (
            <>
              <div className="border-solid border-[1px] border-graphit drop-shadow-xl animate-pulse w-full h-[50px] rounded p-2"></div>
              <div className="border-solid border-[1px] border-graphit drop-shadow-xl animate-pulse w-full h-[50px] rounded p-2"></div>
              <div className="bg-gray-400 drop-shadow-xl animate-pulse min-w-[200px] h-[50px] rounded p-2"></div>
              <div className="border-solid border-[1px] border-graphit drop-shadow-xl animate-pulse w-full h-[50px] rounded p-2"></div>
              <div className="border-solid border-[1px] border-graphit drop-shadow-xl animate-pulse w-full h-[50px] rounded p-2"></div>
              <div className="border-solid border-[1px] border-graphit drop-shadow-xl animate-pulse w-full h-[50px] rounded p-2"></div>
              <div className="bg-gray-400 drop-shadow-xl animate-pulse w-full h-[50px] rounded p-2"></div>
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default Loaders;

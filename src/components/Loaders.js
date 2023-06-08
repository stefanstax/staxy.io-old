import { Box, Typography } from "@mui/material";
import React from "react";

const Loaders = ({ loading, error, loaderType }) => {
  return (
    <>
      {loading && (
        <Box className="flex flex-col gap-[10px] my-8">
          {/* Should be only for admin */}
          {error && (
            <Typography component="p">
              ADMIN | ERROR: {error?.message}
            </Typography>
          )}
          {loaderType === "faq" && (
            <>
              <div className="bg-gray-400 drop-shadow-xl animate-pulse w-full h-[40px] rounded p-2"></div>
              <div className="bg-gray-400 drop-shadow-xl animate-pulse w-full h-[40px] rounded p-2"></div>
              <div className="bg-gray-400 drop-shadow-xl animate-pulse w-full h-[40px] rounded p-2"></div>
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default Loaders;

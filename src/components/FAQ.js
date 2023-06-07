import { testData } from "@/context/faq-data";
import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";
import InBoundLink from "./InBoundLink";

const FAQ = ({ data, className }) => {
  if (!data?.length) {
    data = testData;
  }
  const [isOpen, setIsOpen] = useState({});

  const handleClick = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const classes = classNames(className);

  const renderFAQ = data.map((entry, index) => {
    const isItemOpen = isOpen[index] || false;
    return (
      <>
        {entry?.question?.length > 5 && entry?.answer?.length > 5 && (
          <Box key={index} className="w-full my-2 rounded drop-shadow-md">
            <Typography
              component="h5"
              className={`text-[20px] ${
                isItemOpen ? "bg-pond hover:bg-purpy" : "bg-purpy hover:bg-pond"
              } p-2 text-beige font-bold hover:underline transition-all cursor-pointer ${
                isItemOpen ? "rounded-t" : "rounded"
              } `}
              onClick={() => handleClick(index)}
            >
              {entry?.question}
            </Typography>
            <Box
              className={`${
                isItemOpen ? "block" : "hidden"
              } p-2 py-4 bg-slate-50 rounded-b`}
            >
              <Typography component="p">{entry?.answer}</Typography>
            </Box>
          </Box>
        )}
      </>
    );
  });
  return (
    <Box className={classes}>
      <Typography component="h2" className="text-[40px] font-black">
        FAQ
      </Typography>
      <Typography component="p" className="text-[20px] mb-8">
        Below you can find questions I received in the previous weeks.
      </Typography>
      {renderFAQ}
      <InBoundLink
        to="https://calendy.com/staxy"
        className="text-[14px] font-light no-underline hover:opacity-75 transition-all"
        outSource
      >
        Click here to schedule a call for more...
      </InBoundLink>
    </Box>
  );
};

export default FAQ;

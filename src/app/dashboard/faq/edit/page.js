"use client";
import SharedLayout from "@/components/SharedLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../../../../supabase";
import { useEffect, useState } from "react";
import InBoundLink from "@/components/InBoundLink";

const FaqEdit = () => {
  const [faqList, setFaqList] = useState([]);

  async function fetchData() {
    const { data, error } = await supabase.from("faq").select();
    setFaqList(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const inputClasses = classNames(`w-full min-w-[250px]`);
  const buttonClasses = classNames(
    `w-full p-2 py-3 drop-shadow-md uppercase cursor-pointer min-w-[250px] bg-graphit rounded text-white border-graphit border-solid border-[1px] hover:opacity-75 transition-all`
  );

  const renderFaq = faqList.map((faq) => {
    return (
      <Box key={faq?.id}>
        <Box>
          <Typography>{faq?.question}</Typography>
        </Box>
        <Box>
          <Typography>{faq?.answer}</Typography>
        </Box>
        <InBoundLink
          to={`/dashboard/faq/edit/${faq?.id}`}
          onClick={() => router.push(`/dashboard/faq/edit/${faq?.id}`)}
        >
          Edit
        </InBoundLink>
      </Box>
    );
  });

  return <SharedLayout>{renderFaq}</SharedLayout>;
};

export default FaqEdit;

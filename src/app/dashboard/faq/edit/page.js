"use client";
import SharedLayout from "@/components/SharedLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../../../../supabase";
import { useEffect, useState } from "react";
import InBoundLink from "@/components/InBoundLink";
import Loaders from "@/components/Loaders";

const FaqEdit = () => {
  const [faqList, setFaqList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const { data, error } = await supabase.from("faq").select();
    setFaqList(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const inputClasses = classNames(`w-full min-w-[250px]`);
  const buttonClasses = classNames(
    `w-full p-2 py-3 uppercase cursor-pointer min-w-[250px] bg-graphit rounded-b rounded-t-[0px] text-white border-graphit border-solid border-[1px] hover:opacity-75 transition-all`
  );

  const renderFaq = faqList.map((faq) => {
    return (
      <Box
        key={faq?.id}
        className="w-full bg-white my-4 rounded drop-shadow-lg flex flex-col justify-center items-start gap-[10px]"
      >
        <Box className="flex gap-[10px] my-2 px-2">
          <Typography component="h5" fontWeight="900">
            Question:
          </Typography>
          <Typography>{faq?.question}</Typography>
        </Box>
        <Box className="flex gap-[10px] my-2 px-2">
          <Typography component="h5" fontWeight="900">
            Answer:
          </Typography>
          <Typography>{faq?.answer}</Typography>
        </Box>
        <InBoundLink
          className={buttonClasses}
          to={`/dashboard/faq/edit/${faq?.id}`}
          onClick={() => router.push(`/dashboard/faq/edit/${faq?.id}`)}
        >
          Edit
        </InBoundLink>
      </Box>
    );
  });

  return (
    <SharedLayout className="my-48 w-full mx-auto" maxWidth="max-w-[600px]">
      {loading && <Loaders loading={loading} loaderType="faqEdit" />}
      {!loading && renderFaq}
    </SharedLayout>
  );
};

export default FaqEdit;

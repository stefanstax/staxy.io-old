"use client";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import SharedLayout from "@/components/SharedLayout";
import { supabase } from "../../../../../supabase";

const LinksCreate = () => {
  const [link, setLink] = useState([]);
  const { reset, register, handleSubmit } = useForm();

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    const { data } = await supabase.from("links").select();
    setLink(data);
  };

  const onSubmit = async (data) => {
    await supabase
      .from("links")
      .insert({
        title: data?.title,
        url: data?.url,
      })
      .select();
    reset();
  };

  const buttonClasses = classNames(
    `w-full p-2 py-3 drop-shadow-md uppercase cursor-pointer min-w-[250px] bg-graphit rounded text-white border-graphit border-solid border-[1px] hover:opacity-75 transition-all`
  );

  return (
    <SharedLayout className="flex justify-center items-center">
      <form
        className="w-full max-w-[800px] flex flex-col justify-center items-center gap-[20px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Link Title"
          InputLabelProps={{ shrink: link[0]?.title || true }}
          {...register("title")}
          className="w-full"
        />
        <TextField
          label="Link URL"
          InputLabelProps={{ shrink: link[0]?.url || true }}
          {...register("url")}
          className="w-full"
        />
        <input type="submit" className={buttonClasses} />
      </form>
    </SharedLayout>
  );
};

export default LinksCreate;

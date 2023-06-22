"use client";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import SharedLayout from "@/components/SharedLayout";
import { useParams } from "next/navigation";
import { supabase } from "../../../../../../supabase";
import Loaders from "@/components/Loaders";

const LinksEdit = () => {
  const [link, setLink] = useState([]);
  const [loading, setLoading] = useState(true);
  const { reset, register, handleSubmit } = useForm();
  const params = useParams();

  useEffect(() => {
    fetchLink();
  }, []);

  const fetchLink = async () => {
    const { data } = await supabase.from("links").select().eq("id", params?.id);
    setLink(data);
    setLoading(false);
  };

  const onSubmit = async (data) => {
    await supabase
      .from("links")
      .update({
        title: data?.title || link?.title,
        url: data?.url || link?.url,
      })
      .eq("id", params?.id)
      .select();
    reset();
  };

  const buttonClasses = classNames(
    `w-full p-2 py-3 drop-shadow-md uppercase cursor-pointer min-w-[250px] bg-graphit rounded text-white border-graphit border-solid border-[1px] hover:opacity-75 transition-all`
  );

  return (
    <SharedLayout className="flex justify-center items-center px-4">
      {loading && (
        <Loaders
          className="w-full max-w-[800px]"
          loaderType="linkEdit"
          loading={loading}
        />
      )}
      {!loading && (
        <form
          className="w-full max-w-[800px] flex flex-col justify-center items-center gap-[20px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            label="Link Title"
            defaultValue={link[0]?.title}
            InputLabelProps={{ shrink: link[0]?.title || true }}
            {...register("title")}
            className="w-full"
          />
          <TextField
            label="Link URL"
            defaultValue={link[0]?.url}
            InputLabelProps={{ shrink: link[0]?.url || true }}
            {...register("url")}
            className="w-full"
          />
          <input type="submit" className={buttonClasses} />
        </form>
      )}
    </SharedLayout>
  );
};

export default LinksEdit;

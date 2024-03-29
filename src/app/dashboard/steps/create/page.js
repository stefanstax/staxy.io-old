"use client";
import SharedLayout from "@/components/SharedLayout";
import { MenuItem, Select, TextField, setRef } from "@mui/material";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../../../../supabase";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import useImage from "@/hooks/useImage";

const StepsCreate = () => {
  const { control, register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      mediaSrc: null,
      mediaFirst: false,
      className: "",
      endBlock: false,
    },
  });

  const onSubmit = async (data) => {
    // try {
    // * First upload image to the storage bucket
    const imageName = data?.mediaSrc[0]?.name;
    await supabase.storage
      .from("staxy_resources")
      .upload(`images/${imageName}`, data?.mediaSrc[0], {
        cacheControl: "3600",
        upsert: false,
      });
    // * If that is successful proceed with making a post request to the steps table
    // todo (data) params loss
    await supabase.from("steps").insert({
      title: data?.title,
      description: data?.description,
      mediaSrc: imageName,
      mediaFirst: data?.mediaFirst,
      className: data?.className,
      endBlock: data?.endBlock,
    });
    // })
    // * Reset form
    reset();
  };

  // const imageUrl = useImage(uploadedImage);

  const inputClasses = classNames(`w-full min-w-[250px]`);
  const buttonClasses = classNames(
    `w-full p-2 py-3 drop-shadow-md uppercase cursor-pointer min-w-[250px] bg-graphit rounded text-white border-graphit border-solid border-[1px] hover:opacity-75 transition-all`
  );

  return (
    <SharedLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-4 max-w-[600px] my-48 mx-auto justify-center items-center flex flex-col gap-[20px]"
      >
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField className={inputClasses} label="Title" {...field} />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              className={inputClasses}
              label="Description"
              {...field}
            />
          )}
        />
        <input
          type="file"
          label="File Upload"
          {...register("mediaSrc", { required: true })}
          accept="image/png"
        />
        <Controller
          name="mediaFirst"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              select
              className={inputClasses}
              label="Image Goes First"
              {...field}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </TextField>
          )}
        />
        <Controller
          name="className"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              className={inputClasses}
              defaultValue="yes"
              label="Custom Class Names"
              {...field}
            />
          )}
        />
        <Controller
          name="endBlock"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              select
              className={inputClasses}
              label="End Block"
              {...field}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </TextField>
          )}
        />
        <input className={buttonClasses} type="submit" />
      </form>
    </SharedLayout>
  );
};

export default StepsCreate;

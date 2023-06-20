"use client";
import SharedLayout from "@/components/SharedLayout";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../../../../../supabase";
import { useEffect, useState } from "react";
import Image from "next/image";
import useImage from "@/hooks/useImage";
import { useParams } from "next/navigation";
import Loaders from "@/components/Loaders";

const StepsCreate = () => {
  const [step, setSteps] = useState({});
  const [loading, setLoading] = useState(true);
  const { control, register, handleSubmit, reset } = useForm();

  // {
  //   defaultValues: {
  //     title: step[0]?.title,
  //     description: step[0]?.description,
  //     mediaFirst: step[0]?.mediaFirst,
  //     mediaSrc: step[0]?.mediaSrc,
  //     className: step[0]?.className,
  //     endBlock: step[0]?.className,
  //   },
  // }

  const params = useParams();

  const getStep = async () => {
    const { data } = await supabase.from("steps").select().eq("id", params?.id);
    setSteps(data);
    setLoading(false);
  };

  useEffect(() => {
    getStep();
  }, []);

  const deleteImageOnRequest = async (imageName) => {
    await supabase.storage
      .from("staxy_resources")
      .remove([`images/${imageName}`]);

    await supabase
      .from("steps")
      .update({
        mediaSrc: null,
      })
      .eq("mediaSrc", imageName)
      .select();
  };

  const onSubmit = async (data) => {
    alert("Changed data:", data);
    // * First upload image to the storage bucket
    const imageName = data?.mediaSrc[0]?.name;

    if (imageName) {
      await supabase.storage
        .from("staxy_resources")
        .upload(`images/${imageName}`, data?.mediaSrc[0], {
          cacheControl: "3600",
          upsert: false,
        });
    }

    // * If that is successful proceed with making a post request to the steps table
    // todo (data) params loss
    await supabase
      .from("steps")
      .update({
        title: data?.title,
        description: data?.description,
        mediaSrc: imageName,
        mediaFirst: data?.mediaFirst,
        className: data?.className,
        endBlock: data?.endBlock,
      })
      .eq("id", params?.id)
      .select();
    // * Reset form
    reset();
  };

  const imageUrl = useImage(step[0]?.mediaSrc);
  const imageName = step[0]?.mediaSrc;

  const inputClasses = classNames(`w-full min-w-[250px]`);
  const buttonClasses = classNames(
    `w-full p-2 py-3 drop-shadow-md uppercase cursor-pointer min-w-[250px] bg-graphit rounded text-white border-graphit border-solid border-[1px] hover:opacity-75 transition-all`
  );

  return (
    <SharedLayout className="min-h-[100vh] flex justify-center items-center">
      {loading && (
        <Loaders
          className="w-full px-4 max-w-[600px] mx-auto justify-center items-center flex flex-col gap-[10px]"
          loading={loading}
          loaderType="stepsEdit"
        />
      )}
      {!loading && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full px-4 my-48 max-w-[600px] mx-auto justify-center items-center flex flex-col gap-[10px]"
        >
          <TextField
            className={inputClasses}
            {...register("title")}
            defaultValue={step[0]?.title || ""}
            InputLabelProps={{ shrink: step[0]?.title || false }}
            label="Title"
          />
          <TextField
            {...register("description")}
            defaultValue={step[0]?.description || ""}
            InputLabelProps={{ shrink: step[0]?.description || false }}
            className={inputClasses}
            label="Description"
          />
          {!step[0]?.mediaSrc && (
            <input
              type="file"
              label="File Upload"
              {...register("mediaSrc")}
              accept="image/png"
            />
          )}
          {imageUrl.includes("null") && (
            <Typography component="p" className="my-4 font-[100]">
              Record doesn&apos;t have a valid image or not image at all. Use
              field above to upload a new one.
            </Typography>
          )}
          {!imageUrl?.includes("null") && (
            <Box className="relative">
              <Typography
                className="absolute top-[15%] left-[80%] cursor-pointer hover:opacity-[65%] transition-all z-[99] font-black bg-red-400 rounded drop-shadow-lg p-2 min-w-[40px] min-h-[40px] flex justify-center items-center text-red-800"
                component="span"
                onClick={() => deleteImageOnRequest(imageName)}
              >
                X
              </Typography>
              <Image
                className="rounded-[20px] drop-shadow-xl my-8"
                src={imageUrl || ""}
                width={300}
                height={300}
                alt=""
              />
            </Box>
          )}
          <TextField
            select
            {...register("mediaFirst")}
            className={inputClasses}
            defaultValue={step[0]?.mediaFirst || false}
            value={step[0]?.mediaFirst || ""}
            label="Image Order"
          >
            <MenuItem value={true}>Image Goes First</MenuItem>
            <MenuItem value={false}>Image Goes Second</MenuItem>
          </TextField>

          <TextField
            {...register("className")}
            className={inputClasses}
            defaultValue={step[0]?.className || ""}
            InputLabelProps={{ shrink: step[0]?.className || false }}
            label="Custom Class Names"
          />

          <TextField
            select
            {...register("endBlock")}
            className={inputClasses}
            defaultValue={step[0]?.endBlock || false}
            label="End Block"
          >
            <MenuItem value={true}>Block is end block</MenuItem>
            <MenuItem value={false}>Block isn&apos;t end block</MenuItem>
          </TextField>

          <input className={buttonClasses} type="submit" />
        </form>
      )}
    </SharedLayout>
  );
};

export default StepsCreate;

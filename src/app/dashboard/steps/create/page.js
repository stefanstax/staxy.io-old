"use client";
import SharedLayout from "@/components/SharedLayout";
import { MenuItem, Select, TextField } from "@mui/material";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../../../../supabase";

const StepsCreate = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      description: "",
      mediaSrc: "",
      mediaFirst: false,
      className: "",
      endBlock: false,
    },
  });

  const onSubmit = async (data) => {
    const { error } = await supabase
      .from("faq")
      .insert({ question: data?.question, answer: data?.answer });
    reset();
  };

  const inputClasses = classNames(`w-full min-w-[250px]`);
  const buttonClasses = classNames(
    `w-full p-2 py-3 drop-shadow-md uppercase cursor-pointer min-w-[250px] bg-graphit rounded text-white border-graphit border-solid border-[1px] hover:opacity-75 transition-all`
  );

  return (
    <SharedLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-4 max-w-[600px] my-48 mx-auto justify-center items-center flex flex-col gap-[10px]"
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
        <Controller
          name="mediaSrc"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField className={inputClasses} label="Media URL" {...field} />
          )}
        />
        <Controller
          name="mediaFirst"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              className={inputClasses}
              defaultValue="yes"
              label="Image Order"
              {...field}
            >
              <MenuItem value="">Select ...</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          )}
        />
        <input className={buttonClasses} type="submit" />
      </form>
    </SharedLayout>
  );
};

export default StepsCreate;

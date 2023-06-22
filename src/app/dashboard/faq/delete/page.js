"use client";
import SharedLayout from "@/components/SharedLayout";
import { Button, TextField, Typography } from "@mui/material";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../../../../supabase";
import { useEffect, useState } from "react";

const FaqDelete = () => {
  const [faqList, setFaqList] = useState([]);
  const { control, handleSubmit, reset } = useForm();

  async function fetchData() {
    const { data, error } = await supabase.from("faq").select();
    setFaqList(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const removeAction = async (id) => {
    console.log(id);
    await supabase.from("faq").delete().eq("id", id);
  };

  const inputClasses = classNames(`w-full min-w-[250px]`);
  const buttonClasses = classNames(
    `w-full p-2 py-3 drop-shadow-md uppercase cursor-pointer min-w-[250px] bg-graphit rounded text-white border-graphit border-solid border-[1px] hover:opacity-75 transition-all`
  );

  const renderFaq = faqList.map((faq) => {
    return (
      <form
        key={faq?.id}
        // onSubmit={handleSubmit(onSubmit)}
        className="w-full px-4 max-w-[600px] my-32 mx-auto justify-center items-center flex flex-col gap-[20px]"
      >
        <Controller
          name="id"
          label="id"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              className={inputClasses}
              defaultValue={faq?.id}
              disabled
              label="ID"
              {...field}
            />
          )}
        />
        <Controller
          name="question"
          label="Question"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              className={inputClasses}
              defaultValue={faq?.question}
              disabled
              label="Question"
              {...field}
            />
          )}
        />
        <Controller
          name="answer"
          label="Answer"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              className={inputClasses}
              defaultValue={faq?.answer}
              disabled
              label="Answer"
              {...field}
            />
          )}
        />
        <Button className={buttonClasses} onClick={() => removeAction(faq?.id)}>
          Delete
        </Button>
        {/* <input
          className={buttonClasses}
          type="submit"
          onClick={() => handleSubmit(onSubmit)}
        /> */}
      </form>
    );
  });

  return <SharedLayout>{renderFaq}</SharedLayout>;
};

export default FaqDelete;

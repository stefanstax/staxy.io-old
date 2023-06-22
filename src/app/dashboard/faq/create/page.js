"use client";
import SharedLayout from "@/components/SharedLayout";
import { TextField } from "@mui/material";
import classNames from "classnames";
import { useForm, Controller } from "react-hook-form";
import { supabase } from "../../../../../supabase";

const FaqCreate = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      question: "",
      answer: "",
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
        className="w-full px-4 max-w-[600px] my-48 mx-auto justify-center items-center flex flex-col gap-[20px]"
      >
        <Controller
          name="question"
          control={control}
          label="Question"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField className={inputClasses} label="Question" {...field} />
          )}
        />
        <Controller
          name="answer"
          label="Answer"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField className={inputClasses} label="Answer" {...field} />
          )}
        />
        <input className={buttonClasses} type="submit" />
      </form>
    </SharedLayout>
  );
};

export default FaqCreate;

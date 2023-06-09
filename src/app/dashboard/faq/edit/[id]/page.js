"use client";
import SharedLayout from "@/components/SharedLayout";
import { Button, TextField, Typography } from "@mui/material";
import classNames from "classnames";
import { useForm, Controller, get } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../../../../supabase";
import { useParams } from "next/navigation";
import Loaders from "@/components/Loaders";

const Faq = () => {
  const [faq, setFaq] = useState({});
  const [loading, setLoading] = useState(true);
  const { control, handleSubmit, reset } = useForm();
  const params = useParams();
  const getFaq = async () => {
    const { data } = await supabase.from("faq").select().eq("id", params?.id);
    setFaq(data);
    setLoading(false);
  };

  useEffect(() => {
    getFaq();
  }, []);

  const updateFaq = async (data) => {
    await supabase
      .from("faq")
      .update({ question: data?.question, answer: data?.answer })
      .eq("id", params?.id)
      .select();
  };

  const inputClasses = classNames(`w-full min-w-[250px]`);
  const buttonClasses = classNames(
    `w-full p-2 py-3 drop-shadow-md uppercase cursor-pointer min-w-[250px] bg-graphit rounded text-white border-graphit border-solid border-[1px] hover:opacity-75 transition-all`
  );

  return (
    <SharedLayout className="flex justify-center items-center">
      {loading && (
        <Loaders
          loading={loading}
          loaderType="faqEdit"
          className="w-full px-4 max-w-[600px] my-32 mx-auto justify-center items-center flex flex-col gap-[10px]"
        />
      )}
      {!loading && (
        <form
          key={faq[0]?.id}
          onSubmit={handleSubmit(updateFaq)}
          className="w-full px-4 max-w-[600px] my-32 mx-auto justify-center items-center flex flex-col gap-[10px]"
        >
          <Controller
            name="question"
            label="Question"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                className={inputClasses}
                defaultValue={faq[0]?.question}
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
                defaultValue={faq[0]?.answer}
                {...field}
              />
            )}
          />
          <input className={buttonClasses} type="submit" />
        </form>
      )}
    </SharedLayout>
  );
};

export default Faq;

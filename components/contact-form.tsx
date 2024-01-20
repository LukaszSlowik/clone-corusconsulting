"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MyPresentationPopup from "@/components/my-popup/my-presentation-popup";
import { Locale } from "@/i18n.config";
import { DictionaryType } from "@/lib/dictionary";
import { getSchema } from "@/validation";
import { z } from "zod";
type Props = {
  lang: Locale;
  dictionary: DictionaryType;
};

export const ContactForm = ({ dictionary, lang }: Props) => {
  const schema = getSchema(lang);
  type FormValues = z.infer<typeof schema>;
  const [open, setOpen] = React.useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: FormValues) => {
    setOpen(true);
  };
  return (
    <div className="h-full  px-4 py-8 text-dark sm:px-12">
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <div className="h-full ">
        <h2 className="pb-12 font-bold">
          Write us, and we will contact you as soon as possible.
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-4 block h-full w-full space-y-4  pb-20 "
        >
          <div>
            <input
              {...register("name")}
              className="w-full border-b-2  border-b-dark bg-transparent p-2 placeholder:text-dark focus:border-primary focus:outline-none"
              placeholder="Complete name"
              autoComplete="off"
            />
            <div className="text-sm text-red-500">
              {errors.name && <span>{errors.name.message}</span>}
            </div>
          </div>
          <div>
            <input
              {...register("email")}
              className="w-full border-b-2  border-b-dark bg-transparent p-2 placeholder:text-dark focus:border-primary focus:outline-none"
              placeholder="Email"
              autoComplete="off"
            />
            <div className="text-sm text-red-500">
              {errors.email && <span>{errors.email.message}</span>}
            </div>
          </div>
          <div>
            <textarea
              autoComplete="off"
              rows={5}
              {...register("message")}
              className="w-full  border-b-2   border-b-dark bg-transparent p-2 placeholder:text-dark focus:border-primary focus:outline-none"
              placeholder="Message"
            />
            <div className="text-sm text-red-500">
              {errors.message && <span>{errors.message.message}</span>}
            </div>
          </div>

          <button
            className="absolute bottom-0 right-[-10%] bg-primary px-6 py-3 text-white shadow-xl hover:bg-white hover:text-primary sm:right-[-90px]"
            type="submit"
          >
            Send form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

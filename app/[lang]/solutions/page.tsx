import React from "react";

type Props = {};
export const generateStaticParams = async () => {
  const slugs = [{ lang: "en" }, { lang: "es" }];
  return slugs.map((slug) => ({
    lang: slug.lang,
  }));
};
const Page = (props: Props) => {
  return <div>Page</div>;
};

export default Page;

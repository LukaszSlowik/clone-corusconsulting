import React from "react";
import PartnersHeader from "./components/partners-header";
import OtherCollaborators from "./components/OtherCollaborators";
import MainPartners from "./components/main-partners";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="pt-[72px] text-dark">
      <PartnersHeader />
      <MainPartners />
      <OtherCollaborators />
    </div>
  );
};

export default Page;

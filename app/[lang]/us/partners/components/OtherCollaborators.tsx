import Aws from "@/components/svgs/aws";
import Camuda from "@/components/svgs/camuda";
import Celonis from "@/components/svgs/celonis";
import Kubernetes from "@/components/svgs/kubernetes";
import Mongodb from "@/components/svgs/mongodb";
import Mulesoft from "@/components/svgs/mulesoft";
import Redhat from "@/components/svgs/redhat";
import Webmethods from "@/components/svgs/webmethods";
import Image from "next/image";
import React from "react";

type Props = {};

const clients = [
  {
    name: "Mongodb",
    logo: <Mongodb />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Redhat",
    logo: <Redhat />,
    link: "www.redhat.com/",
  },
  {
    name: "Camuda",
    logo: <Camuda />,
    link: "https://camunda.com/",
  },
  {
    name: "Webmethods",
    logo: <Webmethods />,
    link: "https://tech.forums.softwareag.com/",
  },
  {
    name: "Aws",
    logo: <Aws />,
    link: "https://aws.amazon.com/",
  },
  {
    name: "Aris",
    logo: (
      <Image
        alt="Aris"
        src={`/img/logo/aris.png`}
        width={300}
        height={300}
        className="w-full grayscale hover:grayscale-0"
      />
    ),
    link: "https://www.mongodb.com/",
  },
  {
    name: "Celonis",
    logo: <Celonis />,
    link: "https://www.celonis.com/",
  },
  {
    name: "Kubernetes",
    logo: <Kubernetes />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Mulesoft",
    logo: <Mulesoft />,
    link: "https://www.mulesoft.com/",
  },
];

const OtherCollaborators = (props: Props) => {
  return (
    <div className="bg-[#f2faf0]">
      <div className="mx-auto max-w-[1200px] px-4 py-24">
        <h2 className="pb-24 text-4xl">Other collaborators</h2>
        <div className="flex grid-cols-2  flex-wrap justify-center gap-8 md:grid md:grid-cols-3 md:gap-16">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group shrink-0 bg-white  p-6 hover:shadow-cardhistory max-md:w-[44%]"
            >
              <a
                aria-label={client.name}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {client.logo}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherCollaborators;

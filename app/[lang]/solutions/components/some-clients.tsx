import React from "react";

import Image from "next/image";
import { ClientType } from "@/types";
import { DictionaryType } from "@/lib/dictionary";

type Props = {
  clients: ClientType[];
  dictionary: DictionaryType;
};

const SomeClients = ({ clients, dictionary }: Props) => {
  return (
    <div className="bg-[#cbcfc9] text-dark">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 py-12">
        <div className="  max-lg:w-full max-lg:text-center">
          {" "}
          {dictionary["some-clients"]}
        </div>
        {clients.map((client) => (
          <Image
            key={client.alt}
            src={client.icon}
            alt={client.alt}
            width={160}
            height={30}
          />
        ))}
      </div>
    </div>
  );
};

export default SomeClients;

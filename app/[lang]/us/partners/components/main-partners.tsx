import Image from "next/image";
import React from "react";

type Props = {};

const MainPartners = (props: Props) => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex-shrink-0 flex-grow-0 p-4 hover:shadow-cardhistory">
            <a
              aria-label="softwareag"
              href="https://www.softwareag.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority
                src={`/img/logo/softwareag.svg`}
                alt="softwareag"
                width={200}
                height={200}
              />
            </a>
          </div>
          <div className="flex-shrink-0 flex-grow-0 p-4 hover:shadow-cardhistory">
            <a
              aria-label="softwareag"
              href="https://www.uipath.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority
                src={`/img/logo/uipath.svg`}
                alt="uipath"
                width={200}
                height={200}
              />
            </a>
          </div>
          <div className="flex-shrink-0 flex-grow-0 p-4 hover:shadow-cardhistory">
            <a
              aria-label="softwareag"
              href="https://www.snaplogic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                priority
                src={`/img/logo/snaplogic.svg`}
                alt="snaplogic"
                width={200}
                height={200}
              />
            </a>
          </div>
        </div>
        <div className="pt-12">
          <h2 className="text-center text-xl font-bold">
            We partner with some top level entities, with which we collaborate
            in multiple projects and solutions.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainPartners;

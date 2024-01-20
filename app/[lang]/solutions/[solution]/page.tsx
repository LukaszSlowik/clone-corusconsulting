import React from "react";
import TwoColumnsWrapper from "../components/two-columns-wrapper";
import { DictionaryType, getDictionary } from "@/lib/dictionary";
import SolutionFirstPart from "../components/solution-first-part";
import { Locale } from "@/i18n.config";
import IntegrationApi from "../components/svgs/integration-api";
import SolutionSteps from "../components/solution-steps";
import SolutionExperience from "../components/solution-experience";
import SomeClients from "../components/some-clients";
import { solutionsClients } from "@/data/solutions-clients";
import Process from "../components/svgs/process";
import IotAi from "../components/svgs/iot-ai";
import UxUi from "../components/svgs/ux-ui";
import Cms from "../components/svgs/cms";
import Video from "../components/svgs/video";
import Develop from "../components/svgs/develop";
import Qa from "../components/svgs/qa";
import type { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: {
    lang: Locale;
    solution: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale; solution: string };
}): Promise<Metadata> {
  const id = params.solution;
  const idUpperFirst = id.charAt(0).toUpperCase() + id.slice(1);
  return {
    title: `${idUpperFirst} | Clone Corus`,
  };
}

export const generateStaticParams = async () => {
  const slugs = [
    { solution: "integration-api", lang: "en" },
    { solution: "integration-api", lang: "es" },
    { solution: "process", lang: "en" },
    { solution: "process", lang: "es" },
  ];
  return slugs.map((slug) => ({
    solution: slug.solution,
    lang: slug.lang,
  }));
};

const svgs = {
  "integration-api": <IntegrationApi />,
  process: <Process />,
  "iot-ai": <IotAi />,
  ux: <UxUi />,
  cms: <Cms />,
  video: <Video />,
  develop: <Develop />,
  qa: <Qa />,
};

const Page = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="overflow-hidden">
      <SolutionFirstPart
        solution={params.solution}
        dictionary={dictionary}
        svg={svgs[params.solution as keyof typeof svgs]}
      />
      <SolutionSteps
        dictionary={dictionary}
        solution={params.solution as keyof DictionaryType["solutions"]}
      />
      <SolutionExperience
        dictionary={dictionary}
        solution={params.solution as keyof DictionaryType["solutions"]}
      />
      <SomeClients
        dictionary={dictionary}
        clients={
          solutionsClients[params.solution as keyof typeof solutionsClients]
        }
      />
    </div>
  );
};

export default Page;

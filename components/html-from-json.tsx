"use client";
import React, { Fragment } from "react";
import DOMPurify from "dompurify";
import { cn } from "@/lib/utils";

type Props = {
  htmlText: string;
  className?: string;
};

const HtmlFromJson = ({ htmlText, className }: Props) => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  // const isClient = typeof window !== "undefined";
  //if (!isClient) return <div></div>;
  const cleanHTML = DOMPurify.sanitize(htmlText, {});
  //   const reactElements = ReactHtmlParser(cleanHTML, {
  //     transform: (node, index) => {
  //       // You can transform each node here
  //       return convertNodeToElement(node, index, (node, index) => {
  //         // This function is used to convert each html node to a react element
  //         // You can add keys or other props here
  //         return <node.type key={index} {...node.props} />;
  //       });
  //     },
  //   });
  return (
    <div
      className={cn(``, className)}
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
    />
  );
};

export default HtmlFromJson;

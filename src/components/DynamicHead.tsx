import Head from "next/head";
import React from "react";

interface HeadProps {
  title: string;
  name?: string;
  content: string;
}

const DynamicHead = ({ title, name ="description", content }: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={content} />
    </Head>
  );
};

export default DynamicHead;

import React from "react";

const Index = ({ data }) => {
  console.log("props data", data);
  return <div>fvfvfb</div>;
};

export const getStaticPahts = async () => {
  const res = await fetch("http://localhost:3004/tasks");
  const data = await res.json();
  const paths = data.map((data) => {
    return {
      params: { taskId: `${data.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const { params } = context;
  console.log("param id", params.taskId);
  const res = await fetch(`http://localhost:3004/tasks/${params.taskId}`);
  const data = await res.json();
  return {
    props: { data },
  };
};
export default Index;

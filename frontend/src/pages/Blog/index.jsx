import React from "react";

import { useParams } from "react-router-dom";

export default function BlogPage() {
  const { blogId } = useParams();

  function printHi() {
    console.log("Hi");
  }

  function printThere() {
    setTimeout(() => {
      console.log("there");
    }, 500);
  }

  function printIX() {
    console.log("IX");
  }

  printHi();
  printThere();
  printIX();

  return <div>TODO: create the rest of this page</div>;
}

import React from "react";

import Addtodo from "./Components/Addtodo";
import Title from "./Components/Title";
import List from "./Components/List";


export default function App() {
  const todolist=[
    {
      name:"computer",
      desc:"computer is an electronics device",
    },

    {
      name:"software",
      desc:"software is a set of instruction",
    },
  ];

  return (
    <>
      <div className=" container shadow p-3 mb-5 bg-body-tertiary rounded">
        <center>
          <Title />
          <Addtodo />
          <List todolist={todolist}/>
        </center>

      </div> 
      </>
  );
}

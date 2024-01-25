import React from "react";
import Error from "./Error";
import Todoitem from "./Todoitem";

export default function List({todolist}) {
  if(todolist.length===0)
  {
    return (
      <Error/>
    )
  }
  else
  {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="col-2">S.No</th>
            <th className="col-4">Title</th>
            <th className="col-6">Description</th>
          </tr>
        </thead>
        <tbody>
          

          
          {todolist.map((item,index)=>{
            // eslint-disable-next-line react/jsx-key
            return <Todoitem todo={item} indx={index}/>
          })}

        </tbody>
      </table>
    </div>
  );
        }
}

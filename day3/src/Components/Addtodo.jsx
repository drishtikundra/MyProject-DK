import React from "react";

export default function Addtodo() {
  return (
    <div className="pt-4 pb-4">
      <form>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              defaultValue="add date.."
            />
          </div>

          <div className="col-5">
            <input
              type="date"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              defaultValue="add task.."
            />
          </div> 

          <div className="col-2">
          <button type="button" className="btn btn-primary">Select</button>
          </div>
          
        </div>
       
        
      </form>
    </div>
  );
}

import React from "react";

export default function List() {
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
          <tr>
            <th className="col-2">1</th>
            <td className="col-4">Office work</td>
            <td className="col-6">
              <div className="row">
                <div className="col-8">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores, architecto.
                  </p>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-danger">
                    Done
                  </button>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <th className="col-2">2</th>
            <td className="col-4">Groceries</td>
            <td className="col-6">
              <div className="row">
                <div className="col-8">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores, architecto.
                  </p>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-danger">
                    Done
                  </button>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <th className="col-2">3</th>
            <td className="col-4">Laundry</td>
            <td className="col-6">
              <div className="row">
                <div className="col-8">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores, architecto.
                  </p>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-danger">
                    Done
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";
import { reminders } from "./Data";

function App() {
  const [data, setData] = useState(reminders);
  const handleDeleteAll = () => {
    setData([]);
  };
  const handleViewAll = () => {
    setData(reminders);
  };

  return (
    <>
      <div className=" App container text-center">
        <h1 className="text-center p-3 mt-5 display-4 text-light">
          Organize your Day
        </h1>
        <div className="row">
          <div className="col-sm-12 text-light">
            you have{" "}
            <span className="text-danger fw-bold h2">{data.length}</span>{" "}
            appointment
          </div>
        </div>
        <div className="row m-2 p-2">
          <div className="col-sm-12 p-2">
            <table className="table table-light w-100 m-auto">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" className="h4 fw-bold">
                    Reminders
                  </th>
                  <th scope="col" className="h4 fw-bold">
                    Hint
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((el, id) => {
                    return (
                      <tr key={el.id}>
                        <th scope="row" className="text-danger">
                          {el.id}
                        </th>
                        <td>{el.type}</td>
                        <td>{el.hint}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={3} className="text-danger display-6">
                      You don't have any appointment
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <button
              onClick={handleDeleteAll}
              className="btn btn-outline-info btn-light w-75"
            >
              Delete All
            </button>
          </div>
          <div className="col-sm-6">
            <button
              onClick={handleViewAll}
              className="btn btn-outline-info btn-light w-75"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

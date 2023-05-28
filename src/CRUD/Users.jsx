import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import style from "./homecrud.module.css";
import { Link } from "react-router-dom";

const Users = () => {
  let [content, setcontent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/employees") // Get the data from the url
      .then((response) => {
        console.log("Got the Data");
        setcontent(response.data); // Print the data in UI
      })
      .catch(() => {
        console.log("Error");
      });
  }, []); // Empty Dependencies

  let deleteUser = (a) => {
    axios.delete(`http://localhost:3000/employees/${a}`);
    window.location.assign("/users");
  };

  return (
    <div id={style.homePage}>
      {content.map((x) => {
        return (
          <div id={style.card}>
            {/* Creating the Table */}
            <table>
              <tr>
                <th colSpan={2}>EMPLOYEE {x.id}</th>
              </tr>

              <tr>
                <td>NAME:</td> {/*  Row Name */}
                <td>{x.name}</td> {/*  Row Data */}
              </tr>

              <tr>
                <td>SALARY:</td> {/*  Row Name */}
                <td>{x.salary}</td> {/*  Row Data */}
              </tr>

              <tr>
                <td>Company:</td> {/*  Row Name */}
                <td>{x.company}</td> {/*  Row Data */}
              </tr>
            </table>

            {/* Edit and Delete Buttons */}
            <table>
              <tr>
                <td>
                  <Link to={`/edit/${x.id}`}>
                    <button className={style.buttons}>Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className={style.buttons}
                    onClick={() => {
                      deleteUser(x.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

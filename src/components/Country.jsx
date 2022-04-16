import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCountry, getCountry, editCountry } from "../redux/actions";
import { Link } from "react-router-dom";
 import "./country.css";

export const Country = () => {
  const [text, setText] = useState("");
  const [des, setDes] = useState("");

  const country = useSelector((state) => state.country);

  useEffect(() => {
    getCountrys();
  }, []);

  const dispatch = useDispatch();

  const addcountry = () => {
    if (text.length === 0 || des.length === 0) {
      alert("Please provide complete details !!");
    } else {
      fetch("http://localhost:3002/country", {
        method: "POST",
        body: JSON.stringify({ status: false, title: text, description: des }),
        headers: { "Content-Type": "application/json" },
      })
        .then((d) => d.json())
        .then((res) => {
          dispatch(addCountry(res));
          getCountry();
          setText("");
          setDes("");
          alert("Task added successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const editCountrys = (id, status) => {
    let toggleStatus;
    if (status) {
      toggleStatus = false;
    } else {
      toggleStatus = true;
    }
    fetch(`http://localhost:3002/country/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: toggleStatus }),
      headers: { "Content-Type": "application/json" },
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(editCountry(res));
        getCountrys();
        alert("Task updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCountrys = (id) => {
    fetch(`http://localhost:3002/country/${id}`, {
      method: "Delete",
    });
    alert("Task deleted successfully !!");
    getCountrys();
  };

  const getCountrys = () => {
    try {
      fetch("http://localhost:3002/country")
        .then((d) => d.json())
        .then((data) => {
          dispatch(getCountry(data));
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div id="inputDiv">
        <input
          id="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Title"
        />
        <input
          id="input"
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder="Description"
        />

        <button id="addBtn" onClick={addCountry}>
          Add country
        </button>
      </div>
     
      {/* <div className="listDiv">
     
        {country.map((e, i) => {
          return (
            <div className="todoDiv" key={i}>
              <Link className="Link" to={`/country/${e.id}`}>
                <p className="task">✨ {e.title} </p>
              </Link>

              <div className="btnDiv">
                <button
                  onClick={() => {
                    editCountrys(e.id, e.status);
                  }}
                >
                  {e.status === false ? "Not Done" : "Done"}
                </button>
                <Link className="Link" to={`/country/${e.id}/edit`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() => {
                    deleteCountrys(e.id);
                  }}
                >
                  Delete
                </button>
              </div>
              
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
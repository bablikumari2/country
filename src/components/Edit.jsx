

 
 import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getCountry, editCountry } from "../redux/actions";

export const EditCountry = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [des, setDes] = useState("");
  const [stat, setStat] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();

  const getData = () => {
    fetch(`http://localhost:3002/country/${id}`)
      .then((d) => d.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  };

  const editCountrys = (id, text, des, stat) => {
    if (text.length === 0 && des.length === 0 && stat.length === 0) {
      alert("Nothing to Update !!");
    } else {
      if (text.length === 0) {
        text = data.title;
      }
      if (des.length === 0) {
        des = data.description;
      }
      let toggleStatus;

      if (stat.length === 0) {
        toggleStatus = data.status;
      } else {
        let stat1 = stat.toLowerCase();
        if (stat1 === "done") {
          toggleStatus = true;
        } else if (stat1 === "not done") {
          toggleStatus = false;
        } else {
          alert("Status either be done or not done !!");
        }
      }

      fetch(`http://localhost:3002/country/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: text,
          status: toggleStatus,
          description: des,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((d) => d.json())
        .then((res) => {
          dispatch(editCountry(res));
          getData();
          setText("");
          setDes("");
          setStat("");
          alert("Task updated successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div id="mainDiv">
      <div id="infoDiv">
        <p id="title">
          📌 <b> Title : </b> {data.title}
        </p>
        <p id="description">
          ✨ <b> Description : </b> {data.description}
        </p>
        
      </div>

      <div id="form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Country"
        />
        <input
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
          placeholder="City"
        />
        <input
          type="text"
          value={stat}
          onChange={(e) => setStat(e.target.value)}
          placeholder="Status either done or not Done"
        />
        <button
          id="submitBtn"
          onClick={() => {
            editCountrys(id, text, des, stat);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

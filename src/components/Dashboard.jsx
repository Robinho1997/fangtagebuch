import React, { useEffect, useState } from "react";
import { ref, remove, get } from "firebase/database";
import { database } from "../Firebase";
import fishIcon from "/public/fish (1).png";
import "../styles/dashboard.css";
import AddFangForm from "./AddFangForm";

function Dashboard(props) {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  
    if (storedUser) {
      const userId = storedUser.uid;
      const userRef = ref(database, `user/${userId}/data`);
  
      const fetchData = async () => {
        try {
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const fetchedData = snapshot.val();
            const dataArray = Object.values(fetchedData);
            setData(dataArray);
          } else {
            setData([]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }
  }, []);
  
  

  function removeUserEntry(index) {
    const entryToRemove = data[index];
    const entryRef = ref(database, `user/${userId}/data`);

    get(entryRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const dataSnapshot = snapshot.val();
          const dataKeys = Object.keys(dataSnapshot);
          const entryKey = dataKeys[index];

          if (entryKey) {
            const specificEntryRef = ref(
              database,
              `user/${userId}/data/${entryKey}`
            );

            remove(specificEntryRef)
              .then(() => {
                console.log("Entry removed successfully");
              })
              .catch((error) => {
                console.error("Error removing entry:", error);
              });
          } else {
            console.error("Entry key not found");
          }
        } else {
          console.error("Data does not exist");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div className="dashboard-wrapper">
      <AddFangForm user={props.user} />

      {data.map((item, index) => (
        <div className="user-eintrag-wrapper" key={index}>
          <div className="user-eintrag">
            <span
              onClick={() => removeUserEntry(index)}
              className="material-symbols-outlined delete-user-entry-btn"
            >
              do_not_disturb_on
            </span>
            <div className="user-single-item-container">
              <div className="align-logo">
                <img src={fishIcon} className="fish-icon" />
                <p>Fischart:</p>
              </div>
              <p>{item.fischart}</p>
            </div>
            <div className="user-single-item-container">
              <div className="align-logo">
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
                <p>Datum:</p>
              </div>
              <p>{item.datum}</p>
            </div>
            <div className="user-single-item-container">
              <div className="align-logo">
                <span className="material-symbols-outlined">width</span>
                <p>Größe:</p>{" "}
              </div>
              <p>{item.größe} cm</p>
            </div>
            <div className="user-single-item-container">
              <div className="align-logo">
                <span className="material-symbols-outlined">phishing</span>
                <p>Köder:</p>
              </div>
              <p>{item.köder}</p>
            </div>
            <div className="user-single-item-container">
              <div className="align-logo">
                <span className="material-symbols-outlined">schedule</span>
                <p>Uhrzeit:</p>{" "}
              </div>
              <p>{item.uhrzeit} Uhr</p>
            </div>
            <div className="user-single-item-container">
              <div className="align-logo">
                <span className="material-symbols-outlined">location_on</span>
                <p>Gewässer:</p>{" "}
              </div>
              <p>{item.gewässer}</p>
            </div>
          </div>
          <img className="user-img" src={item.imgUrl} />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import { onValue, ref, remove } from "firebase/database";
import { nanoid } from 'nanoid'
import { database,fängeInDB } from "../Firebase";



function Fänge() {
    const [fetchedFänge, setFetchedFänge] = useState();

    function removeFangFromDB(key) {
        let exactLocationOfItemInDB = ref(database, `fänge/${key}`);
        remove(exactLocationOfItemInDB);
    }

    useEffect(() => {
        onValue(fängeInDB, function (snapshot) {
            if (snapshot.exists()) {
                let itemsArray = Object.values(snapshot.val())

                let elements = itemsArray.map((item, index) => {
                    let { fischart, datum, gewässer, größe, imageUrl, köder, uhrzeit } = item;
                    let itemKey = Object.keys(snapshot.val())[index]

                    return <div key={nanoid()} style={{ position: "relative" }}>
                        <div id="div-remove-btn" style={{ borderTop: "none" }}>
                            <button onClick={() => removeFangFromDB(itemKey)} id="remove-item-from-db-btn">
                                <span className="material-symbols-outlined">
                                    cancel
                                </span>
                            </button>
                        </div>
                        <div className="fänge-div" key={index}>
                            <div >
                                <img src="/fish (1).png" style={{ width: "20px" }} />
                                {fischart}
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    calendar_month
                                </span>
                                {datum}
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    schedule
                                </span>{uhrzeit} Uhr
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    location_on
                                </span>{gewässer}
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    width
                                </span>{größe} cm
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    phishing
                                </span>{köder}
                            </div>
                            {imageUrl && <img className="fang-img" src={imageUrl} style={{ marginTop: "20px" }} />}
                        </div>
                    </div>

                })
                setFetchedFänge(elements);
            } else {
                setFetchedFänge([]);
            }
        })
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
            {fetchedFänge}
        </div>
    );
}

export default Fänge;
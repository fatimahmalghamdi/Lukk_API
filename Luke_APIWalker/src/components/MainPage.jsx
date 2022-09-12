import React, { useState } from "react";
import Data from './Data';
import { useHistory } from "react-router-dom";

const MainPage = () => {
    const [data, setData] = useState({ data_type: "", SelectedId: "" });
    const [id, setId] = useState("");
    const [options, setOptions] = useState(["people", "planets"]);

    const [fetchedData, setFetchedData] = useState({});
    const [selectionList, setSelectionList] = useState("people");
    
    const history = useHistory(); 

    function handleSubmit(event) { 
        event.preventDefault();
        //get the data from API:
        fetch(`https://swapi.dev/api/${selectionList}/${id}/?format=json`)
            .then((res) => res.json())
            .then((data) => {
                setFetchedData(data)
                setData({ ...data, data_type: selectionList })
            })
            .catch((err) => {
                history.push("/error");
            })
        if (id == "") {
            history.push("/error");
        } else {
            //to display name and id
            history.push(`/${selectionList}/${id}`);
        }
    }
        return (
            <div className="container" style={{margin: "auto", width: "1000px"}}>
                <form onSubmit={handleSubmit}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div style={{margin: "10px"}}>
                            <label>Search for:</label>
                            <select name="selectionList" onChange={(e) => setSelectionList(e.target.value)}>
                                {options.map((mySelectedDataType) => (
                                    <option key={mySelectedDataType}>{mySelectedDataType}</option>
                                ))}
                            </select>
                        </div>
                        <div style={{margin: "10px"}}>
                            <label>ID</label>
                            <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                            <input type="submit" value="search" />
                        </div>
                    </div>
                </form>

                <div style={{marginLeft: "260px"}}>
                    {fetchedData.name != undefined && (
                        <Data fetchData={fetchedData} selectionList={selectionList} />
                    )}
                </div>
            </div>


        );
    };

export default MainPage;



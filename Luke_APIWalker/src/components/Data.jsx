import React, { Component, useState } from "react";
// import { useEffect } from 'react';


const People = ({fetchData}) => (
    <div>
        <h3 style={{color: "blue", fontFamily: "cursive"}}>{fetchData.name}</h3>
        <p>Height :{fetchData.height}</p>
        <p>Mass :{fetchData.mass}</p>
        <p>Hair Color :{fetchData.hair_color}</p>
        <p>Skin Color :{fetchData.skin_color}</p>
        <p>HomeWorld :{fetchData.homeworld}</p>
        <p>HomeWorld :<a herf={fetchData.homeWorldId}>{fetchData.name}</a></p>
        <p>More: <a her={fetchData.url}>Learn More..</a></p>
    </div>

) 

const Planet = ({fetchData}) => {
    return(
        <div>
            <h3 style={{color: "blue", fontFamily: "cursive"}}>{fetchData.name}</h3>
            <p>Rotation Period :{fetchData.rotation_period}</p>
            <p>Orbital Period :{fetchData.orbital_period}</p>
            <p>Diameter :{fetchData.diameter}</p>
            <p>Climate :{fetchData.climate}</p>
            <p>More :<a herf={fetchData.url}>Learn More..</a></p>
        </div>
    )
}

const Data = ({fetchData, selectionList}) => {
    if(selectionList == 'people'){
        return <People fetchData={fetchData}/>
    }else {
        return <Planet fetchData={fetchData}/>
    }
};

export default Data;
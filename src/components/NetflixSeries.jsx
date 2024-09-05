import React from "react";
import seriesData from "../api/series.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
    return (
        <ul
            className="grid grid-four--cols"
        >
            {
                seriesData.topNetflixSeries.map((curEl) => (<SeriesCard data={curEl}/>))
            }
        </ul>
    )
};

export default NetflixSeries;

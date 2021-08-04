import React from "react" ; 
import { Bar} from "react-chartjs-2" ; 
import { Wrapper } from "./ProblemRating.styles" ; 
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);
const ProblemRating = ({ ratingData}) => {

    if(ratingData){
    return <Wrapper><Bar 
    data = {{
        labels : Object.keys(ratingData) , 
        datasets : [
            {
                label : "Problem Rating" , 
                data : Object.values(ratingData) , 
                borderColor : ['rgba(0,0,0,0.5)'] , 
                borderWidth : 1
            }
        ]

    }}
    options =  {{
    responsive: true ,
    maintainAspectRatio: false ,
    plugins : {
        zoom : {
            pan :{
                enabled : true , 
                mode : "x" , 
                speed : 10 
            } , 
            zoom: {
            wheel: {
                enabled: true,
            },
            pinch: {
                enabled: true
            },
            mode: 'x',
        }
      }
    }
    }

}

    // width = {100}  
    // height = {50}
    // options = {{ maintainAspectRatio: false }} 

    /></Wrapper> } 
   else {
    return <div>Rating bar graph </div>
   }
}

export default ProblemRating ; 
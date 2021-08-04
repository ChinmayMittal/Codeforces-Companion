import React from "react" ; 

import { Doughnut , HorizontalBar} from "react-chartjs-2";

import { Wrapper } from "./Verdict.styles" ; 
const Verdict = ({verdictData}) => {
    console.log(verdictData) ; 
    return <Wrapper><Doughnut
        data = {{
            labels : Object.keys(verdictData) , 
            datasets : [{
                label : "Verdict" , 
                data : Object.values(verdictData) , 
                backgroundColor: [
                'rgb( 0 , 265, 0 )',
                'rgb(54, 162, 235)',
                'rgb(255, 0, 0 )' , 
                'rgb(255, 153, 0)' , 
                'rgb(255, 102, 0)' , 
                'rgb(204, 51, 0)' , 
                 'rgb(153, 0, 51)' , 
                 'rgb( 0 , 0 , 256)' , 
                 'rgb(255, 204, 0)' , 
                 'rgb( 0 , 0 , 0)'
                ],
            }]
}}   
        options = {{
            responsive: false ,
            maintainAspectRatio: true ,
            plugins : {
                legend : {
                display : true ,
                align : 'start' , 
                position : 'right' , 
                }
    }
        }} /></Wrapper>
}

export default Verdict ; 
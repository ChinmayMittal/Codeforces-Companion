import React from "react" ; 
import {Wrapper} from "./Language.styles" ; 

import {Bar} from "react-chartjs-2" ; 
const Language = ({data}) => {
    return <Wrapper>
    <Bar
        data = {{
        labels : Object.keys(data) , 
        datasets : [
            {
                axis: 'y' , 
                label : "Languages" , 
                data : Object.values(data) , 
                backgroundColor : [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
                ] , 
                borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
                 ],
                borderWidth : 1
            }
        ]

    }}
    options = { {
    indexAxis: 'y',
    scales : {
        xAxes : [{
            barPercentage : 0.4
        }]
    }
  } } 
    />
    </Wrapper>
}

export default Language ; 
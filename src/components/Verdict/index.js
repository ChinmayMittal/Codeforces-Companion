import React, { useEffect , useState } from "react" ; 

import { Doughnut , HorizontalBar} from "react-chartjs-2";
import {Chart} from "react-google-charts" ; 

import { Wrapper } from "./Verdict.styles" ;
const data = [
    ["Age", "Weight"],
    ["8", 12],
    ["4", 5.5],
  ]; 
const Verdict = ({verdictData , handle}) => {
    // console.log(verdictData) ; 
//     const [data , setData] = useState([["Verdicts" , "Number"]]) ;

//     useEffect(()=>{
//         const temp = [] ; 
//         for (const key in verdictData) {
//             temp.push([key , verdictData[key]]) ; 
//         } 
//         setData(temp) ; 
//         console.log(data) ; 
//     } , [verdictData]) ;  
// // //     return <Wrapper><Doughnut
//         data = {{
//             labels : Object.keys(verdictData) , 
//             datasets : [{
//                 label : "Verdict" , 
//                 data : Object.values(verdictData) , 
//                 backgroundColor: [
//                 'rgb( 0 , 265, 0 )',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 0, 0 )' , 
//                 'rgb(255, 153, 0)' , 
//                 'rgb(255, 102, 0)' , 
//                 'rgb(204, 51, 0)' , 
//                  'rgb(153, 0, 51)' , 
//                  'rgb( 0 , 0 , 256)' , 
//                  'rgb(255, 204, 0)' , 
//                  'rgb( 0 , 0 , 0)'
//                 ],
//             }]
// }}   
//         options = {{
//             responsive: true  ,
//             maintainAspectRatio: false,
//             plugins : {
//                 legend : {
//                 display : false ,
//                 // align : 'start' , 
//                 // position : 'right' , 
//                 }
//     }
//         }} /></Wrapper>
return <Wrapper>
       <Chart
         width={'100%'}
         height={'100%'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={verdictData}
            options={{
                title: 'Verdicts of '+ handle,
                // Just add this option
                legend : "none" , 
                colors :[
                    '#00ff00',
                    '#36a2eb',
                    '#ff0000',
                    '#ff9900',
                    '#ff6600' , 
                    '#cc3300' , 
                    '#990033' , 
                    '#0000ff' , 
                    '#ffcc00' , 
                    '#000000'


                ] , 
                chartArea : {
                    height : "90%" ,
                    width : "90%"
                } , 
                is3D: true,
            }}
       />
        </Wrapper>
}

export default Verdict ; 
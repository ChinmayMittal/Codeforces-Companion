import React from "react";

import {Wrapper} from "./ContestInfo.styles" ; 

const ContestInfo = ({data ,handle}) => {
    console.log(data) ; 
    return <Wrapper>
             {/* <div><div>{`Contest Data of ${handle}`}</div><div></div></div> */}
             <table>
              <thead>
              <tr>
               <th>Contest Data of </th>
               <th>{handle}</th>
              </tr>
              </thead>
              <tbody>
               <tr>
                <td>Number of Contests</td>
                <td>{data.numberOfContests}</td>
               </tr>
               <tr>
                <td>Max Up</td>
                <td>{data.maxUp}</td>
               </tr>
               <tr>
                <td>Max Down</td>
                <td>{data.maxDown}</td>
               </tr>
               <tr>
                <td>Best Rank</td>
                <td>{data.bestRank}</td>
               </tr>
               <tr>
                <td>Worst Rank</td>
                <td>{data.worstRank}</td>
               </tr>
               <tr>
                <td></td>
                <td></td>
               </tr>
              </tbody>
             </table>    
        </Wrapper>
}

export default ContestInfo ; 
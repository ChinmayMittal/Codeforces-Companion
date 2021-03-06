import React, { useEffect, useState , useRef } from "react" ; 
import Header from "./Header" ; 
import SearchBar from "./SearchBar" ; 
import NoUser from "./NoUser" ; 
import User from "./User" ; 
import ProblemRating from "./ProblemRating"
import {fetchUserInfo , fetchSubmissionInfo , fetchContestInfo } from "../API.js" ; 
import { submissionHandler} from "./submissionUtility" ; 
import { contestHandler} from "./contestUtility" ; 
import {dataHandle} from "./Verdict/dataUtility" ; 
import colourUtility from "./colourUtility";
import Tags from "./Tags" ; 
import Verdict from "./Verdict" ; 
import Spinner from "./Spinner" ; 
import Language from "./Language" ; 
import ContestInfo from "./ContestInfo" ; 
import {InfoWrapper} from "./Home.styles"

function Home(){
    const [ handle , setHandle ] = useState("") ; 
    const [ state , setState ] = useState() ;
    const [ validHandle , setValidHandle ] = useState(false) ;  
    const [ submissionInfo , setSubmissionInfo ] = useState() ; 
    const [ ratingData , setRatingData ] = useState() ;  
    const [verdictData , setVerdictData ] = useState() ;
    const [loading , setLoading ] = useState(false) ;  
    const [ contestData , setContestData ] = useState() ; 
    const getUserData  = async (handle) => { 
      setLoading(true) ; 
      // setValidHandle(true); 
      const data =  await fetchUserInfo(handle) ;
      setLoading(false) ; 
      if(data.result === "not found"){
         setValidHandle(false) ; 
      }else{
         setValidHandle(true) ; 
         setState(data) ; 
         const submissionData = await fetchSubmissionInfo(handle) ; 
         const temp = submissionHandler(submissionData.result) ;
         setSubmissionInfo(temp) ;  
         setRatingData(temp.rating) ;  
         setVerdictData(dataHandle(temp.verdict)) ; 
        //  setVerdictData(temp.verdict) ; 
         let tempContestData = await fetchContestInfo(handle)  ; 
         tempContestData = contestHandler(tempContestData.result) ; 
         setContestData(tempContestData) ;  
        //  console.log(tempContestData)  ;
        //  console.log(dataHandle(temp.verdict)) ; 
        //  console.log(temp.languages) ; 
        //  console.log(submissionInfo.problem_index) ; 
        //  console.log(temp.tag_info) ; 
      }
 
    }
    // getting current user Data
    useEffect(()=>{
        getUserData(handle) ; 
    } , [handle])

    return <>
            <Header/>
            <SearchBar setHandle={setHandle}/>
            { !validHandle && handle && !loading&&<NoUser />}
            { loading && <Spinner/>}
            { validHandle && handle && state && Array.isArray(state.result) && <User user = {state.result[0]}/>}
            { validHandle  && submissionInfo && <ProblemRating ratingData={ratingData} colour = {colourUtility(state.result[0].rank)} />}
            { validHandle  && submissionInfo && <ProblemRating ratingData={submissionInfo.problem_index} colour = {colourUtility(state.result[0].rank)}/>}
            <InfoWrapper>
            { validHandle && submissionInfo && <Verdict verdictData={dataHandle(submissionInfo.verdict , "Verdict" , "Number")} handle={handle}/>}
            { validHandle && submissionInfo && <Language data={dataHandle(submissionInfo.languages , "Languages" , "Number")} handle={handle}/>}
            </InfoWrapper>
            { validHandle && submissionInfo && <Tags tagsData={dataHandle(submissionInfo.tag_info , "Tags" , "Number")} handle={handle} />}
            <InfoWrapper>
            { validHandle && contestData && <ContestInfo data={contestData} handle={handle} />}
            </InfoWrapper>
        </>
}

export default Home ; 
import React, { useEffect, useState , useRef } from "react" ; 
import Header from "./Header" ; 
import SearchBar from "./SearchBar" ; 
import NoUser from "./NoUser" ; 
import User from "./User" ; 
import ProblemRating from "./ProblemRating"
import {fetchUserInfo , fetchContestInfo } from "../API.js" ; 
import { submissionHandler} from "./submissionUtility" ; 
import Tags from "./Tags" ; 
import Verdict from "./Verdict" ; 
import Spinner from "./Spinner" ; 
import Language from "./Language" ; 
function Home(){
    const [ handle , setHandle ] = useState("") ; 
    const [ state , setState ] = useState() ;
    const [ validHandle , setValidHandle ] = useState(false) ;  
    const [ submissionInfo , setSubmissionInfo ] = useState() ; 
    const [ ratingData , setRatingData ] = useState() ;  
    const [verdictData , setVerdictData ] = useState() ;
    const [loading , setLoading ] = useState(false) ;  
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
         const submissionData = await fetchContestInfo(handle) ; 
         //console.log(submissionData) ; 
         const temp = submissionHandler(submissionData.result) ;
         setSubmissionInfo(temp) ;  
         setRatingData(temp.rating) ;  
         setVerdictData(temp.verdict) ; 
        //  console.log(verdictData) ; 
         console.log(temp.languages) ; 
        //  console.log(submissionInfo.problem_index) ; 
        //  console.log(submissionInfo) ; 
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
            { validHandle  && submissionInfo && <ProblemRating ratingData={ratingData} />}
            { validHandle  && submissionInfo && <ProblemRating ratingData={submissionInfo.problem_index} />}
            { validHandle && submissionInfo && <Verdict verdictData={submissionInfo.verdict} />}
            { validHandle && submissionInfo && <Tags tagsData={submissionInfo.tag_info} />}
            { validHandle && submissionInfo && <Language data={submissionInfo.languages} />}
        </>
}

export default Home ; 
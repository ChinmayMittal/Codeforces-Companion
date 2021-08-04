export const submissionHandler = ( submissions ) => {
    let verdict = {
        "OK"  : 0 , 
        "REJECTED"  : 0 , 
        "WRONG_ANSWER"  : 0 , 
        "TIME_LIMIT_EXCEEDED"  : 0 , 
        "MEMORY_LIMIT_EXCEEDED"  : 0 , 
        "RUNTIME_ERROR"  : 0 , 
        "COMPILATION_ERROR"  : 0 , 
        "OK"  : 0 , 
    } ; 
    let tag_info = {} ; 
    let rating = {} ; 
    let languages = {} ; 

    if (submissions ){
    submissions.forEach( ( submission ) => {
        if ( verdict.hasOwnProperty( submission.verdict ) ) {
            verdict[submission.verdict] +=1 ; 
        }else{
            verdict[ submission.verdict ] = 1 ; 
        }
        if( submission.verdict === "OK"){
            if( rating.hasOwnProperty( submission.problem.rating) ){
                rating[submission.problem.rating] += 1 ; 
            }else if(submission.problem.rating){
                rating[ submission.problem.rating ] = 1 ; 
            }
            submission.problem.tags.forEach( tag => {
                if( tag_info.hasOwnProperty(tag)){
                    tag_info[tag] += 1 ; 
                } else{
                    tag_info[tag] = 1 ; 
                }
            })
            if( languages.hasOwnProperty( submission.programmingLanguage )){
                languages[submission.programmingLanguage] += 1 ; 
            }else{
                languages[submission.programmingLanguage] = 1 ; 
            }

        }
    }) ;} 
    Object.keys(tag_info).forEach( oldKey =>{
        tag_info[oldKey + "|" + tag_info[oldKey]] = tag_info[oldKey] ;
        delete tag_info[oldKey] ; 
    }
    ) ; 
    Object.keys(verdict).forEach( oldKey =>{
        verdict[oldKey + "|" + verdict[oldKey]] = verdict[oldKey] ;
        delete verdict[oldKey] ; 
    }
    ) ; 
    return { verdict , tag_info , rating , languages } ; 
        
}
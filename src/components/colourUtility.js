function colourUtility(rank){

    switch( rank ){
        case undefined:
            return  'rgba(0,0,0,0.5)' ; 
        case "expert" :
            return 'rgba( 0 , 0 , 255 , 0.5)'
        case "specialist" : 
            return 'rgba( 0 , 255 , 255 , 0.5)'
        case "master" : 
            return "rgba( 255 , 165 , 0 , 0.5)"
        case "pupil" :
            return 'rgba( 0 , 255 , 0 , 0.5)'
        case "candidate master" : 
            return 'rgba( 56.1 , 0 , 100 , 0.5)'
        case "international master" : 
            return 'rgb(230,138,0,0.5)' ; 
        case "grandmaster":
            return 'rgba(255,26,26)'
        case "international grandmaster" : return 'rgba( 255 , 26, 26)' ;
        case "legendary grandmaster" : return 'rgba(153 , 0, 0)' ;  
    }

    return  'rgba(0,0,0,0.5)' ;  
}

module.exports = colourUtility;
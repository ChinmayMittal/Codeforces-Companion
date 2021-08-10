export const  contestHandler = (data) => {
    const numberOfContests = data.length ; 
    const rankings = [0,] ; 
    let maxUp = 0 ; 
    let maxDown = 0 ; 
    let bestRank = (data.length === 0 ? undefined : data[0].rank) ; 
    let worstRank = (data.length === 0 ? undefined : data[0].rank) ; 
    data.forEach( contestData => {
        rankings.push(contestData.newRating) ; 
        if(contestData.newRating - contestData.oldRating > maxUp) {
            maxUp = contestData.newRating - contestData.oldRating ; 
        }
        if(contestData.oldRating - contestData.newRating > maxDown) {
            maxDown = contestData.oldRating - contestData.newRating ; 
        }
        if(contestData.rank > worstRank) {
            worstRank = contestData.rank ; 
        }
        if( contestData.rank < bestRank){
            bestRank = contestData.rank ; 
        }
    }) ; 
    // console.log(data) ; 
    return { rankings , numberOfContests , maxDown , maxUp ,bestRank , worstRank } ; 
}
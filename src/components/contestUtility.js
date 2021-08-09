export const  contestHandler = (data) => {
    const numberOfContests = data.length ; 
    const rankings = [0,] ; 
    let maxUp = 0 ; 
    let maxDown = 0 ; 
    data.forEach( contestData => {
        rankings.push(contestData.newRating) ; 
        if(contestData.newRating - contestData.oldRating > maxUp) {
            maxUp = contestData.newRating - contestData.oldRating ; 
        }
        if(contestData.oldRating - contestData.newRating > maxDown) {
            maxDown = contestData.oldRating - contestData.newRating ; 
        }
    }) ; 
    // console.log(data) ; 
    return { rankings , numberOfContests , maxDown , maxUp } ; 
}
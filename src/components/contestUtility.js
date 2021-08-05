export const  contestHandler = (data) => {
    const numberOfContests = data.length ; 
    const rankings = [0,] ; 
    data.forEach( contestData => {
        rankings.push(contestData.newRating) ; 
    }) ; 
    // console.log(data) ; 
    return { rankings , numberOfContests} ; 
}
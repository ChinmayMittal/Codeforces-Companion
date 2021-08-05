export const dataHandle = (verdictData) => {
    const temp = [["Verdict" , "Number"]];
    for( const key in verdictData ) {
        temp.push([key , verdictData[key]]);
    }
    return temp ; 
}
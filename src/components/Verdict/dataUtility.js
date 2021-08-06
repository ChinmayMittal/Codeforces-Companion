export const dataHandle = (verdictData , first , second) => {
    const temp = [[first , second]];
    for( const key in verdictData ) {
        temp.push([key , verdictData[key]]);
    }
    return temp ; 
}

 
import { createGlobalStyle  } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root{
    --maxWidth: 1280px ; 
    --white : #fff ; 
    --lightGrey : #eee ; 
    --medGrey : #353535 ; 
    --darkGrey : #1c1c1c ; 
    --fontSuperBig : 2.5rem ; 
    --fontBig : 1.5rem ; 
    --fontMid : 1.2rem ; 
    --fontSmall : 1rem ; 
 }
body{
    margin : 0 ;
    padding : 0 ; 
    font-family : 'Ubuntu' , sans-serif ; 
    background-color : var(--lightGrey) ; 

}
.expert{
    color : blue ; 
}
.newbie{
    color : gray ; 
}
.pupil{
    color : green ; 
}
.specialist{
    color : cyan ; 
}
.candidatemaster{
    color : #990099 ; 
}
.master{
    color : orange ; 
}
.internationalmaster{
    color : #e68a00 ; 
}
.grandmaster{
    color :  #ff1a1a ; 
}
.internationalgrandmaster{
   color :  #ff1a1a ; 
}
.legendarygrandmaster{
   color :  #990000 ; 
}

` ; 
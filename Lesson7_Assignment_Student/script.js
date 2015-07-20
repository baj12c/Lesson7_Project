/**
Program Name: Recipe Display Application

Author:  Brooke Jenkins

Date: July 17th, 2015

Filename: script.js 

*/

function display(event){
    
 $(event.currentTarget).next().fadeIn( "slow" );   
    
}//end of display()

$( "h3" ).click(display);
/**Problem Statement: UC1 Demonstrate Async nature of JavaScript
- Note: It is similar to Main thread
invoking another Activity which are
processed by child Thread.
- Run the JS code using Node Compiler */

function showTime(){
    const date =new Date();
    return date.getHours()+"Hours:"+date.getMinutes() + "Minutes:"+date.getSeconds()+"Seconds";
}
function showSessionExpire(){
    console.log("Activity-B:your session expired at "+showTime());

}
console.log("Activity-A: Trigerring Activity-B at "+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity-A:Trigerred Activity-B at "+showTime()+"will execute after 5seconds");
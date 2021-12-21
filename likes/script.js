// click = 3;
// function clickHandler(){
//     click++
//     console.log(`${click} like(s)`)
//     var countClicks = document.querySelector("#countClicks")
//     countClicks.innertext = `${click} like(s)`
// }

// Apparently you can't put camelCase in a dot format

click = 3
function clickHandler(){
    click++;
    console.log(click, " like(s)")
    var countlike = document.querySelector("#countClicks")
    countlike.innerText = `${click} like(s)` 
}

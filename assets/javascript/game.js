
// TODO 1: team1 shots taken needs to increse every time team1 shoot button is  clicked
let teamOneShotCount = document.querySelector ("#teamone-numshots")
let teamOneShootButton = document.querySelector("#teamone-shoot-button")
let teamOneGoalCount = document.querySelector("#teamone-numgoals")

teamOneShootButton.addEventListener("click",function() {

        
    let currentTeamOneShotCount = Number (teamOneShotCount.innerHTML)
    let newShotCount = currentTeamOneShotCount + 1
    teamOneShotCount.innerHTML=newShotCount    
    let randomNumberVar = Math.random()
    console.log(randomNumberVar);
    if (randomNumberVar > .5) {
        let currentTeamOneGoalCount = Number (teamOneGoalCount.innerHTML)
        let newTeamOneGoalCount = currentTeamOneGoalCount + 1
        teamOneGoalCount.innerHTML=newTeamOneGoalCount
        
    } else {
        
    } 


}
)

// TODO 2: Team2 shots taken needs to increse every time Team2 shoot button is  clicked
let teamTwoShotCount = document.querySelector ("#teamtwo-numshots")
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamTwoGoalCount = document.querySelector("#teamtwo-numgoals")

teamTwoShootButton.addEventListener("click",function() {

    let currentTeamTwoShotCount = Number (teamTwoShotCount.innerHTML)
    let newShotCount = currentTeamTwoShotCount + 1
    teamTwoShotCount.innerHTML=newShotCount 

// TODO 3: Give shots a random chance of succeeding
// If the generated random number is greater than .5, then increment goals by 1
// othewise do nothing


    let randomNumberVar = Math.random()
    console.log(randomNumberVar);
    if (randomNumberVar > .5) {
        let currentTeamTwoGoalCount = Number (teamTwoGoalCount.innerHTML)
        let newTeamTwoGoalCount = currentTeamTwoGoalCount + 1
        teamTwoGoalCount.innerHTML=newTeamTwoGoalCount
        
    } else {
        
    } 
}
)

let ResetButton = document.querySelector("#reset-button")
let NumberofResets = document.querySelector("#num-resets")
console.log(NumberofResets)


ResetButton.addEventListener("click",function(){
    teamOneGoalCount.innerHTML= 0
    teamTwoGoalCount.innerHTML= 0
    teamOneShotCount.innerHTML = 0
    teamTwoShotCount.innerHTML = 0
    let currentNumberofResets = Number (NumberofResets.innerHTML)
    
    NumberofResets.innerHTML = currentNumberofResets + 1
})
  
 



    





/*
<button id="reset-button">RESET</button><br>
            NUMBER OF RESETS: <span id="num-resets">0</span>

            */














//DOM Elements
const dropDownGoals = document.getElementById("dropDownGoals")
const dropDownActivities = document.getElementById("dropDownActivities")
const dropDownProgress = document.getElementById("dropDownProgress")
const memberPageWrapper = document.getElementById("memberPageWrapper")


const dropDownGoalsContent = document.getElementById("dropDownGoalsContent")
const dropDownActivitiesContent = document.getElementById("dropDownActivitiesContent")
const dropDownProgressContent = document.getElementById("dropDownProgressContent")

const membersBtn = document.getElementById("membersBtn")
const memberPage1 = document.getElementById("memberPage1")
const memberPage2 = document.getElementById("memberPage2")
//Vissions Content
dropDownGoals.addEventListener("click", () => {
    if (!dropDownGoalsContent.classList.contains("hidden")) {
        dropDownGoalsContent.classList.add("hidden");
    } else {
        dropDownGoalsContent.classList.remove("hidden");
    }
    
})

dropDownActivities.addEventListener("click", () => {
    if (!dropDownActivitiesContent.classList.contains("hidden")) {
        dropDownActivitiesContent.classList.add("hidden");
    } else {
        dropDownActivitiesContent.classList.remove("hidden");
    }
})

dropDownProgress.addEventListener("click", () => {
    if (!dropDownProgressContent.classList.contains("hidden")) {
        dropDownProgressContent.classList.add("hidden");
    } else {
        dropDownProgressContent.classList.remove("hidden");
    }
})

//Members Content
// membersBtn.addEventListener("click", () => {
//     console.log("clicked")
//     memberPage1.classList.toggle("hidden"); 
//     memberPage2.classList.toggle("hidden");
// })

membersBtn.addEventListener("click", () => {
    memberPage1.classList.toggle("slide");
    memberPage2.classList.toggle("slide");
})



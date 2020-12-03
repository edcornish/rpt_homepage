dot_1 = document.querySelector(".dot_1")
dot_2 = document.querySelector(".dot_2")
dot_3 = document.querySelector(".dot_3")
background = document.querySelector(".dotsContainer")
conditions = document.querySelector(".conditions")

conditionsList = ["abuse", "addiction", "anxiety", "bullying", "discrimination", "illness", "depression", "family issues", "grief", "low self-confidence", "relationship problems", "sexual problems", "trauma"]
counter = 0

blurAmount = 30
offset = 15
opacity = 0.15

document.addEventListener("mousemove", function (event){

    const x = event.pageX
    const y = event.pageY
    
    const backgroundCoords = background.getBoundingClientRect()
    const backgroundX = backgroundCoords.left + (background.offsetWidth / 2)
    const backgroundY = backgroundCoords.top + (background.offsetHeight / 2)

    const offsetX = (backgroundX - x) / 25
    const offsetY = (backgroundY - y) / 25

    dot_1.style.boxShadow = "inset "+ (offsetX-offset) +"px "+ offsetY +"px "+ blurAmount +"px rgba(0, 0, 0, "+ opacity +")";
    dot_2.style.boxShadow = "inset "+ offsetX +"px "+ offsetY +"px "+ blurAmount +"px rgba(0, 0, 0, "+ opacity +")";
    dot_3.style.boxShadow = "inset "+ (offsetX+offset) +"px "+ offsetY +"px "+ blurAmount +"px rgba(0, 0, 0, "+ opacity +")";
})

// Every two seconds, run this function
setInterval(function () {
    
    // Fade-out the tecountert by adding a CSS class
    conditions.classList.add("fadeOut")

    // Wait 500ms (time it takes for CSS class to fade-out tecountert)
    setTimeout(function() {
        
        // Change the HTML tecountert to the counter position in the array
        conditions.innerHTML=conditionsList[counter]
        
        // Move counter along by one
        counter++
        
        // Remove the fadeOut class. and bring the tecountert back in
        conditions.classList.remove("fadeOut")

        // Reset counter to 0 once it's worked through the entire list
        if (counter > conditionsList.length-1) {
            counter = 0
        }

    }, 500)

}, 2000);


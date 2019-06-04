// secondary fact variables 
let factOneJs = "87% of trips on public transit have a direct impact on the local economy."
let factTwoJs = "A person can reduce their chances of being in an accident by more than 90% by taking public transit instead of commuting by car."
let factThreeJs = "Over two-thirds of people who ride public transit walk to their stop or station."


// functions: text in the body of statistic blocks will change when user hovers over the title 
let factOneHt = document.getElementById("factOneHt");
let factTitleOne = document.getElementById("stitle1");
// function one: changes text for statistic block 1
factTitleOne.addEventListener('mouseover', function blockOneHover(){
    factOneHt.innerHTML = factOneJs;
	console.log("hover");
});


let factTwoHt = document.getElementById("factTwoHt");
let factTitleTwo = document.getElementById("stitle2");
// function two: changes text for statistic block 2
factTitleTwo.addEventListener('mouseover', function blockTwoHover(){
    factTwoHt.innerHTML = factTwoJs;
});


let factThreeHt = document.getElementById("factThreeHt");
let factTitleThree = document.getElementById("stitle3");
// function three: changes text for statistic block 3
factTitleThree.addEventListener('mouseover', function blockThreeHover(){
    factThreeHt.innerHTML = factThreeJs;
});



//for loop to change color of block titles 
let blockTitles = document.querySelectorAll("h1");
let pageHeading = document.getElementById("headerpic");

//click page header to change the color of each title
pageHeading.addEventListener("click", function titleColor (){
   for (let b = 0; b < blockTitles.length; b = b + 1) {
    blockTitles[b].style.backgroundColor = "#212121";
    blockTitles[b].style.color = "#007FC6";
}
});



let myDay = "";
let today = "";
let coffee = "";
let myDate = new Date();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
 
 
if(urlParams.has('day')){
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
 
}else{
    myDay = myDate.getDay();
 
}
 
 
function coffeeTemplate(coffee){
    let myReturn = "";
 
    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee">
    <strong id="coffee-higlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily special is <strong>${coffee.name}</strong>, ${coffee.desc}
 
    </p>
        `;
        
    return myReturn;
}
 
switch(myDay){
 
    case 1:
        today = "Monday";
 
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of Bubble Tea",
            day: "Monday",
            desc: 'I love Bubble Tea'
        };
 
    break;    
 
    case 2:
        today = "Tuesday";
 
        coffee = {
            color: "orange",
            name: "Flat White",
            pic: "images/Flat-White.jpg",
            alt: "A pic of Flat White",
            day: "Tuesday",
            desc: 'If its not flat white, then its not right'
        };
 
    break;   
 
 
    case 3:
        today = "Wednesday";
 
        coffee = {
            color: "brown",
            name: "drip",
            pic: "images/drip.jpg",
            alt: "A pic of drip coffee",
            day: "Wednesday",
            desc: 'Some days you just need the drip!'
        };
 
    break;
 
    case 4:
        today = "Thursday";
 
        coffee = {
            color: "LightBrown",
            name: "frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A pic of frappaccino",
            day: "Thursday",
            desc: 'I love me some frappaccino'
 
        };
 
    break;
 
 
    case 5:
        today = "Friday";
    
        coffee = {
            color: "white",
            name: "Cappuccino",
            pic: "images/Cappuccino.jpg",
            alt: "A pic of Cappuccino",
            day: "Friday",
            desc: `With this cappuccino, i can take on a rhino`
           
         };
 
    break;     
 
 
    case 6:
        today = "Saturday";
 
        coffee = {
            color: "darkGray",
            name: "pumpkin spice latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of pumpkin spice latte",
            day: "Saturday",
            desc: `Which pumpkin for my pumpkin spice latte?`
 
        
        };
 
    break;
    
    
    case 0:
        today = "Sunday";
 
        coffee = {
            color: "gray",
            name: "Milk Tea",
            pic: "images/MilkTea.bmp",
            alt: "A pic of Milk Tea",
            day: "Sunday",
            desc: `Ahhhh some Milk Tea with some green tea chocolate would be nice...`
        };
 
    break;    
 
 
 
}
 
 
console.log(queryString);
 
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
 
document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;
 
document.getElementById("coffee-highlight").style.color = coffee.color;

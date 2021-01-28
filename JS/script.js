let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";
/* [" Mocha Latte","Vanilla Frappe","Iced Latte","Latte Macchiato","Esspresso Lungo","Esspresso Ristretto"] */


function coffeeTemplete(coffee) {
    let myReturn = "";

    myReturn = `
            <p>
    		 <img src="images/pumpkin-spice-latte.jpg" alt="Our Pumpkin Spice Latte tastes great on a Fall Day!" id="coffee" />
            <strong class="feature">Monday's Coffee Special:</strong> Monday's daily coffee special is <strong class="feature">Pumpkin Spice Latte</strong>, which makes us wish it was always Fall, as this is one of our top sellers!</p>

    
    `;

}

today = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let random = Math.floor(Math.random() * 5) 

alert("today is " + today[myDay] + " and todays coffee of the day is: " + coffee[random]);
        
switch (myDay) {
    case 1:
        today = "Monday";

        coffee = {
            color: "pink",
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"A pic of a Bubble Tea",
            day:"Monday",
            desc:`I love Bubble Tea!`,
            
        }
        break;
    case 3:
        today = "Wednesday";

        coffee = {
            color: "brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"A pic of a drip coffee",
            day:"Wednesday",
            desc:`Some days you just need the drip!`,
            
        }
    break;
}

        alert("Hi, it's " + myDay + " I'm in another file now!");
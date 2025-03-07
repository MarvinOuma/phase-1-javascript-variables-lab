// Code your solution in this file!

const companyName = "Scuber";  

let mostProfitableNeighborhood = "Chelsea";  

let companyCeo = "Susan Smith";


const currentUser = 'Grace Hopper';


const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;


const excitedWelcomeMessage = welcomeMessage.toUpperCase();


const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Function 1: scuberGreetingForFeet()
function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
      return "This one is on me!";
    } else if (distance > 2000 && distance <= 2500) {
      return "I will gladly take your thirty bucks.";
    } else if (distance > 2500) {
      return "No can do.";
    }
  }
  
  // Function 2: ternaryCheckCity()
  function ternaryCheckCity(city) {
    return city === "NYC" ? "Ok, sounds good." : "No go.";
  }
  
  // Function 3: switchOnCharmFromTip()
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case "generous":
        return "Thank you so much.";
      case "not as generous":
        return "Thank you.";
      default:
        return "Bye.";
    }
  }
  

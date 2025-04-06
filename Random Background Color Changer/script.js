
const ColourBackground = document.getElementById("containerBackground");
const buttonchange = document.getElementById("colorButton")

//Add an event listener to the button
buttonchange.addEventListener("click", colourChange);

const hexChars = "0123456789ABCDEF";
const length = 6;


const allColour = number + symbol;

function colourChange(){
    let randomColour = "#"; // Initialize with the '#' symbol
    
    for (let i = 0; i < length; i++) {
      
        let randomIndex = Math.floor(Math.random() * hexChars.length); ///final format= #A5F3B1


        let randomChar = hexChars[randomIndex]; 

        // Append the random character to our color string
        randomColour += randomChar;
    }

    document.body.style.backgroundColor = randomColour;
}


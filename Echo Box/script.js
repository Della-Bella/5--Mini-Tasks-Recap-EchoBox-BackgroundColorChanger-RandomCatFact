

//Get references to the HTML elements
    const textInputUser = document.getElementById("textInput");
    const textInputResult = document.getElementById("outputParagraph")
    const echoButton = document.getElementById("echoButton");

 
//Add an event listener to the button
echoButton.addEventListener("click", text);

    function text(){
//Get the current text
            const currentTextValue = textInputUser.value;

        if (currentTextValue === "") {
            // If it IS empty, show an alert message
            alert("Write Something!");
        } else {
            textInputResult.innerHTML = currentTextValue;
    }
}


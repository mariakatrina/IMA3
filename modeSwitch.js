let isDark = true;

function switchModes(){

    if (isDark === true){ 
        // specifies this block of code to be executed on the condition that isDark is true
        console.log("I'm true");
        // allows me to check if the change occurs within the console log
        // if this shows on my console, this function of light mode happened
        // if this doesn't show on the console, then something is wrong with the set up of this script
        document.documentElement.style.setProperty("--col-01","#17121");
        // grabs the style of a document element to change from the variable col-01 and value #17121 (cont. on line 21)
        document.documentElement.style.setProperty("--col-02","#f2fbeb");
        // grabs the style of a document element to change from the variable col-02 and value #f2fbeb (cont. on line 22)
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        // grabs the element with the id of "modeButton" and uses it to trigger a change
        isDark = false;
        // by default with no user feedback, the page is set to light mode: isDark = false
        // 'false' specified this block of code to be false, therefore, not change
    } else {
        // specifies this block of code to be executed, if the isDark condition is false
        console.log("I'm false");
        // allows me to check if the change occurs within the console log
        // if this shows on my console, this function of dark mode happened
        // if this doesn't show on the console, then something is wrong with the set up of this script
        document.documentElement.style.setProperty("--col-01","#f2fbeb");
        // and changes this variable col-01 to the value of #f2fbeb
        document.documentElement.style.setProperty("--col-02","#171219");
        // and changes this variable col-01 to the value of #171219
        // switching both variables to allow the darker colour to dominate the page and create a dark mode
        document.getElementById("modeButton").innerHTML = "Light Mode";
        // this changes the HTML element (in this case, the text) with the element Id "modeButton" to "Light Mode"
        // changing the text within the element to let the user know that they can switch to light mode with this button
        isDark = true;
        // activates dark mode to true, turning it on
        // 'true' specified this condition of dark mode to be true, therefore, cause the page to change to Dark Mode
}

}


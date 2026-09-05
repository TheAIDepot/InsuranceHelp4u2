/**
 * Main JavaScript for InsuranceHelp4u2 Platform
 * Handles Site Security Access and Interface Tools
 */

function checkAccessCode() {
    const input = document.getElementById("gatekeeper-input").value;
    
    // CHANGE '12345' below to the exact 5-digit code you want your clients to use!
    if (input === "12345") {
        document.getElementById("site-gatekeeper").style.display = "none";
    } else {
        document.getElementById("gatekeeper-error").style.display = "block";
        document.getElementById("gatekeeper-input").value = "";
    }
}

// Automatically check code when the page loads if an input exists
document.addEventListener("DOMContentLoaded", () => {
    const gatekeeperInput = document.getElementById("gatekeeper-input");
    
    if (gatekeeperInput) {
        // Allow pressing the "Enter" key on your keyboard to instantly unlock
        gatekeeperInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") { 
                checkAccessCode(); 
            }
        });
    }
});

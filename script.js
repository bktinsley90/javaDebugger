function myFunction() {
    let response;
    let cupsDrank= document.getElementById("cupsDrank").value;
    if (cupsDrank < 4) {
        response = "You are fine, maybe have another cup!";
    }

    else if (cupsDrank >= 4) {
        response = "Run to the bathroom NOW!";  
    }
    document.getElementById("result").innerHTML = response;
    
}
function GO() {
    var fname =
        document.forms["RegForm"]["FName"];
    var lname =
        document.forms["RegForm"]["LName"];    
    var email =
        document.forms["RegForm"]["EMail"];
    var phone =
        document.forms["RegForm"]["Telephone"];
    var what =
        document.forms["RegForm"]["Subject"];
    var password =
        document.forms["RegForm"]["Password"];
    var address =
        document.forms["RegForm"]["Address"];

    if (fname.value == "") {
        window.alert("Please enter your First name.");
        fname.focus();
        return false;
    }
    if (lname.value == "") {
        window.alert("Please enter your Last name.");
        lname.focus();
        return false;
    
    }

    if (email.value == "") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    

    return true;
}
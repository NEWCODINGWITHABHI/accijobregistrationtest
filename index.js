
function validate(){

    // access the html document
    let firstName=document.getElementById("first-name");
    let lastName=document.getElementById("last-name");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let cnfPassword=document.getElementById("cnf-password");
    let tnc=document.getElementById("tnc");
    
    // store input value filled by user
    let firstNameVal=firstName.value;
    let lastNameVal=lastName.value;
    let emailVal=email.value;
    let passwordVal=password.value;
    let cnfPasswordVal=cnfPassword.value;
    let tncVal=tnc.checked;
    console.log(tncVal);
    console.log(tnc);
    
   
     let error=false;

    //  check first name validation
    if(firstNameVal==""){
        document.getElementById("first-name-invalid").innerText="Please enter a valid first name";
        error=true;
    }
    else if(firstNameVal.length<3){
        document.getElementById("first-name-invalid").innerText="Please enter a valid first name";
        error=true;;
    }
    else{
        document.getElementById("first-name-invalid").innerText="";
    }

//  check last name validation
    if(lastNameVal==""){
        document.getElementById("last-name-invalid").innerText="Please enter a valid last name";
        error=true;
    }
    else if(lastNameVal.length<3){
        document.getElementById("last-name-invalid").innerText="Please enter a valid last name";
        error=true;
    }
    else{
        document.getElementById("last-name-invalid").innerText="";
    }


    // check email validation
    if(emailVal==""){
        document.getElementById("email-invalid").innerText="Please enter a valid email address";
        error=true;
    }
    else if(emailVal.indexOf("@")==0){
        document.getElementById("email-invalid").innerText="Please enter a valid email address";
        error=true;
    }
    else if(emailVal.includes("@")==false){
        document.getElementById("email-invalid").innerText="Please enter valid email address";
        error=true;
    }
    else if(emailVal.includes(".")==false){
        document.getElementById("email-invalid").innerText="Please enter valid email address";
        error=true;
    }
    else if((emailVal.lastIndexOf(".")+2)>(emailVal.length-1)){
        document.getElementById("email-invalid").innerText="Please enter valid email address";
        error=true;
    }
    else{
        document.getElementById("email-invalid").innerText="";
    }


    // check password validation
  if(passwordVal.length>=8 && (passwordVal.includes("$")|| passwordVal.includes("@")
  ||passwordVal.includes("#")) && (passwordVal.includes(1)|| passwordVal.includes(2)|| passwordVal.includes(3)||  passwordVal.includes(4)|| passwordVal.includes(5))){
    document.getElementById("password-invalid").innerText="";
}
else{
    document.getElementById("password-invalid").innerText="Pleasen enter valid password";
    error=true;
}

//  check matching password validation
if(cnfPasswordVal!=passwordVal || cnfPasswordVal==""){
    document.getElementById("cnf-password-invalid").innerText="Password doesn't match";
    error=true;
}
else{
    document.getElementById("cnf-password-invalid").innerText="";
}

// check terms and condition validation
  if(tncVal){
    document.getElementById("tnc-invalid").innerText="";
}
else{
    document.getElementById("tnc-invalid").innerText="You must agree before submitting";
    error=true;
  }

//   finally we check all details are correct or not if correct then 
//   show submitted output
if(error==false){
    alert("Your details has been saved successfully!")

    // after submitting we are clearing the form
    firstName.value="";
    lastName.value="";
    email.value="";
    password.value="";
    cnfPassword.value="";
    tnc.checked=false;
    document.getElementById("first-name-invalid").innerText="";
    document.getElementById("last-name-invalid").innerText="";
    document.getElementById("email-invalid").innerText="";
    document.getElementById("password-invalid").innerText="";
    document.getElementById("cnf-password-invalid").innerText="";
    document.getElementById("tnc-invalid").innerText="";
}


}
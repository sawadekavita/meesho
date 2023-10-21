function noValidation(){ 
    var mobileNumber = document.getElementById("mobNo").value;
    var regMobileNumber = /^(?:\+91|0)?[789]\d{9}$/;
  
    if( regMobileNumber.test(mobileNumber)) {
      alert("Signup Successfully");
      open("Meesho.html")
    } else {
      document.getElementById("error-msg").innerHTML = "Please enter a valid mobile number";
      document.getElementById("mobNo").style.border="red"
      mobNo.focus()
    }
  
  
  if(mobileNumber == ""){
      document.getElementById("error-msg").innerHTML = "*Please fill out this field";
      mobileNumber.focus();
      return false
   }
 }
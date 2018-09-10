document.addEventListener('DOMContentLoaded', function(){
		
	var NamePattern = /^[a-zA-Z]{2,}$/;   
    var Name = document.getElementById("name");
    var Surname = document.getElementById("surname");
   
    Name.addEventListener("blur", myNameBlurFunction, true);
    function myNameBlurFunction() {
        var NameValue = document.getElementById("name").value;
        if(NamePattern.test(NameValue)){
            Name.classList.remove("danger");
            Name.classList.add("success");
        }
        else{
            Name.classList.remove("success");
            Name.classList.add("danger"); 
        }                            
    }
   
    Surname.addEventListener("blur", mySurnameBlurFunction, true);
    function mySurnameBlurFunction() {
        var SurnameValue = document.getElementById("surname").value;
        if(NamePattern.test(SurnameValue)){
            Surname.classList.remove("danger");
            Surname.classList.add("success");
        }
        else{
            Surname.classList.remove("success");
            Surname.classList.add("danger");          
        }                      
   }
     
    var EmailPattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    var Email = document.getElementById("email");   
    Email.addEventListener("blur", myEmailBlurFunction, true);
    function myEmailBlurFunction() {
        var EmailValue = document.getElementById("email").value;
        if(EmailPattern.test(EmailValue)){
            Email.classList.remove("danger");
            Email.classList.add("success");
        }
        else{
            Email.classList.remove("success");
            Email.classList.add("danger"); 
        }                            
    }
   
    var PhonePattern = /^(\([0-9]{3}\)|[0-9]{3})[0-9]{3}[0-9]{3}$/;
    var Phone = document.getElementById("telephone");
    Phone.addEventListener("blur", myPhoneBlurFunction, true);
    function myPhoneBlurFunction() {
        var PhoneValue = document.getElementById("telephone").value;
        if(PhonePattern.test(PhoneValue)){
            Phone.classList.remove("danger");
            Phone.classList.add("success");
        }
        else{
            Phone.classList.remove("success");
            Phone.classList.add("danger"); 
        }                            
    }
    
    var ZipPattern = /^[0-9]{2}\-[0-9]{3}$/;
    var Zip = document.getElementById("zip-code");
    Zip.addEventListener("blur", myZipBlurFunction, true);
    function myZipBlurFunction() {
        var ZipValue = document.getElementById("zip-code").value;
        if(ZipPattern.test(ZipValue)){
            Zip.classList.remove("danger");
            Zip.classList.add("success");
        }
        else{
            Zip.classList.remove("success");
            Zip.classList.add("danger"); 
        }                            
    } 
    
    var PasswordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var Password = document.getElementById("password");
    Password.addEventListener("blur", myPasswordBlurFunction, true);
    function myPasswordBlurFunction() {
        var PasswordValue = document.getElementById("password").value;
        if(PasswordPattern.test(PasswordValue)){
            Password.classList.remove("danger");
            Password.classList.add("success");
        }
        else{
            Password.classList.remove("success");
            Password.classList.add("danger"); 
        }                            
    }
    
    var PasswordConfirm = document.getElementById("password-confirm");
    PasswordConfirm.addEventListener("blur", myPasswordConfirmBlurFunction, true);
    function myPasswordConfirmBlurFunction() {
        var PasswordValue = document.getElementById("password").value;
        var PasswordConfirmValue = document.getElementById("password-confirm").value;
        if(PasswordPattern.test(PasswordConfirmValue) && PasswordValue === PasswordConfirmValue ){
            PasswordConfirm.classList.remove("danger");
            PasswordConfirm.classList.add("success");
        }
        else{
            PasswordConfirm.classList.remove("success");
            PasswordConfirm.classList.add("danger"); 
        }                            
    }
   
    var TimePattern = /^\d{1,2}:\d{2}$/;
    var Time = document.getElementById("time-start");
    Time.addEventListener("blur", myTimePatternBlurFunction, true);
    function myTimePatternBlurFunction() {
        var TimeValue = document.getElementById("time-start").value;
        if(TimePattern.test(TimeValue)){
            Time.classList.remove("danger");
            Time.classList.add("success");
        }
        else{
            Time.classList.remove("success");
            Time.classList.add("danger"); 
        }                            
    }
    
    var TimeStop = document.getElementById("time-stop");
    TimeStop.addEventListener("blur", myTimeStopPatternBlurFunction, true);
    function myTimeStopPatternBlurFunction() {
        var TimeStopValue = document.getElementById("time-stop").value;
        if(TimePattern.test(TimeStopValue)){
            TimeStop.classList.remove("danger");
            TimeStop.classList.add("success");
        }
        else{
            TimeStop.classList.remove("success");
            TimeStop.classList.add("danger"); 
        }                            
    }
   
    var DatePattern = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    var Date = document.getElementById("borrow-date");
    Date.addEventListener("blur", myDateBlurFunction, true);
    function myDateBlurFunction() {
        var DateValue = document.getElementById("borrow-date").value;
        if(DatePattern.test(DateValue)){
            Date.classList.remove("danger");
            Date.classList.add("success");
        }
        else{
            Date.classList.remove("success");
            Date.classList.add("danger"); 
        }                            
    }
   
    var Choose = document.getElementById("choose-bike");
    Choose.addEventListener("blur", myChooseBlurFunction, true);
    function myChooseBlurFunction() {
        var ChooseValue = document.getElementById("choose-bike").value;
        if(ChooseValue !== "choose"){
            Choose.classList.remove("danger");
            Choose.classList.add("success");
        }
        else{
            Choose.classList.remove("success");
            Choose.classList.add("danger"); 
        }
    }

 });



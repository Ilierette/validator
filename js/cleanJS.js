document.addEventListener('DOMContentLoaded', function(){
    
    var Name = document.getElementById("name");    
    Name.addEventListener("blur", myNameBlurFunction, true);
    function myNameBlurFunction() {
        var NameValue = document.getElementById("name").value;
        if (NameValue.length < 2) {
            Name.classList.remove("success");
            Name.classList.add("danger");
        }
        else{            
            for(var i=0; i < NameValue.length; i++){
                var char = NameValue.charAt(i);
                if(isNaN(parseInt(char))){
                    Name.classList.remove("danger");
                    Name.classList.add("success");
                }
                else{
                    Name.classList.remove("success");
                    Name.classList.add("danger");
                }
            }
        }   
    }
    
    var Surname = document.getElementById("surname");    
    Surname.addEventListener("blur", mySurnameBlurFunction, true);
    function mySurnameBlurFunction() {
        var SurnameValue = document.getElementById("surname").value;
        if (SurnameValue.length < 2) {
            Surname.classList.remove("success");
            Surname.classList.add("danger");
        }
        else{            
            for(var i=0; i < SurnameValue.length; i++){
                var char = SurnameValue.charAt(i);
                if(isNaN(parseInt(char))){
                    Surname.classList.remove("danger");
                    Surname.classList.add("success");
                }
                else{
                    Surname.classList.remove("success");
                    Surname.classList.add("danger");
                }
            }
        }
    }
    
    var Email = document.getElementById("email");
    Email.addEventListener("blur", myEmailBlurFunction, true);
    function myEmailBlurFunction() {
        var EmailValue = document.getElementById("email").value;
        var at = EmailValue.search("@");
        var DomainEmail = EmailValue.substring(at+1);
        var dot = DomainEmail.indexOf(".");
        var CountryEmail = DomainEmail.substring(dot+1);
        console.log(CountryEmail.length);
        if (EmailValue.length > 2 && at > 0 && CountryEmail.length === 2 || CountryEmail.length === 3){ 
            Email.classList.remove("danger");
            Email.classList.add("success");         
        }
        else{
            Email.classList.remove("success");
            Email.classList.add("danger"); 
        }
    }
    
    var Phone = document.getElementById("telephone");
    Phone.addEventListener("blur", myPhoneBlurFunction, true);
    function myPhoneBlurFunction() {
        var PhoneValue = document.getElementById("telephone").value;
        if (PhoneValue.length === 9){          
          for(var i=0; i < PhoneValue.length; i++){
                var char = PhoneValue.charAt(i);
                if(!isNaN(parseInt(char))){   
                    Phone.classList.remove("danger");
                    Phone.classList.add("success");        
                }
                else{
                    Phone.classList.remove("success");
                    Phone.classList.add("danger");
                }
            }  
        }
        else{
            Phone.classList.remove("success");
            Phone.classList.add("danger"); 
        }
    }
    
    var Zip = document.getElementById("zip-code");
    Zip.addEventListener("blur", myZipBlurFunction, true);
    function myZipBlurFunction(){
        var ZipValue = document.getElementById("zip-code").value;
        if (ZipValue.length === 6){
            for(var i=0; i < ZipValue.length; i++){
                var char = ZipValue.charAt(i);
                var dash = ZipValue.charAt(2);
                if(dash==="-"){
                    if(!isNaN(parseInt(char))){                       
                        Zip.classList.remove("danger");
                        Zip.classList.add("success");
                    }
                    else{
                        Zip.classList.remove("success");
                        Zip.classList.add("danger");
                    }
                }                
                else{
                    Zip.classList.remove("success");
                    Zip.classList.add("danger");
                }
            }
        }
        else{
            Zip.classList.remove("success");
            Zip.classList.add("danger");
        }
    }
    
    var Password = document.getElementById("password");
            
    var PasswordConfirm = document.getElementById("password-confirm");
    
    var Time = document.getElementById("time-start");
    Time.addEventListener("blur", myTimeBlurFunction, true);
    function myTimeBlurFunction(){
        var TimeValue = document.getElementById("time-start").value;
        if (TimeValue.length === 5){
            for(var i=0; i < TimeValue.length; i++){
                var char = TimeValue.charAt(i);
                var colon = TimeValue.charAt(2);
                if(colon === ":"){
                    if(!isNaN(parseInt(char))){                       
                        Time.classList.remove("danger");
                        Time.classList.add("success");
                    }
                    else{
                        Time.classList.remove("success");
                        Time.classList.add("danger");
                    }
                }                
                else{
                    Time.classList.remove("success");
                    Time.classList.add("danger");
                }   
            }
        }
        else{
            Time.classList.remove("success");
            Time.classList.add("danger");
        }
    }
       
    var TimeStop = document.getElementById("time-stop");
    TimeStop.addEventListener("blur", myTimeStopBlurFunction, true);
    function myTimeStopBlurFunction(){
        var TimeStopValue = document.getElementById("time-stop").value;
        if (TimeStopValue.length === 5){
            for(var i=0; i < TimeStopValue.length; i++){
                var char = TimeStopValue.charAt(i);
                var colon = TimeStopValue.charAt(2);
                if(colon === ":"){
                    if(!isNaN(parseInt(char))){                       
                        TimeStop.classList.remove("danger");
                        TimeStop.classList.add("success");
                    }
                    else{
                        TimeStop.classList.remove("success");
                        TimeStop.classList.add("danger");
                    }
                }                
                else{
                    TimeStop.classList.remove("success");
                    TimeStop.classList.add("danger");
                }   
            }
        }
        else{
            TimeStop.classList.remove("success");
            TimeStop.classList.add("danger");
        }
    }
    
    var Date = document.getElementById("borrow-date");
    Date.addEventListener("blur", myDateBlurFunction, true);
    function myDateBlurFunction() {
        
        var DateValue = document.getElementById("borrow-date").value;
        console.log(DateValue);
        if (DateValue.length === 9){
            for(var i=0; i < DateValue.length; i++){
                var char = DateValue.charAt(i);
                var dash = DateValue.charAt(4);
                console.log(dash);
                var dash2 = DateValue.charAt(7);
                console.log(dash2);
                if(dash==="-" && dash2==="-"){
                    if(!isNaN(parseInt(char))){                       
                        Date.classList.remove("danger");
                        Date.classList.add("success");
                    }
                    else{
                        Date.classList.remove("success");
                        Date.classList.add("danger");
                    }
                }                
                else{
                    Date.classList.remove("success");
                    Date.classList.add("danger");
                }
            }
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

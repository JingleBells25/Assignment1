const form =        document.getElementById('loginform')
const username =    document.getElementById('username')
const password =        document.getElementById('password')


form.addEventListener('submitButton', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs () {

    const usernameValue =    username.value.trim();
    const paswordValue =     password.value.trim();
}

//object to store user data
var user = {
    email: "",
    password: ""
}

//session array
var sessionArray = new Array();

function checkEm(email)
{
    if (email == ''){
        console.log('Email is empty');
    }    
    else {
        user['email'] = email;
        console.log('Email saved!');
    }

}

function checkPass(pwd)
{
    if (pwd == '') {
        console.log('Password is empty');
    }
    else {
        user['password'] = pwd
        console.log('Password saved!');
    }
}

function checkUsr(data, type)
{
    if ((data['email'] == 'foo@foo.com') &&
        (data['password'] == 'foo')) {
            console.log('Valid ' + type + ' credentials ');
     }
     else {
         console.log('Invalid ' + type + ' credentials ');
     }
     return false;
}








/**
 * Checks an id that consists of exactly 14 characters. The first four
 * characters are digits that start with 2 followed by three additional digits.
 * The next character is a hyphen followed by two  uppercase letters, two digits and a hyphen.
 * The last four characters are the current year.
 */

function checkId(id) 
{
var err = document.getElementById('second-error');

 function isUpperCase(char) 
 {
    if (isNaN(char)) {
        char = char,charCodeAt(0);
    }
    if ((char > 64) && (char < 91)) {
        return true;
    }
    return false;
 }     
 //checks to make sure it is a string
 if (typeof id != 'string') {
     console.log('Invalid id type received. Not a string');
     return false;
 }
 //check if it's the correct length
 if(id.length != 14) {
     console.log('ID character length is incorrect. Must be exactly 14 characters.');
     err.innerHTML = 'ID character length is incorrect. Must be exactly 14 characters.';
     return false;
 }
 //Checks first four characters
 first_four = id.substring(0,4);
 if (first_four.charAt(0) != 2) {
     console.log('ID does not start with 2')
     return false;
 }
 for (i=1; i<4; i++) {
     if (isNaN(first_four.charAt(i))) {
         console.log('One of the first four characters is not a number');
     }
 }
 //checks if the hyphens are in the right place
 if (id.charAt(4) != '-' || id.charAt(9) != '-') {
     console.log('No hyphens where they should be. Hyphens should form 3 groups of4 4 characters');
     return false;
 }
 //checks for second group of four
 second_four = id.substring(5,9);
 if (isUpperCase(second_four.charCodeAt(0)) || (isUpperCase(second_four.charCodeAt(1)))) {
     console.log('Second group does not start with two upper case characters');
     return false;
 }
 if (isNaN(second_four.charAt(2)) && isNaN(second_four(3))) {
     console.log('Second group does not have two digits ending the group');
 }
 //checks last group for current year
 today = new Date();
 if (id.substring(10) != today.getFullYear()) {
     console.log('Last four digits' + id.substring(10) + 'not equal tp current year:' + today.getFullYear());
     return false;
 }
 console.log('ID is valid');
 return true;
}

/**
 * Takes a valid email and ensures
 * the domain name
 * 
 */

function verifyEmail(email){

    var err = document.getElementById('first-error');

    //var email = document.getElementById("email").value;

    if ( email.split("@")[1] === "fitnessuniverse.com" || email.split("@")[1] === "fitnessuniverse.bb" || email.split("@")[1] === "fitnessu.life") {

        console.log('Email is valid')
        err.innerHTML = 'Email is valid';

       return true;

    }

    else

    {
        console.log('Invalid Email address. Domain is not "fitnessuniverse.com", "fitnessuniverse.bb" or "fitnessu.life')
        err.innerHTML = 'Invalid Email address. Domain is not "fitnessuniverse.com", "fitnessuniverse.bb" or "fitnessu.life';
        return false;

    }

    
        
}

/**
 * Membership number must start with the number 9 followed
 * by 5 numeric characters to form a six digit number
 * @param {String} mid 
 */

function verifyMemberNumber(mid)
{
    var err = document.getElementById('first-error');

    //checks to make sure it is a string
    if  (typeof mid != 'string') {
        console.log('Invalid membership id type received. Not a string');
        err.innerHTML = 'Invalid membership id type received. Not a string';
        return false;
    } 
//check if it's the correct length
    if(mid.length != 6) {
        console.log('ID character length in Memborship # is incorrect. Must be exactly 6 characters.');
        err.innerHTML = 'ID character length in Memborship # is incorrect. Must be exactly 6 characters.';
        return false;
    }   
//Checks the six digits 
    six_dig = mid.substring(0,6);
    if (six_dig.charAt(0) != 9) {
        console.log('ID does not start with 9 in Memborship #')
        err.innerHTML = 'ID does not start with 9 in Memborship #';
        return false;
    }
            for (i=1; i<6; i++) {
                if (isNaN(six_dig.charAt(i))) {
                    console.log('One of the six characters in Memborship # is not a number');
                    err.innerHTML = 'One of the six characters in Memborship # is not a number';
                    return false;
            }
        }
        console.log('Membership # is valid');
        err.innerHTML = 'Membership # is valid';
        return true;
}

/**
 * Password must be between 8 and 16 alphanumeric characters long.
 * Musts start with one upper case character and have at least 
 * one number and one lowercase character.
 * @param {String} pwd 
 */

function verifyPassword(pwd)
{
    var err = document.getElementById('second-error');

    var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    //var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var specialchar = ['&', '$','#','*'];
    var character;
    var uppercase_present = false;
   // var lowercase_present = false;
    var number_present = false;
    var specialchar_present = false;

    if ((pwd.length < 8) || (pwd.length > 16)) {
        console.log('Invalid password length. Must be between 8-16 characters');
        err.innerHTML = 'Invalid password length. Must be between 8-16 characters';
        return false;
    }

    //checks for first character in the password
   /* if (uppercase.includes(pwd.charAt(0)) == false) {
        console.log('Invalid password: first character not uppercase');
        return false;
    }
   */ 
    for (var i = 0; i < pwd.length; i++){
        character = pwd.charAt(i);
        if (isNaN(parseInt(character))) {
            //then it should be an alphabetic character
            if (uppercase.includes(character) == true) {
                //then we have met the lower case criteria
                uppercase_present = true;
                
            }
            else if (specialchar.includes(character) == true) {
                //then we have met the lower case criteria
                specialchar_present = true;
            }    
            /*else if (!uppercase.includes(character)) {
                //then we have an invalid character
                console.log('Invalid character in the password. Must be alphanumeric');
                return false;
            }
           */ 
        }
        else {
            number_present = true;
        }
    }
    if (!number_present) {
        console.log('No number found in the password');
        err.innerHTML = 'No number found in the password';
    }
    if (!uppercase_present) {
        console.log('No lower case character in the password');
        err.innerHTML = 'No uppercase character in the password ';
    }
    if (!specialchar_present) {
        console.log('No special characters (&,$,#,*) sre in the password');
        err.innerHTML = 'No special characters (&,$,#,*) sre in the password';
    }
    if (uppercase_present && number_present && specialchar_present) {
        console.log('Password is valid');
        err.innerHTML = 'Password is valid';
    }
    return (uppercase_present && number_present && specialchar_present);
}

/**
* loadData function for Assignment #1
*
* Add this function to your external JavaScript file. One way to invoke this function is
* to use the onload eventhandler on the body tag of the document, i.e. <body onload="loadData()">. This implementation
* has the invocation done by the window.onload event handler as you can see at the end of the script.
* If successful, you should be able to see two sets of data in localStorage. The first array, membersArray,
* is for the members dataset. The second, trainersArray, is for the trainers dataset and the managersArray is
* for the managers dataset. Feel free to modify this code to suit your field names.
*/
 function loadData()
{
   var membersArray = {
      "9356214": {
         nationalId: "1990-11-21-3221",
         memberType: "Bronze",
         firstName: "Andrew",
         lastName: "Pryor",
         address1: "31 ",
         address2: "Prior Park",
         parish: "St. James",
         memberId: "9356214",
         password:"andrewPryor123$"
      },

      "911645": {
         nationalId: "1967-12-12-0404",
         memberType: "Gold",
         firstName: "Jennifer",
         surname: "Davis",
         address1: "Wavell Ave",
         address2: "Black Rock",
         parish: "St. Michael",
         memberId: "911645",
         password:"Anoth3rpa$$"
      },

      "900015": {
         nationalId: "1979-04-22-1209",
         memberType: "Platinum",
         firstName: "Anderson",
         surname: "Alleyne",
         address1: "Lascelles Terrace",
         address2: "The Pine",
         parish: "St. Michael",
         memberId: "900015",
         password:"th#Passw0rd"
      },

      "921000": {
         nationalId: "1989-01-12-0209",
         memberType: "Bronze",
         firstName: "Tanya",
         surname: "Morris",
         address1: "Webb Hill",
         address2: "Church Village",
         parish: "St. Phillip",
         memberId: "921000",
         password:"g&$45YqddT"
      },
     "915030": {
         nationalId: "1966-09-01-0022",
         memberType: "Gold",
         firstName: "Kimberley",
         surname: "Coombs",
         address1: "Kendall Road",
         address2: "",
         parish: "St. Phillip",
         memberId: "915030",
         password:"Z*$M0n3tyal"
      }
    }

   var trainersArray = [
      {
         employeeId: "11005457TRNR",
         rank: "1",
         firstName: "Merissa",
         lastName: "Halliwall",
         email:"marissa@fitnessu.life",
         password:"f1rst1Pa$$"
      },

      {
         employeeId: "11000907TRNR",
         rank: "5",
         firstName: "Terold",
         lastName: "Bostwick",
         email: "terold@fitnessuniverse.bb",
         password:"s#cur3&cc3s5"
      },

      {
         employeeId: "11001478TRNR",
         firstName: "Vanda",
         rank: "3",
         lastName: "Marshall",
         email: "vanda@fitnessuniverse.bb",
         password:"*ll1*llip0ps"
      },

      {
         employeeId: "11000043TRNR",
         rank: "6",
         firstName: "Paul",
         lastName: "Thomas",
         email: "paul@fitnessuniverse.com",
         password:"J0$#plon67abX"
      },

      {
         employeeId: "11001003TRNR",
         rank: "2",
         firstName: "Carissa",
         lastName: "King",
         email: "carissa@fitnessuniverse.com",
         password:"K#$C&R1ssTYou"
      }
   ]

   var managersArray = [
      {
         employeeId: "11003401ADMN",
         firstName: "Yves",
         lastName: "Laurent",
         email: "yves@fitnessuniverse.com",
         password:"mYQ*f0&lM2"
      },

      {
         employeeId: "11006059ADMN",
         firstName: "Ellen",
         lastName: "Jacinto",
         email: "ellen@fitnessu.life",
         password:"b0Rg$tg#1ML"
      },

      {
         employeeId: "11002001ADMN",
         firstName: "Romaro",
         lastName: "Mcclean",
         email: "romaro@fitnessuniverse.bb",
         password:"Sz0#Hg91KDew"
      },

      {
         employeeId: "11000088ADMN",
         firstName: "Rosaline",
         lastName: "Belle",
         email: "rosaline@fitnessu.life",
         password:"Nam3*Gi$OkLu&"
      },

      {
         employeeId: "11001213ADMN",
         firstName: "Graham",
         lastName: "Abbott",
         email: "graham@fitnessuniverse.bb",
         password:"Q$Yi16Vbn"
      }
   ]

   // add to localStorage 
   if (!localStorage.getItem("members")) {
      localStorage.setItem("members", JSON.stringify(membersArray));
   }
   if (!localStorage.getItem("trainers")) {
      localStorage.setItem("trainers", JSON.stringify(trainersArray));
   }
   if (!localStorage.getItem("managers")) {
      localStorage.setItem("managers", JSON.stringify(managersArray));
   }
}

// load the data
window.onload=loadData;



 
function loginMember(data, event) 
{
    event.preventDefault();


    //var memberId = document.getElementById("memberUsername").value;
    //var password = document.getElementById("memberPassword").value;

    verifyMemberNumber(data.username.value);
    verifyPassword(data.password.value);

    var allMemberdetails = JSON.parse(localStorage.getItem('members'));

    var memberdetails = allMemberdetails[data.username.value];

    if (memberdetails.password === data.password.value) {
        console.log('Login success');
        var firstName = memberdetails.firstName;
        var lastName = memberdetails.lastName;
        const sessionDetails = {
            firstName: firstName,
            lastName: lastName,
            memberId: data.username.value
        }
        sessionStorage.setItem(data.username.value, JSON.stringify(sessionDetails));
        window.location.href = "./member_console.html";
    } else {
        console.log('Login error');
    }
        /*if (verifyMemberNumber(memberId) === false) {
            document.getElementById("first-error").innerHTML =  "Invalid Membership ID. Please try again";
            return false;
        }

        if (verifyPassword(password) === false) {
            document.getElementById("second-error").innerHTML =  "Invalid Password. Please try again";
            return false;
        }    
        let result = JSON.parse(localStorage.getItem("members"));
        
        for (var i = 0; i < result.length; i++) {
            if (data['username'] == result[i].memberId && data['password'] == result[i.password]){
                pair = true;
                sessionStorage.setItem("firstname" , result[i].firstName);
                sessionStorage.setItem("lastname" , result[i].lastName);
                sessionStorage.setItem("membershipNum" , result[i].memberId);
                sessionStorage.setItem("loggedin" , "member" );
            }
        }

        document.getElementById("first-error").innerHTML = " Invalid Login Details";
        return false;
    
            /* add to localStorage 
     if (!localStorage.getItem("members")) {
        localStorage.setItem("members", JSON.stringify(membersArray));
     }
     if (!localStorage.getItem("trainers")) {
        localStorage.setItem("trainers", JSON.stringify(trainersArray));
     }
     if (!localStorage.getItem("managers")) {
        localStorage.setItem("managers", JSON.stringify(managersArray));
     } 

   
*/
}
//window.onload=loginMember();

function loginEmployee(data) 
{
    data.preventDefault();


    //var email = document.getElementById("email").value;
    //var password = document.getElementById("memberPassword").value;

    verifyEmail(data.email);
    verifyPassword(data.password);

    var trainerdetails = localStorage.getItem(data.email);

    var trainerdetails = JSON.parse(localStorage.getItem(data.email));

    if (trainerdetails.password === data.password) {
        console.log('Login success');
        var firstName = trainerdetails.firstName;
        var lastName = trainerdetails.lastName;
        const sessionDetails = {
            firstName: firstName,
            lastName: lastName,
            email: data.email
        }
        sessionStorage.setItem(data.memberId, JSON.stringify(sessionDetails));

    } else {
        console.log('Login error');
    }
        /*if (verifyMemberNumber(memberId) === false) {
            document.getElementById("first-error").innerHTML =  "Invalid Membership ID. Please try again";
            return false;
        }

        if (verifyPassword(password) === false) {
            document.getElementById("second-error").innerHTML =  "Invalid Password. Please try again";
            return false;
        }    
        let result = JSON.parse(localStorage.getItem("members"));
        
        for (var i = 0; i < result.length; i++) {
            if (data['username'] == result[i].memberId && data['password'] == result[i.password]){
                pair = true;
                sessionStorage.setItem("firstname" , result[i].firstName);
                sessionStorage.setItem("lastname" , result[i].lastName);
                sessionStorage.setItem("membershipNum" , result[i].memberId);
                sessionStorage.setItem("loggedin" , "member" );
            }
        }

        document.getElementById("first-error").innerHTML = " Invalid Login Details";
        return false;
    
            /* add to localStorage 
     if (!localStorage.getItem("members")) {
        localStorage.setItem("members", JSON.stringify(membersArray));
     }
     if (!localStorage.getItem("trainers")) {
        localStorage.setItem("trainers", JSON.stringify(trainersArray));
     }
     if (!localStorage.getItem("managers")) {
        localStorage.setItem("managers", JSON.stringify(managersArray));
     } 

   
*/
}




 function findLostPassword() { 

    var err = document.getElementById('first-error')

    let valid = false;

    if (verifyEmail() === true){
        console.log('Valid email address');
        err.innerHTML = 'valid email address';
        return true;
    }
}


function checkLogin(){

} 
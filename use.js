var abc = [];

function myFunction1(){
document.getElementById("myDIV1").style.display = "none";
document.getElementById("myDIV2").style.display = "block";
}
function myFunction2(){
document.getElementById("myDIV1").style.display = "none";
document.getElementById("myDIV3").style.display = "block";
}

// login
function login(){
    // username validation during login
var x = document.forms["form1"]["fname"].value;
  if (x == null || x == "")
  { 
    document.getElementById("erroruser").innerHTML = "*Username must be filled out";
    return false; 
  }
  else
  {
    document.getElementById("erroruser").innerHTML = ""; u=1;
  }
//   password validation during login
var y = document.forms["form1"]["fpassword"].value;

  if(y == null || y == "")
  { 
    document.getElementById("errorpassword").innerHTML = "*Password must be filled out";
    return false;
  }
 
  else
  {
    document.getElementById("errorpassword").innerHTML = ""; v=1;
  }

  if(u&&v ==1){validate();}
  }


// signup
function signup()
{ 
    // name validation during sign up
var namepattern=/^[a-zA-Z]+$/
var x = document.forms["form2"]["fname2"].value;
  if (x == null || x == "")
  { 
     document.getElementById("errorname2").innerHTML = "*Name must be filled out.";
     return false;
  }
  if (!namepattern.test(x))
  {
    document.getElementById("errorname2").innerHTML = "*Invalid name.";
    return false;
  }
  else
  {
    document.getElementById("errorname2").innerHTML = "";
    var a=1;
  }
//   email validation during sign up
 var x = document.forms["form2"]["femail2"].value;
  if (x == null || x == "")
  {
     document.getElementById("erroremail2").innerHTML = "*Email must be filled out.";
    return false;
  }
  else
  {
    document.getElementById("erroremail2").innerHTML = "";
    var b=1;
  }
//   password validation during sign up
  var x = document.forms["form2"]["fpassword2"].value;
   if (x == null || x == "")
  {
    document.getElementById("errorpassword2").innerHTML = "*Password must be filled out.";
    return false;
  }
  else
  {
    document.getElementById("errorpassword2").innerHTML = "";
    var c=1;
  }
//   storing data at local storage
  if(a&&b&&c ==1 )
      {
      var fname2 = document.getElementById("fname2");
      var fpassword2 = document.getElementById("fpassword2");
      var femail2 = document.getElementById("femail2");
      localStorage.resultname = fname2.value;
      localStorage.resultPassword = fpassword2.value;
      localStorage.resultMail = femail2.value;
       var user = {
      name: fname2.value,
      email: femail2.value,
      password: fpassword2.value,
                  };
      if (localStorage.firstentry)
         {
           abc = JSON.parse(localStorage["abc"]);
         }

      abc.push(user);
      localStorage.setItem("abc",JSON.stringify(abc));
      localStorage.firstentry += 1;
alert("Signup Successfull");
      }
 }


//    CONTACT US
function contactus()
{
  var x = document.forms["form3"]["fname3"].value;
  var namepattern=/^[a-zA-Z]+$/
  var phonepattern = /^\d{10}$/
//   username validation in contact us page
if (x == null || x == "")
{ document.getElementById("errorname3").innerHTML = "*Name must be filled out.";
  return false;
}
if (!namepattern.test(x))
{
  document.getElementById("errorname3").innerHTML = "*Invalid name.";
  return false;
}
else {document.getElementById("errorname3").innerHTML = "";  p=1;}

// email validation in contact us page
var x = document.forms["form3"]["femail3"].value;
if (x == null || x == "")
{ document.getElementById("erroremail3").innerHTML = "*Email must be filled out.";
  return false;
}
 else{document.getElementById("erroremail3").innerHTML = "";  q=1;}

//  phone validation in contact us page
 var x = document.forms["form3"]["fphone3"].value;
 if (x == null || x == "")
{ 
  document.getElementById("errorphone3").innerHTML = "*Phone must be filled out.";
  return false;
}
if (!phonepattern.test(x))
{
  document.getElementById("errorphone3").innerHTML = "*Invalid phone number.";
  return false;}
  else{document.getElementById("errorphone3").innerHTML = "";  r=1;}
  if(p&&q&&r){alert("sent");}
}


// VALIDATING THE USER
function validate()
{
    abc = JSON.parse(localStorage["abc"]);
    valid=0;
    for(var i=0;i<abc.length;i++)
   {
    var checkuser =JSON.parse(localStorage["abc"])[i].name;
    var checkpassword =JSON.parse(localStorage["abc"])[i].password;
    if ((checkuser==document.getElementById("fname").value) && (checkpassword==document.getElementById("fpassword").value))
    {
      valid=1;
      break;
    }
  }

    if(valid==1)
     {
       alert("Login Successfull");
     }
        
   else
    {
      alert("Incorrect username or password");
    }


}


 
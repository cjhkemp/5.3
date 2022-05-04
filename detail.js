function validateform(){  
    var Firstname=document.myform.Firstname.value;  
    var Lastname=document.myform.Lastname.value; 
    var Address=document.myform.Address.value;
    var telephone=document.myform.telephone.value;
 
    if (Firstname==null || Firstname==""){  
    alert("First name can't be blank");  
    return false;
    }
    else if (Lastname==null || Lastname==""){  
    alert("Last name can't be blank");  
    return false;
    }  
    else if (Address==null || Address==""){  
    alert("Address can't be blank");  
    return false;
    }
    else if (isNaN(telephone)){
    document.getElementById("num1").innerHTML="Please enter numeric digits only";
    return false;
    }
    }
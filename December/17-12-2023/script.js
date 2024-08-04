const First_Name = document.querySelector(".First_Name");
const Last_name = document.querySelector(".Last_Name");
const Phone_number = document.querySelector(".Phone_Number");
const Email = document.querySelector(".Email");
const Password = document.querySelector(".Password");
const RegisterBTN = document.querySelector(".RegisterBTN");

RegisterBTN.addEventListener("click", ()=>{
    const First_NameValue = First_Name.value;
    const Last_namevalue = Last_name.value;
    const Phone_numbervalue = Phone_number.value;
    const Emailvalue = Email.value;
    const Passwordvalue = Password.value;

    alert(First_NameValue);
    alert(Last_namevalue);
    alert(Phone_numbervalue);
    alert(Emailvalue);
    alert(Passwordvalue);
    console.log("Hello wolrd");

});

console.log("Hello world ");
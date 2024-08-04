const Fisrt_Name = document.querySelector(".Fisrt_Name");
const Last_name = document.querySelector(".Last_name");
const Phone_number = document.querySelector(".Phone_number");
const Email = document.querySelector(".Email");
const Password = document.querySelector(".Password");
const RegisterBTN = document.querySelector(".RegisterBTN");


RegisterBTN.addEventListener("click", ()=>{
    const Fisrt_NameValue = Fisrt_Name.value;
    const Last_namevalue = Last_name.value;
    const Phone_numbervalue = Phone_number.value;
    const Emailvalue = Phone_number.value;
    const Passwordvalue = Password.value;

    alert(Fisrt_NameValue);
    alert(Last_namevalue);
    alert(Phone_numbervalue);
    alert( Emailvalue);
    alert(Passwordvalue);
})
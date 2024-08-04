const Name = document.querySelector(".Name");
const Gender = document.querySelector(".Gender");
const Address = document.querySelector(".Address");
const Old_Case = document.querySelector(".old_case");
const New_Case = document.querySelector(".new_case");
const Treatment = document.querySelector(".Treatment");
const Department = document.querySelector(".Department");
const SubmitBNT = document.querySelector(".SubmitBTN");

SubmitBNT.addEventListener('click', ()=>{
    console.log(Department.value);
    console.log(Treatment.value);
});
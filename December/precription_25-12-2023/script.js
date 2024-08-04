const Name = document.querySelector(".Name");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const address = document.querySelector(".address");
const Old_Case = document.querySelector(".Old_Case");
const New_Case = document.querySelector(".New_Case");
const Medical = document.querySelector(".Medical");
const type = document.querySelector(".type");
const dob = document.querySelector(".dob");
const submitForm = document.querySelector(".submitForm");
const DisplayResult = document.querySelector(".DisplayResult");


SubmitBNT.addEventListener("click", ()=>{
    const NameValue = Name.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const AddressValue = address.value;
    const Old_CaseValue = Old_Case.value;
    const New_CaseValue = New_Case.value;
    const MedicalValue = Medical.value;
    const typeValue = type.value;
    const dobValue = dob.value;
    const submitFormValue = submitForm.value;
    const DisplayResultValue = DisplayResult.value;


    var entry = document.createElement('div');
    entry.textContent = `Name : ${NameValue} 
                        email : ${emailValue} 
                        phone : ${phoneValue}
                        address : ${AddressValue} 
                        Old_Case : ${Old_CaseValue}
                        New_Case : ${New_CaseValue} 
                        Medical : ${Medical} 
                        type : ${typeValue}
                        dob : ${dobValue} 
                        submitForm : ${submitFormValue}
                        DisplayResult : ${DisplayResultValue}`;
    result.appendChild(entry);
    ClearInput();                    
});

function submitForm()
{
    //selecting input values var name
    document.querySelector('.Name').value = "";
    document.querySelector('.email').value = "";
    document.querySelector('.address').value = "";
    document.querySelector('.Old_Case').value = "";
    document.querySelector('.New_Case').value = "";
    document.querySelector('.Medical').value = "";
    document.querySelector('.type').value = "";
    document.querySelector('.dob').value = "";
    document.querySelector('.submitForm').value = "";
    document.querySelector('.DispalyResult').value = "";
}
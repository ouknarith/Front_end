const name = document.querySelector('.name');
const sex = document.querySelector('.sex');
const age = document.querySelector('.age');
const phone = document.querySelector('.phone'); // Corrected class name
const Old_Case = document.querySelector('.Old_Case');
const New_Case = document.querySelector('.New_Case');
const Medical_Signs = document.querySelector('.Medical_Signs');
const Medical_Diagnosis = document.querySelector('.Medical_Diagnosis'); // Corrected class name
const Enter_Drug = document.querySelector('.Enter_Drug');
const date_time = document.querySelector(".date_time");
const RegisterBTN = document.querySelector('.RegisterBTN');
const result = document.querySelector('.Result'); // Added missing result variable

RegisterBTN.addEventListener("click", () => {
    const nameValue = name.value;
    const sexValue = sex.value;
    const ageValue = age.value;
    const phoneValue = phone.value;
    const Old_caseValue = Old_Case.checked; // Use checked property
    const New_CaseValue = New_Case.checked; // Use checked property
    const Medical_SignsValue = Medical_Signs.value;
    const Medical_DiagnosisValue = Medical_Diagnosis.value;
    const Enter_DrugValue = Enter_Drug.value;
    const date_timeValue = date_time.value;

    var entry = document.createElement('div'); // Corrected element creation
    entry.textContent = `name : ${nameValue}
                        sex:${sexValue}
                        age:${ageValue}
                        phone:${phoneValue}
                        Old_case:${Old_caseValue}
                        New_Case:${New_CaseValue}
                        Medical_Signs:${Medical_SignsValue}
                        Medical_Diagnosis:${Medical_DiagnosisValue}
                        Enter_Drug:${Enter_DrugValue}
                        date_time:${date_timeValue}`;
    result.appendChild(entry);
    const data ={
        Name: nameValue,
        Sex: sexValue,
        Age: ageValue,
        Phone: phoneValue,
        Old_Case: Old_caseValue,
        New_Case: New_CaseValue,
        Medical_Signs: Medical_SignsValue,
        Medical_Diagnosis: Medical_DiagnosisValue,
        Medical_Drug:Enter_DrugValue ,
        date_time: date_timeValue,

    }
    const Jsondata = JSON.stringify(data);
    console.log(Jsondata);
    ClearInput();
});

function ClearInput() {
    document.querySelector('.name').value = "";
    document.querySelector('.sex').value = "";
    document.querySelector('.age').value = "";
    document.querySelector('.phone').value = "";
    document.querySelector('.Old_Case').checked = false; // Reset checkbox state
    document.querySelector('.New_Case').checked = false; // Reset checkbox state
    document.querySelector('.Medical_Signs').value = "";
    document.querySelector('.Medical_Diagnosis').value = ""; // Corrected class name
    document.querySelector('.Enter_Drug').value = "";
    document.querySelector('.date_time').value = "";
}

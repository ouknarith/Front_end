const Client_Name = document.querySelector(".Client_Name");
const Guard_Name = document.querySelector(".Guard_Name");
const Age = document.querySelector(".Age");
const Gender = document.querySelector(".Gender");
const Address = document.querySelector(".Address");
const Phone_Number = document.querySelector(".Phone_Number");
const Pregnancy = document.querySelector(".Pregnancy");
const SendtoWard = document.querySelector(".SendtoWard");
const Appointment = document.querySelector(".Appointment");
const DateTime = document.querySelector(".DateTime");
const Note = document.querySelector(".Note");
const SubmitBNT = document.querySelector(".SubmitBTN");
const result = document.querySelector(".result");

SubmitBNT.addEventListener("click", ()=>{
    const Client_NameValue = Client_Name.value;
    const Guard_NameValue = Guard_Name.value;
    const AgeValue = Age.value;
    const GenderValue = Gender.value;
    const AddressValue = Address.value;
    const Phone_numbervalue = Phone_Number.value;
    const PregnancyValue = Pregnancy.value;
    const SendtoWardValue = SendtoWard.value;
    const AppointmentValue = Appointment.value;
    const DateTimeValue = DateTime.value;
    const NoteValue = Note.value;
    const SubmitBNTValue = SubmitBNT.value;

    var entry = document.createElement('div');
    entry.textContent = `Client Name : ${Client_NameValue} Guardien Name : ${Guard_NameValue}
    Age : ${AgeValue} Gender : ${GenderValue} Address : ${AddressValue} Phone Number : ${Phone_numbervalue}
    Pregnancy : ${PregnancyValue} Send to Ward : ${SendtoWardValue}
    Appointment : ${AppointmentValue} Date Time : ${DateTimeValue} Note : ${NoteValue}
    SubmitBTN : ${SubmitBNTValue}`;
    result.appendChild(entry);
    ClearInput();
});

function ClearInput()
{
    document.querySelector('.Client_Name').value = "";
    document.querySelector('.Guard_Name').value = "";
    document.querySelector('.Age').value = "";
    document.querySelector('.Gender').value = "";
    document.querySelector('.Address').value = "";
    document.querySelector('.Phone_Number').value = "";
    document.querySelector('.Pregnancy').value = "";
    document.querySelector('.SendtoWard').value = "";
    document.querySelector('.Appointment').value = "";
    document.querySelector('.DateTime').value = "";
    document.querySelector('.Note').value = "";
}
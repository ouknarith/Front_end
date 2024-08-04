
var selectElement = document.querySelector('.holiday');
const Age = document.querySelector(".age");
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=> {
    var selectValue = selectElement.value;
    const humainageValue = Age.value;
    
    if(selectValue === "1")
    {
        alert("Holiday is selected");
        if (humainageValue >=65)
        {        
         alert("Discount" +Age.value);
        }
        elif (humainageValue <65);
        {
            alert("Not discount" +Age.value);
        }
    }
    else
    {
        alert("Not discount today!");
    }
});


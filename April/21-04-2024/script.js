const Num1 = document.querySelector(".num1");
const Num2 = document.querySelector(".num2");
const Num3 = document.querySelector(".num3");
const Result = document.querySelector(".Result");

const ppl = document.querySelector(".ppl");
const aal = document.querySelector(".aal");
const mml = document.querySelector(".mml");
const ddl = document.querySelector(".ddl");

ppl.addEventListener("click",pp1);
function pp1()
{
    const p = parseFloat(Num1.value);
    const p1 = parseFloat(Num2.value);
    Num3.value = p + p1;    
}

aal.addEventListener("click",aa1);
function aa1()
{
    const q = parseFloat(Num1.value);
    const q1 = parseFloat(Num2.value);
    Num3.value = q - q1;    
}

mml.addEventListener("click",mm1);
function mm1()
{
    const r = parseFloat(Num1.value);
    const r1 = parseFloat(Num2.value);
    Num3.value = r * r1;
}
ddl.addEventListener("click",dd1);
function dd1 ()
{
    const h = parseFloat(Num1.value);
    const h1 = parseFloat(Num2.value);
    Num3.value = h / h1;
}
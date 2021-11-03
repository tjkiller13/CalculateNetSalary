let name = localStorage.getItem("Name")
let ei = localStorage.getItem("EI")
let dependants = localStorage.getItem("Dependants")
let salary = localStorage.getItem("Salary")
let tax = localStorage.getItem("Tax")
let allowance = localStorage.getItem("Allowance")
let result = localStorage.getItem("Result")
let cpp = localStorage.getItem("CPP")
let bonus = localStorage.getItem("Bonus")
let gender = localStorage.getItem("Gender")

let back = document.getElementById('btn')

document.getElementById('salary').innerText = `$${salary}`;
document.getElementById('ei').innerText = `${ei}%`;
document.getElementById('cpp').innerText = `${cpp}%`;
document.getElementById('bonus').innerText = `$${bonus}`;
document.getElementById('tax').innerText = `${tax}%`;
document.getElementById('allowance').innerText = `$${allowance}`;
document.getElementById('gender').innerText = `${gender}`;
document.getElementById('dependants').innerText = dependants;
document.getElementById('result').innerText = `$${Math.round(result)}`;

document.querySelector("h1").innerText = `Salary Slip for ${name}`

let funct2 = ()=>{
    location.href ='/CalculateNetSalary/index.html';
}

back.addEventListener('click',funct2)

let depInfo = document.getElementById("depInfo")

let text;

switch(dependants){
    case "3":
        text = document.createTextNode(`You have selected ${dependants} dependants, therefore you get a deduction of 2% in income tax`)
        break;
    case "4":
        text = document.createTextNode(`You have selected ${dependants} dependants, therefore you get a deduction of 4% in income tax`)
        break;
    default:
        text = document.createTextNode(`You have selected ${dependants} dependants, therefore you do not get any deduction in income tax`)
        break;
}

depInfo.appendChild(text)

let taxInfo = document.getElementById("taxInfo")

let taxDeduction = (tax/100)*salary;

let text2 = document.createTextNode(`Your total income tax deduction is ${taxDeduction} because you pay ${tax}% tax`)

taxInfo.appendChild(text2)

let genderInfo = document.getElementById("genderInfo");

let genderText;

if(gender == "Female"){
    genderText = document.createTextNode(`As your gender is ${gender}, you get a deduction 2% in your income tax`)
}
else{
    genderText = document.createTextNode(`As your gender is ${gender}, you are not eligible for any deduction in income tax`)
}

genderInfo.appendChild(genderText)


console.log("This is index.js")

var submit = document.getElementById("btn")

let funct1 = (event)=>{
    event.preventDefault();
    let name = document.getElementById('name').value;
    //console.log(name)
    let salary = document.getElementById('salary').value;
    let ei = document.getElementById('ei').value;
    let tax;
    if(salary>80000){
        tax = 24;
    }
    else if(salary>=60000 && salary<=80000){
        tax = 19;
    }
    else{
        tax = 15;
    }
    let cpp = document.getElementById('cpp').value;
    let allowance = 200;
    let bonus = 150;
    let dependants = document.getElementById('dependants').value;
    // gender = document.getElementById('male').checked;
    //console.log(gender)
    let result;
    let rebate = 2;
    if(document.getElementById('female').checked == true){
        switch(dependants){
            case "3":
                result = salary*(1-((ei-2)/100)-(tax/100)-(cpp/100)-(rebate/100))+allowance+bonus
                break;
            case "4":
                result = salary*(1-((ei-4)/100)-(tax/100)-(cpp/100)-(rebate/100))+allowance+bonus
                break;
            default:
                result = salary*(1-(ei/100)-(tax/100)-(cpp/100)-(rebate/100))+allowance+bonus
                break;
        }
        console.log(name,salary,ei,tax,allowance,bonus,dependants,result)
    }
    else{
        switch(dependants){
            case "3":
                result = salary*(1-((ei-2)/100)-(tax/100)-(cpp/100))+allowance+bonus
                break;
            case "4":
                result = salary*(1-((ei-4)/100)-(tax/100)-(cpp/100))+allowance+bonus
                break;
            default:
                result = salary*(1-(ei/100)-(tax/100)-(cpp/100))+allowance+bonus
                break;
        }
        console.log(name,salary,ei,tax,allowance,bonus,dependants,result)
    }

    localStorage.setItem("Name", name)
    localStorage.setItem("Salary", salary)
    localStorage.setItem("EI", ei)
    localStorage.setItem("CPP", cpp)
    localStorage.setItem("Tax", tax)
    localStorage.setItem("Bonus", bonus)
    localStorage.setItem("Allowance", allowance)
    localStorage.setItem("Dependants", dependants)
    localStorage.setItem("Result", result)

    if(document.getElementById("male").checked){
        localStorage.setItem("Gender", "Male")
    }
    else if(document.getElementById("female").checked){
        localStorage.setItem("Gender", "Female")
    }
    else{
        localStorage.setItem("Gender", "Others")
    }

    let total = {
        "Name": name,
        "Salary": salary,
        "EI": ei,
        "Bonus":bonus,
        "CPP":cpp,
        "Dependants": dependants,
        "Result":result
    }
    console.log(total);
    
    //location.href ='http://127.0.0.1:5500/confirmation.html';

    // localStorage.clear();
    
    if(total.Name !== "" && total.Salary !== "" && total.EI !== "" && total.CPP !== "" && total.Bonus !== "" && total.Dependants !== "" && total.Result !== 0){
        if(total.Salary<=0){
            alert("Salary cannot have 0 or negative value")
        }
        else{
            if(total.EI<0 || total.EI>100 || total.CPP<0 || total.CPP>100){
                alert("EI and CPP should be between 0 to 100%")
            }
            else{
                if(total.Dependants<0){
                    alert("Dependants cannot have negative value")
                }
                else{
                    location.href ='/CalculateNetSalary/confirmation.html';
                }
            }
        }
    }
    else{
        alert("You cannot proceed without entering all the feilds")
    }

}

let funct2 = ()=>{
    document.body.setAttribute('style','background-color: white;')
    document.querySelector(".container").setAttribute('style','background-color: black; color: white;')
    document.querySelector('button#btn').setAttribute('style','background-color: white; color: black;')
}

let funct3 = ()=>{
    document.body.setAttribute('style','background-color: black;')
    document.querySelector(".container").setAttribute('style','background-color: white; color: black;')
    document.querySelector('button#btn').setAttribute('style','background-color: black; color: white;')
}

submit.addEventListener('click',funct1)

document.getElementById("container").addEventListener('mouseover',funct2)

document.getElementById("container").addEventListener('mouseout',funct3)



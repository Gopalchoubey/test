// fill in javascript code here
document.querySelector("form").addEventListener("submit", myFunction)

function myFunction(event){
    event.preventDefault();

    let avatar = document.querySelector("#name").value
    let id = document.querySelector("#employeeID").value
    let dept = document.querySelector("#department").value
    let exp = document.querySelector("#exp").value
    let email = document.querySelector("#email").value
    let mble = document.querySelector("#mbl").value

    console.log(avatar, id, dept, exp, mble);

    let tr = document.createElement("tr");
    tr.style.textAlign="center"
    tr.style.height="50px"
    let td1= document.createElement("td")
    td1.innerText=avatar;

    let td2= document.createElement("td")
    td2.innerText=id;
    let td3= document.createElement("td")
    td3.innerText=dept;
    let td4= document.createElement("td")
    td4.innerText=exp;
    let td5= document.createElement("td")
    td5.innerText=email;
    let td6= document.createElement("td")
    td6.innerText=mble;
    let td7= document.createElement("td")
    if(exp >  12){
        td7.innerText= "Senior"
    }else if(exp > 2 && exp < 5){
        td7.innerText= "Junior"
    }else if(exp >= 1) {
        td7.innerText= "Fresher"
    }
    td8 = document.createElement("td");
    td8.innerText= "DELETE";
    td8.style.backgroundColor = "red"
    td8.style.color="black"
    td8.style.corsor= "pointer"
    td8.addEventListener("click", deleteRow)


    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    document.querySelector("tbody").append(tr)

    function deleteRow (event){
        event.target.parentNode.remove()
    }
}
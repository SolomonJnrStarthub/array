




// let items=[3,5,7];
// document.getElementById("h").innerHTML=items;


// function add(){
//     you = document.getElementById("inp2").value;
//     product = +items[1]+ +you;

//     document.getElementById("result").innerHTML=product;
    
//}



// let list=["Solomon", "Aby", "Sammo"];
// let age=["18","16","19"]

// document.getElementById("hb").innerHTML = list;
// document.getElementById("hb2").innerHTML = age;

// function display(){
//     var newNames;
//     newNames = document.getElementById("inp1").value;
//     list.push(newNames);
//     document.getElementById("hb").innerHTML = list;
//     let newAge;
//     newAge = document.getElementById("inp2").value;
//     age.push(newAge);
//     document.getElementById("hb2").innerHTML = age;
// }


let names=["Abuoo","Solo","Ekom"];
let ages=[18,16,17];

document.getElementById("nameResult").innerHTML = names;
document.getElementById("ageResult").innerHTML = ages;

function okay(){
    let newName;
    newName = document.getElementById("nameInput").value;
    names.push(newName);
    document.getElementById("nameResult").innerHTML = names;


    let newAge;
    newAge= document.getElementById("ageInput").value;
    ages.push(newAge);
    document.getElementById("ageResult").innerHTML = ages;
}



























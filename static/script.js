function submit_diabetes(){
    let inputs=document.querySelectorAll("input"); 
    inputs = Array.prototype.slice.call(inputs, 0);
    let new_input =[]
    for(let i = 0; i < inputs.length; i++) {
        new_input.push(inputs[i].value);
    }
    let new_input2 =[]
    new_input2.push(new_input)
    console.log(new_input2)
    let req = new XMLHttpRequest();
    req.open("POST","http://127.0.0.1:5000/predict_api_diabetes");
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload =()=> {
        let data = req.response;
        console.log(data);
        console.log("amar buke koshto");
        let verdict = document.querySelector("#result");

        if(verdict != null) {
            if(data == "yes") {
                verdict.style.color = "#ee2a37";
                verdict.innerHTML = "OH NO! YOU HAVE HIGHER RISK OF DIABETES";
            }
            else if(data == "no") {
                verdict.style.color = "#4ea217";
                verdict.innerHTML = "YEEE! YOU HAVE LOWER RISK OF DIABETES";
            }
        }

    }

    const json_data = {
        val : new_input2
    }
    
    req.send(JSON.stringify(json_data));
}
///////////////////
function submit_heart(){
    let inputs=document.querySelectorAll("input"); 
    inputs = Array.prototype.slice.call(inputs, 0);
    let new_input =[]
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type == "radio" && inputs[i].checked)
            new_input.push(inputs[i].value);
        if(inputs[i].type != "radio")
            new_input.push(inputs[i].value);
        
    }
    let new_input2 =[]
    new_input2.push(new_input)
    console.log("amar buke koshto-2222");
    console.log(new_input2)
    let req = new XMLHttpRequest();
    req.open("POST","http://127.0.0.1:5000/predict_api_heart");
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload =()=> {
        let data = req.response;
        console.log(data);
        console.log("amar buke koshto-2");
        let verdict = document.querySelector("#result");
        if(verdict != null) {
            if(data == "yes") {
                verdict.style.color = "#ee2a37";
                verdict.innerHTML = "OH NO! YOU HAVE HIGHER RISK OF HEART ATTACK";
            }
            else if(data == "no") {
                verdict.style.color = "#4ea217";
                verdict.innerHTML = "YEEE! YOU HAVE LOWER RISK OF HEART ATTACK";
            }
        }
    }

    const json_data = {
        val : new_input2
    }
    
    req.send(JSON.stringify(json_data));
}
//////////////////
function submit_stroke(){
    let inputs=document.querySelectorAll("input"); 
    inputs = Array.prototype.slice.call(inputs, 0);
    let new_input =[]
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type == "radio" && inputs[i].checked)
            new_input.push(inputs[i].value);
        if(inputs[i].type != "radio")
            new_input.push(inputs[i].value);
    }
    let new_input2 =[]
    new_input2.push(new_input)
    console.log(new_input2)
    let req = new XMLHttpRequest();
    req.open("POST","http://127.0.0.1:5000/predict_api_stroke");
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload =()=> {
        let data = req.response;
        console.log(data);
        console.log("amar buke koshto 3");
        let verdict = document.querySelector("#result");
        if(verdict != null) {
            if(data == "yes") {
                verdict.style.color = "#ee2a37";
                verdict.innerHTML = "OH NO! YOU HAVE HIGHER RISK OF BRAIN STROKE";
            }
            else if(data == "no") {
                verdict.style.color = "#4ea217";
                verdict.innerHTML = "YEEE! YOU HAVE LOWER RISK OF BRAIN STROKE";
            }
        }
    }

    const json_data = {
        val : new_input2
    }
    
    req.send(JSON.stringify(json_data));
}
//////////////////////
function submit_maternal(){
    let inputs=document.querySelectorAll("input"); 
    inputs = Array.prototype.slice.call(inputs, 0);
    let new_input =[]
    for(let i = 0; i < inputs.length; i++) {
        new_input.push(inputs[i].value);
    }
    let new_input2 =[]
    new_input2.push(new_input)
    console.log(new_input2)
    let req = new XMLHttpRequest();
    req.open("POST","http://127.0.0.1:5000/predict_api_maternal");
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload =()=> {
        let data = req.response;
        console.log(data);
        console.log("amar buke koshto 5");
        let verdict = document.querySelector("#result");
        if(verdict != null) {
            if(data == "yes") {
                verdict.style.color = "#ee2a37";
                verdict.innerHTML = "OH NO! YOU HAVE HIGHER RISK OF MATERNAL COMPLICATIONS";
            }
            else if(data == "no") {
                verdict.style.color = "#4ea217";
                verdict.innerHTML = "YEEE! YOU HAVE LOWER RISK OF MATERNAL COMPLICATIONS";
            }
        }
    }

    const json_data = {
        val : new_input2
    }
    
    req.send(JSON.stringify(json_data));
}


function clr() {
    document.getElementById("result").innerHTML = "";
  }

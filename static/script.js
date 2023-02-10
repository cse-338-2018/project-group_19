function submit(){
    console.log("hellllo");
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
    req.open("POST","http://127.0.0.1:5000/predict_api");
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload =()=> {
        let data = req.response;
        console.log("data from backend");
        console.log(data);
        console.log("amar buke koshto");
        let verdict = document.querySelector("p");
        if(verdict!= null)verdict.innerHTML = data;
    }

    const json_data = {
        val : new_input2
    }
    
    req.send(JSON.stringify(json_data));
}
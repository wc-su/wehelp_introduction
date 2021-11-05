fetch("all.json").then(function(response){
    return response.json();
}).then(function(resultData){
    let ul = document.querySelector(".introduction");
    for(let i = 0; i < resultData.length; i++){
        let li = document.createElement("LI");
        let header = document.createElement("H2");
        header.innerHTML = resultData[i].header;
        let content = document.createElement("P");
        content.innerHTML = resultData[i].content;
        li.appendChild(header);
        li.appendChild(content);
        ul.appendChild(li);
    }
});
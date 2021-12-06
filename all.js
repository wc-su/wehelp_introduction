fetch("all.json").then(function(response){
    return response.json();
}).then(function(resultData){
    const ul = document.querySelector(".introduction");
    let str = "";
    resultData.forEach((item) => {
        str += `<li><h3>${item.header}</h3>${item.content.map(render).join('')}</li>`;
    });
    ul.innerHTML = str;
});

function render(data) {
    let str = "";
    if(data.layout === undefined) { return str; };
    
    if(data.layout === "list") {
        str = `<ul class="list">${data.content.map(item => `<li>${item}</li>`).join('')}</ul>`
    } else {
        str = data.content.map(item => `<p>${item}</p>`).join('');
    }
    return str;
}
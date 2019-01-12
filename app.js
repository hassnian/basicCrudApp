// Page loaded
function load(json){

    console.log(json);

}

const request = new XMLHttpRequest();
request.open("get", "data.json");
request.onload = () => {
    const json=JSON.parse(request.responseText);
    load(json);
}
request.send();
request.responseText;
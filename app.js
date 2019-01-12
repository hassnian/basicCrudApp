// When page is loaded
window.addEventListener('DOMContentLoaded',load());



// request
function load(){
    const request = new XMLHttpRequest();
    request.open("get", "data.json");
    request.onload = () => {
        try{
            const json=JSON.parse(request.responseText);
            // console.log(json);
            UI.addCountrie(json);
            
        }
        catch(e){
            console.warn("no se pudo cargar la página");
            
        }
        
    }
    request.send();
    request.responseText;

}

// UI
class UI{
    static addCountrie(json){
        
        const tbody=document.querySelector('#countries');
        json.forEach(cell => {
            UI.counter(this);
            const row=document.createElement('tr');
            row.innerHTML = `
        <td>${cell}</td>
        <td><input type="button" value="Edit" class="btn btn-light edit"></td>
        <td><input type="button" value="Delete" class="btn btn-light delete"></td>`;
        tbody.appendChild(row);
            console.log(cell);
        });

    }
// Counter of countries
    static counter(json){
        const counter=document.querySelector('#counter');
        // counter.innerHTML("hello");
        console.log(counter);
    }

}

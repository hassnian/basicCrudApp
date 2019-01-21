// request
function ajax() {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json",true);
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            // console.log(json);
            load(json);
            console.log(this.status)


        } catch (e) {
            console.warn("no se pudo cargar la página");

        }

    }
    request.send();
    request.responseText;

}

function load(json) {
   
    UI.addCountrie(json);
    UI.counterCountries(json);


}
// // old request
// function load() {
//     const request = new XMLHttpRequest();
//     request.open("get", "data.json");
//     request.onload = () => {
//         try {
//             const json = JSON.parse(request.responseText);
//             // console.log(json);
//             UI.addCountrie(json);
//             UI.counterCountries(json);


//         } catch (e) {
//             console.warn("no se pudo cargar la página");

//         }

//     }
//     request.send();
//     request.responseText;

// }

//class countrie
class Countrie{
    constructor(name,url){
        this.name=name;
        this.url=url;
    }
}



// UI
class UI {
    static addCountrie(json) {

        const tbody = document.querySelector('#countries');
        json.forEach(cell => {
            console.log(cell);
            // UI.counterCountries(json);
           
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${cell.name}</td>
            <td><img src="${cell.url}" height="30px"></td>
            <td><a href="#"  class="btn btn-light edit">Edit</a></td>
            <td><a href="#" class="btn btn-light delete">Delete</a></td>`;
            tbody.appendChild(row);
           
        });

    }




    //delete countrie
    static deleteCountrie(e) {
        if(e.target.classList.contains("delete")){
            // e.target.parentElement.parentElement.remove();
        //    const  req=new XMLHttpRequest();
        //     req.open("POST","data.json",true);
        //     req.setRequestHeader('Content-Type','text/plain');
        //     req.onreadystatechange=()=>{
        //       if(req.readyState==4 && req.status==200){
        //       console.log(req);
        //       }
        //     };
        //     req.send([a,2]);

        }

    }


    // Counter of countries
    static counterCountries(json) {
        if (json.length != 0) {
            const counter = document.querySelector('#counter');
            counter.firstChild.nodeValue="";
            let text = document.createTextNode(`${json.length} Countries`);
            counter.appendChild(text);
            counter.innerHTML()
            console.log(json.length);
        } else {
            const counter = document.querySelector('#counter');
            counter.firstChild.nodeValue="";
            let text = document.createTextNode(`0 Countries`);
            counter.appendChild(text);
            console.log(json.length);
            counter.innerHTML()
        }
    }

}
//Store
class Store{
    static deleteCountrie(e){
;
    }
}

// When page is loaded
window.addEventListener('DOMContentLoaded', ajax());
//if something its clicked 
document.querySelector('.container').addEventListener('click', (e) => {
    UI.deleteCountrie(e);
    // Store.deleteCountrie(e);


console.log(e.target);

    //UI.addCountrie
    

    
})
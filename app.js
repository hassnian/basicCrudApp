// request
function ajax() {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
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



// UI
class UI {
    static addCountrie(json) {

        const tbody = document.querySelector('#countries');
        json.forEach(cell => {
            // UI.counterCountries(json);
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${cell}</td>
            <td><a href="#" id="edit" class="btn btn-light edit">Edit</a></td>
            <td><a href="#" id="delete"class="btn btn-light delete">Delete</a></td>`;
            tbody.appendChild(row);
            console.log(cell);
        });

    }
    //delete countrie
    static deleteCountrie(json) {
        const row = document.querySelector('')

    }


    // Counter of countries
    static counterCountries(json) {
        if (json.length != 0) {
            const counter = document.querySelector('#counter');
            let text = document.createTextNode(`${json.length} Countries`);
            counter.appendChild(text);
            console.log(json.length);
            counter.innerHTML()
        } else {
            const counter = document.querySelector('#counter');
            let text = document.createTextNode(`0 Countries`);
            counter.appendChild(text);
            console.log(json.length);
            counter.innerHTML()
        }
    }

}
//Store
// class Store{
//     static {

//     }
// }

// When page is loaded
window.addEventListener('DOMContentLoaded', ajax());
//if something its clicked 
document.querySelector('.container').addEventListener('click', (e) => {
    // UI.deleteCountrie();
    console.log(e.target);
})
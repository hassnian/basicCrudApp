// request
function ajax() {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json", true);
    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
            const json = JSON.parse(request.responseText);
            load(json);
            console.log(this.status)

        } else {
            console.warn("no se pudo cargar la página");

        }



    }
    request.send();
    request.responseText;

}

function load(json) {

    UI.loadCountrie(json);
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
class Countrie {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}



// UI
class UI {
    static addCountrie(e) {
        if(e.target.id=="btn-new-coun"){
            const newAddCounField=document.querySelector('#add-name').value;
            const newAddUrlCounField=document.querySelector('#add-url').value;
            
            console.log(newAddUrlCounField);
            console.log(newAddCounField);
            const json={}
        }

    }
    static loadCountrie(json) {

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
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.parentElement.remove();
            const tosend = {
                name: "usa",
                url: "http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
            }
            var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance 
            xmlhttp.open("POST", "data.json", true);
            xmlhttp.setRequestHeader("Content-Type", "text/plain");
            console.log(xmlhttp);
            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {}
            }
            xmlhttp.send(JSON.stringify(tosend));


            //    const  req=new XMLHttpRequest();
            //     req.open("POST","data.json",true);
            //     req.setRequestHeader('Content-Type','');
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
            if (counter.firstChild !== null) {
                counter.firstChild.nodeValue = "";
            }
            let text = document.createTextNode(`${json.length} Countries`);
            counter.appendChild(text);
            counter.innerHTML;
            console.log(json.length + ' Countries');
        } else {
            const counter = document.querySelector('#counter');
            if (counter.firstChild !== null) {
                counter.firstChild.nodeValue = "";
            }
            let text = document.createTextNode(`0 Countries`);
            counter.appendChild(text);
            console.log(json.length);
            counter.innerHTML;
        }
    }

}
//Store
class Store {
    //add Countri to file
    static addCountrie(e) {;
    }
    //delete couentri from file
    static deleteCountrie(e) {;
    }

}

// When page is loaded
window.addEventListener('DOMContentLoaded', ajax());

//if something its clicked 
document.querySelector('.container').addEventListener('click', (e) => {
    UI.deleteCountrie(e);
    // Store.deleteCountrie(e);


    console.log(e.target);

    UI.addCountrie(e);



})
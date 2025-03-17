
let list = [];

function submitForm() {
    let user = {
        name: document.getElementById('Name').value,
        e_mail: document.getElementById('E-mail').value,
        age: document.getElementById('age').value
    };
    list.push(user);
    document.getElementById('Name').value = "";
    document.getElementById('E-mail').value = "";
    document.getElementById('age').value = "";
    displayTable();
}

function displayTable() {
    let output = document.getElementById('output');
    output.innerHTML = "";
    list.forEach(user => {
        let row = `<tr><td>${user.name}</td><td>${user.e_mail}</td><td>${user.age}</td></tr>`;
        output.innerHTML += row;
    });
}

function filterNames() {
    let filterInput = document.getElementById('filterInput').value.toLowerCase();
    let filteredList = list.filter(user => user.name.toLowerCase().includes(filterInput));
    let output = document.getElementById('output');
    output.innerHTML = "";
    filteredList.forEach(user => {
        let row = `<tr><td>${user.name}</td><td>${user.e_mail}</td><td>${user.age}</td></tr>`;
        output.innerHTML += row;
    });
}

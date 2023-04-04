const link = document.createElement('link');
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
link.rel = 'stylesheet';
document.head.appendChild(link);



const tableBody = document.querySelector('table');


const form = document.getElementById('student-form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    var nameInput = document.getElementById('name')
    var emailInput = document.getElementById('email')
    var ageInput = document.getElementById('age')
    var gpaInput = document.getElementById('gpa')
    var degreeInput = document.getElementById('degree')

    var id =  tableBody.rows.length
    var name = nameInput.value;
    var email = emailInput.value;
    var age = ageInput.value;
    var gpa = gpaInput.value;
    var degree = degreeInput.value;

    var newRow = document.createElement('tr')
    newRow.classList.add('search-class')

    var td0 = document.createElement('td')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')

    td0.textContent = id
    td1.textContent = name
    td2.textContent = email
    td3.textContent = age
    td4.textContent = gpa
  
    td5.innerHTML = degree+`<button class="fas fa-edit"></button>`+`<button class="delete-btn fas fa-trash-alt"></button>`


    newRow.appendChild(td0);
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    newRow.appendChild(td4);
    newRow.appendChild(td5);

    tableBody.appendChild(newRow);

    form.reset();

})


tableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const row = event.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
});

const searchInput = document.getElementById('searchInput');
const tableRows = document.getElementsByClassName('search-class')

searchInput.addEventListener('input', function() {

  const searchTerm = this.value.toLowerCase();

  for (let i = 0; i < tableRows.length; i++) {
    const tableData = tableRows[i].getElementsByTagName('td');
    let matchesSearch = false;
    for (let j = 0; j < tableData.length; j++) {
      const cellText = tableData[j].innerText.toLowerCase();
      if (cellText.includes(searchTerm)) {
          matchesSearch = true;
          break;
      }
    }
    if (matchesSearch) {
      tableRows[i].style.display = '';
  } else {
      tableRows[i].style.display = 'none';
  }
}
});
  
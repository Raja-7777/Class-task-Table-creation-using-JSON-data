const data = [
  {
    name: "suman",
    gender: "male",
    age: 38,
  },
  {
    name: "nitin",
    gender: "male",
    age: 32,
  },
  {
    name: "tanushree",
    gender: "female",
    age: 40,
  },
  {
    name: "krishna",
    gender: "female",
    age: 28,
  },
  {
    name: "iqbal",
    gender: "male",
    age: 18,
  },
  {
    name: "swetha",
    gender: "female",
    age: 39,
  },
];
let table_body = document.getElementById("table_body");
let tabledata = "";
let Input = document.getElementById("Input")
let Name = document.getElementById("Name");
let Gender = document.getElementById("Gender");
let Age = document.getElementById("Age");
let btn1 = document.getElementById("btn1");

data.map((values) => {
    tabledata += `<tr><td>${values.name}</td>
        <td>${values.gender}</td>
        <td>${values.age}</td> </tr>`;
})
document.getElementById("table_body").innerHTML = tabledata;

btn1.addEventListener("click",(ev) => {
    ev.preventDefault();
    let filter = input.value;
    let tr = table_body.getElementsByTagName("tr");
    console.log(tr);

    for(let i=0; i<tr.length; i++){
        let td1 = tr[i].getElementsByTagName("td")[0];
        let td2 = tr[i].getElementsByTagName("td")[1];
        let td3 = tr[i].getElementsByTagName("td")[2];
        
        if(td1 || td2 ||td3){
            let textvalue1 = td1.textContent || td1.innerHTML;
            let textvalue2 = td2.textContent || td2.innerHTML;
            let textvalue3 = td3.textContent || td3.innerHTML;
            if(textvalue1 == filter || textvalue2 == filter || textvalue3 == filter){
                alert(`
                Name:${td1.textContent}
                Gender:${td2.textContent}
                Age${td3.textContent}`)
            }
        }
    }
})
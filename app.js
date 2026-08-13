const customerList = JSON.parse(localStorage.getItem("customerList")) || [];

function btnAddcustomer() {
    // let customerId = document.getElementById("customerId").value;
    // let customerName = document.getElementById("customerName").value;
    // let customerAge = document.getElementById("customerAge").value;
    // let customerAddress = document.getElementById("customerAddress").value;

    let customer = {
        id: document.getElementById("customerId").value,
        name: document.getElementById("customerName").value,
        age: document.getElementById("customerAge").value,
        address: document.getElementById("customerAddress").value
    }

    // console.log(customer);
    customerList.push(customer);
    localStorage.setItem("customerList", JSON.stringify(customerList));
}

function btnSearchcustomer() {
    //alert("HUu");
    let custId = JSON.parse(localStorage.getItem("customerList"));
    let customer = custId.find(customer => {
        return customer.id === document.getElementById("customerId2").value
    });
    document.getElementById("nametxt").innerText = "name : " + customer.name;
    document.getElementById("agetxt").innerText = "age : " + customer.age;
    document.getElementById("addresstxt").innerText = "address : " + customer.address;
}

function btnDeletecustomer() {
    //alert("delete");
    let custId = JSON.parse(localStorage.getItem("customerList"));
    let index= custId.findIndex(customer => {
        return customer.id === document.getElementById("customerId3").value
    });
    custId.splice(index, 1);
    localStorage.setItem("customerList", JSON.stringify(custId));
}


function btnUpdatecustomer() {
    // alert("update");
    let custId = JSON.parse(localStorage.getItem("customerList"));
    let updatedList = custId.map(customer => customer.id === document.getElementById("customerId4").value ? {
        id: document.getElementById("customerId4").value,
        name: document.getElementById("customerName4").value,
        age: document.getElementById("customerAge4").value,
        address: document.getElementById("customerAddress4").value
    } : customer);

    localStorage.setItem("customerList", JSON.stringify(updatedList));
}

function btnCleardata() {
    localStorage.clear();
}
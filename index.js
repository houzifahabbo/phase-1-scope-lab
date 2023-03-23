var customerName = "bob";
const leastFavoriteCustomer = 'danti';
var bestCustomer ; 
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return customerName
}
function setBestCustomer(){
    bestCustomer = 'not bob'; 
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'; 
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'not danti'
}


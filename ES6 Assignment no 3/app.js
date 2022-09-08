let mobile = [
    
     {
            companyName : "iphone",
            mobileModule : "v13promax",
            storage : "256gb",
            ram : "8gb",
            price : "400,000"
        },
        {
            companyName : "iphone",
            mobileModule : "v13",
            storage : "256gb",
            ram : "8gb",
            price : "370,000" 

        },
        {
            companyName : "iphone",
            mobileModule : "v12",
            storage : "64gb",
            ram : "8gb",
            price : "175,000" 

        },
    
    
        {
            companyName : "samsung",
            mobileModule : "a13",
            storage : "128gb",
            ram : "4gb",
            price : "40,000"
        },
        {
            companyName : "samsung",
            mobileModule : "a32",
            storage : "128gb",
            ram : "6gb",
            price : "46,000"
        },
        {
            companyName : "samsung",
            mobileModule : "a73",
            storage : "256gb",
            ram : "8gb",
            price : "115,000"   
        },
    
    
        {
            companyName : "infinix",
            mobileModule : "smart6",
            storage : "64gb",
            ram : "3gb",
            price : "23,000"
        },
        {
            companyName : "infinix",
            mobileModule : "note12g96",
            storage : "128gb",
            ram : "8gb",
            price : "41,000"
        },
        {
            companyName : "infinix",
            mobileModule : "zeroxpro",
            storage : "128gb",
            ram : "8gb",
            price : "46,000"


        },
    {
            companyName : "xiomi",
            mobileModule : "realme",
            storage : "64gb",
            ram : "3gb",
            price : "23,000"
    },
    {
        companyName : "xiomi",
        mobileModule : "myme",
        storage : "128gb",
        ram : "8gb",
        price : "46,000"
    },
    {
        companyName : "xiomi",
        mobileModule : "readme",
        storage : "128gb",
        ram : "8gb",
        price : "41,000"

    }
     
    
]
let mobileCompany = document.getElementById('mobileCompany');
let mobileModel = document.getElementById('mobileModel');

let company = mobile.map(function(element){
    return element.companyName;
   
   

})
finalcompanies = new Set(company)
console.log(finalcompanies);
mobileCompany.innerHTML = ""
finalcompanies.forEach(function(values){
    mobileCompany.innerHTML += `<option>${values}</option>`

});

function fillKeys(){
    mobileModel.disabled = false;
    let mobileVersion = mobile.filter(function(element){
        if(element.companyName == mobileCompany.value){
            return element.mobileModule;
        }

    })
    final = mobileVersion
    console.log(final);

   mobileModel.innerHTML = "";
   final.forEach(function(value){
   mobileModel.innerHTML += `<option>${value.mobileModule}</option>`
   console.log(value)
   })
}


function searchNow(){
    let showNow = mobile.find(function(element){
        if(element.mobileModule == mobileModel.value){
            return element
        }
    })
    // console.log(showNow);

    let parent = document.getElementById("parent");
    parent.innerHTML = ""
    parent.innerHTML += `<div class="text-center fw-bold mt-5 ">
    <h1 class="fw-bold">Details</h1>
    <p class='mt-2 fs-4'>Price : ${showNow.price}</p>
    <p class='mt-2 fs-4'>Ram : ${showNow.ram}</p>
    <p class='mt-2 fs-4'>Storage : ${showNow.storage}</p></div>`
}
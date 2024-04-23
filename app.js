document.getElementById(`button_request`).addEventListener(`click`, getActivity);

let webURL = `http://www.boredapi.com/api/activity/`;
let webFilter = ``;

function getActivity(){
    webFilter = ``;
    let filter_price = document.getElementById(`filter_price`).value;
    if (filter_price == `none`){
        webFilter = ``;
    }else if(filter_price == `free`){
        webFilter = `?price=0.0`;
    }else{
        webFilter = `?price=`+ filter_price;
    }
    axios.request({  
        url: webURL + webFilter,  
    }).then(successFunction).catch(failureFunction);
}

function successFunction(request){
    // console.log(request)

    document.getElementById(`activity_container`).innerHTML = ``;
    document.getElementById(`activity_container`).insertAdjacentHTML(`beforeend`, `
    <h1>${request.data.activity}</h1>
    <h2>${request.data.price ? `$`+ request.data.price : `Free`}</h2>
    <h3><a href="${request.data.link}">${request.data.link}</a></h3>
    `)
}

function failureFunction(error){
    console.log(error)
}
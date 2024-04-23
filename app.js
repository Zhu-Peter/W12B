document.getElementById(`button_request`).addEventListener(`click`, getActivity);

webURL = `http://www.boredapi.com/api/activity/`;
webFilter = ``;

function getActivity(){
    axios.request({  
        url: webURL + webFilter,  
    }).then(successFunction).catch(failureFunction);
}

function successFunction(request){
    console.log(request)
    document.getElementById(`activity_container`).innerHTML = ``;
    document.getElementById(`activity_container`).insertAdjacentHTML(`beforeend`, `
    <h1>${request.data.activity}</h1>
    <h2>$${request.data.price}</h2>
    <h3><a href="${request.data.link}">${request.data.link}</a></h3>
    `)
}

function failureFunction(error){
    console.log(error)
}
document.getElementById(`button_request`).addEventListener(`click`, getActivity);

webURL = `http://www.boredapi.com/api/activity/`;
webFilter = ``;

function getActivity(){
    axios.request({  
        url: webURL + webFilter,  
    }).then(successFunction).catch(failureFunction);
}

function successFunction(request){
    document.getElementById(`activity_container`).insertAdjacentElement(`beforeend`, `
    <h1>${request.activity}</h1>
    <h2>$${request.price}</h2>
    <h3><a src="${request.link}"</h3>
    `)
}

function failureFunction(error){
    console.log(error)
}
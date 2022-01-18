var gunsay=0;

let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    var tarih = new Date();
    tarih.setDate(tarih.getDate() - gunsay);
    console.log(tarih);
    var tarihStr=tarih.getFullYear()+"-"+(tarih.getMonth()+1)+"-"+tarih.getDate();
    document.querySelector("#search").innerHTML = "Get Image of The Day ("+tarihStr+")";
    let API_KEY = "LofT2gRScksYb7z4EeIe1SvzbPcaVEbdJ31a6ibe"
    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key='+API_KEY+'&date='+tarihStr);
    //console.log(response)
    let data = await response.json()
    //console.log(data)
    useApiData(data)
    gunsay++;
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
    console.log(data);
    console.log(data.url);
    document.querySelector("#explanation").innerHTML = data.explanation;
    document.querySelector("#date").innerHTML = data.date;
    document.querySelector("#title").innerHTML = data.title;
    document.querySelector("#imageNasa").src = data.url;


}






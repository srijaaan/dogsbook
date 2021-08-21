// variable queries
var econ = document.getElementById('econtainer');
var ser = document.getElementById('search');
var serbtn = document.getElementById('serbtn')
var dog = document.getElementById('searchtxt')
var form = document.getElementById('form')

//navigation functions

serbtn.addEventListener('click', ()=>{ //search navigation function
    if(ser.style.display === 'none' && econ.style.display === 'block'){
        econ.style.display = 'none';
        ser.style.display = 'block';
    }else{
        econ.style.display = 'none';
        ser.style.display = 'block';
    }
})

function showecon(input){ //generalized navigation function
    parent = document.getElementById(input)
    if(ser.style.display === 'block' && econ.style.display === 'none'){
        econ.style.display = 'block';
        ser.style.display = 'none';
        parent.scrollIntoView();
    }else{
        parent.scrollIntoView();
    }
}

async function getimg(str, ref){

    let url = `https://api.thedogapi.com/v1/images/${ref}`
    let response = await fetch(url);
    let dimg = await response.json();
    str = dimg.url;
    return str;
}

function fillarr(obj, arr){
    var keys = Object.keys( obj );
    var objectLen = keys.length
    for(let i=0; i <= objectLen; i++){
        arr.push(obj[keys[i]])
    }
    console.log('from fillarr', arr)
}

async function getBreeds(){
    var myHeaders = new Headers();
    let dogarr=[]
    let str = ''
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "83ab2b1b-19ba-4ad0-ac08-6a99e7502a18");
    var formdata = new FormData();
    url=`https://api.thedogapi.com/v1/breeds/search?q=${dog.value}`
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    let response = await fetch(url, requestOptions)
    let dres = await response.json();
    fillarr(dres, dogarr)
    
    for(let i =0; i<dres.length; i++) {
        var ref = dogarr[i].reference_image_id
        let url2 = `https://api.thedogapi.com/v1/images/${ref}`
        let response2 = await fetch(url2);
        let dimg = await response2.json();
        str = dimg.url;
        
        let dogcont = document.createElement('div')
        dogcont.classList.add('dogcont')
        let img = document.createElement('img')
        img.setAttribute("id", "container__text_img")
        img.src = str
        let context = document.createElement('div')
        context.classList.add('container__text')
        let hi = document.createElement('h1')
        hi.setAttribute("id", "container__text_h1")
        hi.textContent = dogarr[i].name
        let pi = document.createElement('p')
        pi.setAttribute("id", "container__text_p")
        pi.textContent = "Breed For : " + dogarr[i].bred_for

        form.appendChild(dogcont)
        dogcont.appendChild(img)
        dogcont.appendChild(context)
        context.appendChild(hi)
        context.appendChild(pi)
    }

}



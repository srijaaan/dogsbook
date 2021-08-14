var econ = document.getElementById('econtainer');
var ser = document.getElementById('search');
var serbtn = document.getElementById('serbtn')



serbtn.addEventListener('click', ()=>{
    if(ser.style.display === 'none' && econ.style.display === 'block'){
        econ.style.display = 'none';
        ser.style.display = 'block';
    }else{
        econ.style.display = 'none';
        ser.style.display = 'block';
    }
})

function showecon(input){
    parent = document.getElementById(input)
    if(ser.style.display === 'block' && econ.style.display === 'none'){
        econ.style.display = 'block';
        ser.style.display = 'none';
        parent.scrollIntoView();
    }else{
        parent.scrollIntoView();
    }
}



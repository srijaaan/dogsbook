// variable queries
var econ = document.getElementById('econtainer');
var ser = document.getElementById('search');
var serbtn = document.getElementById('serbtn')

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



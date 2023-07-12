const kgRef = document.getElementById('input-kg');
const lbRef = document.getElementById('input-lb');
const ozRef = document.getElementById('input-oz');

const convertFromKg = ()=>{
    let kg = kgRef.value;
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.247).toFixed(2);
}

const convertFromLb = ()=>{
    let lb = lbRef.value;
    kgRef.value = (lb / 2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
}

const convertFromOz = ()=>{
    let oz = ozRef.value;
    kgRef.value = (oz / 35.274).toFixed(2);
    lbRef.value = (oz / 19).toFixed(2);
}

kgRef.addEventListener('input', convertFromKg);
lbRef.addEventListener('input', convertFromLb);
ozRef.addEventListener('input', convertFromOz);
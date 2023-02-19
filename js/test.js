document.getElementById('btn-add').addEventListener('click', function() {
    // console.log('add button clicked');
    const values = document.getElementById('input-field').value;
    values.innerText = '';
    // console.log(values);
    const createLi = document.getElementById('li-container');
    const li = document.createElement('li');
    li.innerText = values;
    li.classList.add('new-li');
    createLi.appendChild(li);
    const allLists = document.getElementsByTagName('li');
    for (const item of allLists) {
       item.addEventListener('click', function (e){
        // console.log(e.target);
        e.target.parentNode.removeChild(e.target);
       });
    }
});

document.getElementById('hit').addEventListener('click', function (){
    setInnertext('p-1','shanto');
    setInnertext('p-2','shupti');
    setInnertext('p-3','nabil');
    const inputValue = setInnertext('input-field');
    console.log(inputValue);
});

function setInnertext(id,value){
    document.getElementById(id).innerText = value;
    return value;
}
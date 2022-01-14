function makeNameDiv(){
    const name = document.createElement('div')
    name.classList.add('info');
    const title = document.createElement('h1')
    title.setAttribute('id', 'title')
    title.innerHTML = 'Omieshots'
    name.appendChild(title)
    const slogan = document.createElement('p')
    slogan.setAttribute('id', 'slogan')
    slogan.innerHTML = 'If it fresh, it ain\'t the best'
    name.appendChild(slogan)

    return name
}

function hoursDiv(){
    const hours = document.createElement('div');
    hours.classList.add('info');
    const SunthroughThurs = document.createElement('h3');
    SunthroughThurs.setAttribute('id','hours');
    SunthroughThurs.textContent = 'Sunday-Thursday: 10am-9pm';
    hours.appendChild(SunthroughThurs);
    const FrithroughSat = document.createElement('h3');
    FrithroughSat.setAttribute('id','hours');
    FrithroughSat.textContent = 'Friday-Saturday: 10am-12pm';
    hours.appendChild(FrithroughSat);

    return hours
}

function homePage(){
    const div = document.createElement('div');
    div.classList.add('container');

    //name of the restaurant
    div.appendChild(makeNameDiv())

    //hours
    div.appendChild(hoursDiv())

    return div;
}

function loadHome(){
    const content = document.getElementById('content')
    content.innerHTML = ''
    
    
    content.appendChild(homePage())
}

export default loadHome
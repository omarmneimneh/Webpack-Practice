function contactPage(){
    const div = document.createElement('div')
    div.classList.add('contacts')
    const contacts = [
        {
            'name': 'Cool Guy',
            'number': '703-242-5624',
            'email': 'coolGuyEmail@gmail.com'
        },
        {
            'name': 'Cool Lady',
            'number': '703-242-5625',
            'email': 'coolLadyEmail@gmail.com'
        },
        {
            'name': 'Cool Grandma',
            'number': '703-242-5626',
            'email': 'coolGrandmaEmail@gmail.com'
        }
    ]

    contacts.forEach(contact => {
        div.appendChild(createDivs(contact))
    });

    return div;
}

function createDivs(contact){
    const div = document.createElement('div')
    div.classList.add('contact')
    div.appendChild(nameDiv(contact.name))
    div.appendChild(numberDiv(contact.number))
    div.appendChild(emailDiv(contact.email))

    return div;
}

function nameDiv(name){
    const title = document.createElement('h2')
    title.setAttribute('id', 'desc')
    title.innerHTML = `${name}`

    return title;
}

function numberDiv(number){
    const numero = document.createElement('p')
    numero.setAttribute('id', 'desc')
    numero.innerHTML = `${number}`


    return numero;
}

function emailDiv(email){

    const emailrooski = document.createElement('p')
    emailrooski.setAttribute('id', 'desc')
    emailrooski.innerHTML = `${email}`

    return emailrooski;
}

function contactsLoader(){
    const content = document.getElementById('content')

    content.innerHTML = ''

    content.appendChild(contactPage())
}

export default contactsLoader
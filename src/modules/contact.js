function contactPage(){
    const div = document.createElement('div')
    div.classList.add('container')

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
        div.appendChild(nameDiv(contact.name))
        div.appendChild(numberDiv(contact.number))
        div.appendChild(emailDiv(contact.email))
    });

    return div;
}

function nameDiv(name){
    const div = document.createElement('div');
    div.classList.add('info')

    const title = document.createElement('h2')
    title.setAttribute('id', 'desc')
    title.innerHTML = `${name}`

    div.appendChild(title)

    return div;
}

function numberDiv(number){
    const div = document.createElement('div');
    div.classList.add('info')

    const numero = document.createElement('p')
    numero.setAttribute('id', 'desc')
    numero.innerHTML = `${number}`

    div.appendChild(numero)

    return div;
}

function emailDiv(email){
    const div = document.createElement('div');
    div.classList.add('info')

    const emailrooski = document.createElement('p')
    emailrooski.setAttribute('id', 'desc')
    emailrooski.innerHTML = `${email}`

    div.appendChild(emailrooski)

    return div;
}

function contactsLoader(){
    const content = document.getElementById('content')

    content.innerHTML = ''

    content.appendChild(contactPage())
}

export default contactsLoader
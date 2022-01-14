function createDivs(contact){
    const div = document.createElement('div')
    div.classList.add('contact')
    div.appendChild(nameDiv(contact.name))
    div.appendChild(descDiv(contact.description))
    div.appendChild(priceDiv(contact.price))

    return div;
}

function nameDiv(name){

    const title = document.createElement('h2')
    title.setAttribute('id', 'desc')
    title.innerHTML = `${name}`


    return title;
}

function descDiv(desc){

    const description = document.createElement('p')
    description.setAttribute('id', 'desc')
    description.innerHTML = `${desc}`


    return description;
}

function priceDiv(price){
    const amount = document.createElement('p')
    amount.setAttribute('id', 'desc')
    amount.innerHTML = `${price}`

    return amount;
}

function menu(){
    const div = document.createElement('div')
    div.classList.add('contacts')

    const items = [
        {
            'name' : 'Spaghetti and Meat Balls',
            'description' : 'Thin angel hair pasta cooked to perfect al dente smothered with the best red sauce you\'ve ever tasted and topped with hefty meatballs made grandma\'s way.',
            'price' : '15.00'
        },

    
        {
            'name': 'Ribeye Steak',
            'description' : 'Ribye steak cooked over charcoal to your desired doneness. Comes with a side of creamy mashed potatoes with a perfect ladle of beef gravy on top',
            'price': '25.00'
        },

        {
            'name': 'Hamburger',
            'description' : 'Perfect blend of chuck and short rib that creates the ultimate ratio of lean meat to fat. The patties are flattened on a hot skillet to achieve the most amount of that oh so delicious crust before they are seasoned with our in home secret blend. Wrapped in a buttery and toasted brioche bun, sitting atop our secret sauce, with your choice of toppings. Comes with a side of extra crispy french fries',
            'price': '15.00'
        },

        {
            'name': 'Cheeseburger',
            'description' : 'Hamburger with cheese',
            'price': '17.00'
        }
    ]

    items.forEach(item => {
        div.appendChild(createDivs(item))
    });

    return div;
}


function menuLoader(){
    const content = document.getElementById('content')
    content.innerHTML = ''
    content.appendChild(menu())
}


export default menuLoader
function nameDiv(name){
    const div = document.createElement('div');
    div.classList.add('info')

    const title = document.createElement('h2')
    title.setAttribute('id', 'desc')
    title.innerHTML = `${name}`

    div.appendChild(title)

    return div;
}

function descDiv(desc){
    const div = document.createElement('div');
    div.classList.add('info')

    const description = document.createElement('p')
    description.setAttribute('id', 'desc')
    description.innerHTML = `${desc}`

    div.appendChild(description)

    return div;
}

function priceDiv(price){
    const div = document.createElement('div');
    div.classList.add('info')

    const amount = document.createElement('p')
    amount.setAttribute('id', 'desc')
    amount.innerHTML = `${price}`

    div.appendChild(amount)

    return div;
}

function menu(){
    const div = document.createElement('div')
    div.classList.add('container')

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
        div.appendChild(nameDiv(item.name))
        div.appendChild(descDiv(item.description))
        div.appendChild(priceDiv(item.price))
    });

    return div;
}


function menuLoader(){
    const content = document.getElementById('content')
    content.innerHTML = ''
    content.appendChild(menu())
}


export default menuLoader
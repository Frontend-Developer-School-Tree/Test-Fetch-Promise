const fetchPromise = fetch(" https://api.predic8.de//shop/categories/Fruits");
fetchPromise.then(response => {
    return response.json();
})
    .then(fruits => {
        console.log(fruits);
        const div = document.querySelector(".classFruits");
        const ul = document.createElement("ul");
        fruits.products.map(elem => {
            const li = document.createElement("li");
            const h3 = document.createElement("h3");
            const myTpl = elem.name;
            h3.textContent = myTpl;
            li.appendChild(h3)
            ul.appendChild(li);
            div.appendChild(ul)
        })
    })



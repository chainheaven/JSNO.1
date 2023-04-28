let sortby_btn = document.getElementById('sortby_btn')
let sortby_opt = document.getElementsByClassName('sortby_opt')[0]

sortby_btn.addEventListener('click', () => {
    sortby_opt.classList.toggle('sortby_opt_active')
})

let newest = document.getElementById('newest')
let all_shoes = document.getElementById('all_shoes')
let low = document.getElementById('low')
let high = document.getElementById('high')

let url = "json.json"
let main_shoes_bx = document.getElementsByClassName('main_shoes_bx')[0]

fetch(url).then(Response => Response.json()).then((data) => {
    const all_shoes_array = [...data]
    const low_array = [...data]
    const high_array = [...data]
    const newest_array = data.splice(0, 8)

    data.forEach((el, i) => {
        const { Img, Name, Category, MRP, Price, Tag, Color } = el
        let card = document.createElement('a')
        card.classList.add('card')
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price}</h5>
                        <h5>MRP: <del>RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
        `
        main_shoes_bx.appendChild(card)
    });

    newest.addEventListener('click', () => {
        main_shoes_bx.innerHTML = ''
        sortby_btn.innerHTML = `
        <h5>Sort By:Newest</h5>
                            <i class="bi bi-chevron-down"></i>
        `
        sortby_opt.classList.toggle(`sortby_opt_active`)

        newest_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })

    all_shoes.addEventListener('click', () => {
        main_shoes_bx.innerHTML = ''
        sortby_btn.innerHTML = `
        <h5>Sort By:All</h5>
                            <i class="bi bi-chevron-down"></i>
        `
        sortby_opt.classList.toggle(`sortby_opt_active`)

        all_shoes_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })

    low.addEventListener('click', () => {
        main_shoes_bx.innerHTML = ''
        sortby_btn.innerHTML = `
        <h5>Sort By:Low</h5>
                            <i class="bi bi-chevron-down"></i>
        `
        sortby_opt.classList.toggle(`sortby_opt_active`)

        low_array.sort(({ Price: a }, { Price: b }) => a - b)

        low_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })

    high.addEventListener('click', () => {
        main_shoes_bx.innerHTML = ''
        sortby_btn.innerHTML = `
        <h5>Sort By:High</h5>
                            <i class="bi bi-chevron-down"></i>
        `
        sortby_opt.classList.toggle(`sortby_opt_active`)

        high_array.sort(({ Price: a }, { Price: b }) => a - b)
        high_array.reverse()

        high_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })

    let boot_array = all_shoes_array.filter((el) => {
        return el.Type === 'Boots'
    })

    let All_Main_filter_array = []

    let boots = document.getElementById('boots')

    boots.addEventListener('click', () => {
        if (boots.title === "boots_filter_on") {
            main_shoes_bx.innerHTML = ''
            boots.classList.toggle('i_active')
            boots.classList.toggle('bi-toggle2-off')
            boots.classList.toggle('bi-toggle2-on')
            boots.title = "boots_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(boot_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price}</h5>
                                <h5>MRP: <del>RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            boots.classList.toggle('i_active')
            boots.classList.toggle('bi-toggle2-off')
            boots.classList.toggle('bi-toggle2-on')
            boots.title = "boots_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return boot_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price}</h5>
                                <h5>MRP: <del>RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    // loafers

    let loafers_array = all_shoes_array.filter((el) => {
        return el.Type === 'Loafer'
    })

    let loafers = document.getElementById('loafers')

    loafers.addEventListener('click', () => {
        if (loafers.title === "loafers_filter_on") {
            main_shoes_bx.innerHTML = ''
            loafers.classList.toggle('i_active')
            loafers.classList.toggle('bi-toggle2-off')
            loafers.classList.toggle('bi-toggle2-on')
            loafers.title = "loafers_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(loafers_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price}</h5>
                                <h5>MRP: <del>RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            loafers.classList.toggle('i_active')
            loafers.classList.toggle('bi-toggle2-off')
            loafers.classList.toggle('bi-toggle2-on')
            loafers.title = "loafers_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return loafers_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price}</h5>
                                <h5>MRP: <del>RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })
    let right_input = document.getElementById('right_input')
    let left_input = document.getElementById('left_input')
    let left_input_icon = document.getElementById('left_input_icon')
    let right_input_icon = document.getElementById('right_input_icon')

    left_input.addEventListener('change', () => {
        let array_1000_50000 = all_shoes_array.filter((el) => {
            return el.Price <= 50000
        })
        left_input_icon.style.left = left_input.value + '%'
        let price_box_value_left = (50000 / 100) * left_input.value
        document.getElementById('left_input_price').innerText = (price_box_value_left)
        let array_1000_50000_left = array_1000_50000.filter((el) => {
            return el.Price >= price_box_value_left
        })
        main_shoes_bx.innerHTML = ''
        array_1000_50000_left.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })

    // right

    right_input.addEventListener('change', () => {
        right_input_icon.style.left = right_input.value + '%'
        let price_box_value_right = (50000 / 100) * right_input.value
        document.getElementById('right_input_price').innerText = (price_box_value_right + 50000)
        let array_50001_10000 = all_shoes_array.filter((el) => {
            return el.Price >= 50000
        })
        let array_1000_50000_right = array_50001_10000.filter((el) => {
            return el.Price >= (price_box_value_right + 50000)
        })
        main_shoes_bx.innerHTML = ''
        array_1000_50000_right.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })

    const color = ['white', 'gray-white', 'yellow', 'yellow-black',
        'orange', 'green', 'sky-blue', 'pink', 'red', 'blue', 'gray-black',
        'brown', 'black']

    Array.from(document.getElementsByClassName('color')).forEach((el, i) => {
        el.addEventListener('click', () => {
            const color_array = all_shoes_array.filter((el) => {
                return el.ColorTag === color[i]
            })
            main_shoes_bx.innerHTML = ''
            color_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
                <img src="${Img}" alt="${Name}">
                            <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price}</h5>
                                <h5>MRP: <del>RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        })
    })

    document.getElementsByClassName('colors')[0].addEventListener('click', () => {
        main_shoes_bx.innerHTML = ''
        all_shoes_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })

    // size

    const number = [4, 7, 9, 6, 5, 8, 10, 11.5, 9.5, 16, 17, 18, 11, 8.5]
    document.getElementsByClassName('size')[0].addEventListener('click', () => {
        main_shoes_bx.innerHTML = ''

        let number_array = all_shoes_array.filter((el) => {
            return el.Size4 === number[0]
        })
        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })

    document.getElementsByClassName('size')[1].addEventListener('click', () => {
        main_shoes_bx.innerHTML = ''

        let number_array = all_shoes_array.filter((el) => {
            return el.Size7 === number[1]
        })
        number_array.forEach((el, i) => {
            const { Img, Name, Category, MRP, Price, Tag, Color } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                        <h5 class="card_title" title="${Name}">${Name}</h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price}</h5>
                            <h5>MRP: <del>RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })
})


// let search_bx2 = document.getElementsByClassName('search_bx2')[0]

// window.addEventListener('load', () => {
//     // all_shoes.forEach(element => {
//     //     const { Img, Name, } = element

//     //     let card = document.createElement('a')
//     //     card.href = url
//     //     card.innerHTML = `<img src="${Img}" alt="">
//     //     <div class="content2">
//     //         <h6>"${Name}"</h6>
//     //     </div>`

//     all_shoes_array.forEach((el, i) => {
//         const { Img, Name } = el
//         let card = document.createElement('a')
//         card.classList.add('card')
//         card.href = url
//         card.innerHTML = `<img src="${Img}" alt="">
//         <div class="content2">
//              <h6>"${Name}"</h6>
//         </div>`


//         search_bx2.appendChild(card)
//     });
// })

const subscriptionLinks = document.querySelectorAll('ul li a');
const subscriptionLink = Array.from(subscriptionLinks).find(link => link.textContent === '新品訂閱');

subscriptionLink.addEventListener("click", function (event) {
    event.preventDefault();
    const email = prompt("請輸入您的電子信箱：");
    if (email !== null) {
        alert(`感謝您的訂閱！您的電子信箱為：${email}`);
    }
});

// const cont2 = document.querySelector('.ball .cont');
// let isShown3 = false;

// document.querySelector('.ball').addEventListener('click', () => {
//     if (!isShown) {
//         cont.style.display = 'block';
//         isShown = true;
//     } else {
//         cont.style.display = 'none';
//         isShown = false;
//     }
// });

const cont = document.querySelector('section .shoes_bx .main_shoes_bx .cont');
let isShown = false;

document.querySelector('section .shoes_bx .main_shoes_bx').addEventListener('click', () => {
    if (!isShown) {
        cont.style.display = 'block';
        isShown = true;
    } else {
        cont.style.display = 'none';
        isShown = false;
    }
});

const selectBx = document.querySelector('header .brand_nav ul li:nth-child(1) .select_bx');
const li = document.querySelector('header .brand_nav ul li:nth-child(1)');

li.addEventListener('click', () => {
    selectBx.classList.toggle('select_bx_active');
});
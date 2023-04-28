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
        const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
        let card = document.createElement('a')
        card.classList.add('card')
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                    <h5 class="card_title" title="${Name}">${Name}</h5>
                    <p>品牌:${Category} </p>
                    <div class="price">
                        <h5>折扣價 ${Price}</h5>
                        <h5>官方定價: <del> ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>折數 ${Color}</h6>
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
            const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>品牌:${Category} </p>
                <div class="price">
                    <h5>折扣價 ${Price}</h5>
                    <h5>官方定價: <del> ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>折數 ${Color}</h6>
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
            const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>品牌:${Category} </p>
                <div class="price">
                    <h5>折扣價 ${Price}</h5>
                    <h5>官方定價: <del> ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>折數 ${Color}</h6>
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
            const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>品牌:${Category} </p>
                <div class="price">
                    <h5>折扣價 ${Price}</h5>
                    <h5>官方定價: <del> ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>折數 ${Color}</h6>
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
            const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>品牌:${Category} </p>
                <div class="price">
                    <h5>折扣價 ${Price}</h5>
                    <h5>官方定價: <del> ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>折數 ${Color}</h6>
                    <h6>${Tag}</h6>
                        </div>
            `
            main_shoes_bx.appendChild(card)
        })
    })

    let Balenciaga_array = all_shoes_array.filter((el) => {
        return el.Brand === 'Balenciaga'
    })

    let All_Main_filter_array = []

    let Balenciaga = document.getElementById('Balenciaga')

    Balenciaga.addEventListener('click', () => {
        if (Balenciaga.title === "Balenciaga_filter_on") {
            main_shoes_bx.innerHTML = ''
            Balenciaga.classList.toggle('i_active')
            Balenciaga.classList.toggle('bi-toggle2-off')
            Balenciaga.classList.toggle('bi-toggle2-on')
            Balenciaga.title = "Balenciaga_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(Balenciaga_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            Balenciaga.classList.toggle('i_active')
            Balenciaga.classList.toggle('bi-toggle2-off')
            Balenciaga.classList.toggle('bi-toggle2-on')
            Balenciaga.title = "Balenciaga_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return Balenciaga_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    // lv

    let LouisVuitton_array = all_shoes_array.filter((el) => {
        return el.Brand === 'Louis Vuitton'
    })

    let LouisVuitton = document.getElementById('LouisVuitton')

    LouisVuitton.addEventListener('click', () => {
        if (LouisVuitton.title === "LouisVuitton_filter_on") {
            main_shoes_bx.innerHTML = ''
            LouisVuitton.classList.toggle('i_active')
            LouisVuitton.classList.toggle('bi-toggle2-off')
            LouisVuitton.classList.toggle('bi-toggle2-on')
            LouisVuitton.title = "LouisVuitton_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(LouisVuitton_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            LouisVuitton.classList.toggle('i_active')
            LouisVuitton.classList.toggle('bi-toggle2-off')
            LouisVuitton.classList.toggle('bi-toggle2-on')
            LouisVuitton.title = "LouisVuitton_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return LouisVuitton_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //amiri

    let AMIRI_array = all_shoes_array.filter((el) => {
        return el.Brand === 'AMIRI'
    })

    let AMIRI = document.getElementById('AMIRI')

    AMIRI.addEventListener('click', () => {
        if (AMIRI.title === "AMIRI_filter_on") {
            main_shoes_bx.innerHTML = ''
            AMIRI.classList.toggle('i_active')
            AMIRI.classList.toggle('bi-toggle2-off')
            AMIRI.classList.toggle('bi-toggle2-on')
            AMIRI.title = "AMIRI_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(AMIRI_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            AMIRI.classList.toggle('i_active')
            AMIRI.classList.toggle('bi-toggle2-off')
            AMIRI.classList.toggle('bi-toggle2-on')
            AMIRI.title = "AMIRI_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return AMIRI_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //BUR

    let Burberry_array = all_shoes_array.filter((el) => {
        return el.Brand === 'Burberry'
    })

    let Burberry = document.getElementById('Burberry')

    Burberry.addEventListener('click', () => {
        if (Burberry.title === "Burberry_filter_on") {
            main_shoes_bx.innerHTML = ''
            Burberry.classList.toggle('i_active')
            Burberry.classList.toggle('bi-toggle2-off')
            Burberry.classList.toggle('bi-toggle2-on')
            Burberry.title = "Burberry_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(Burberry_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            Burberry.classList.toggle('i_active')
            Burberry.classList.toggle('bi-toggle2-off')
            Burberry.classList.toggle('bi-toggle2-on')
            Burberry.title = "Burberry_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return Burberry_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //CH

    let CH_array = all_shoes_array.filter((el) => {
        return el.Brand === 'Chrome Hearts'
    })

    let CH = document.getElementById('CH')

    CH.addEventListener('click', () => {
        if (CH.title === "CH_filter_on") {
            main_shoes_bx.innerHTML = ''
            CH.classList.toggle('i_active')
            CH.classList.toggle('bi-toggle2-off')
            CH.classList.toggle('bi-toggle2-on')
            CH.title = "CH_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(CH_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            CH.classList.toggle('i_active')
            CH.classList.toggle('bi-toggle2-off')
            CH.classList.toggle('bi-toggle2-on')
            CH.title = "CH_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return CH_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //DIOR

    let Dior_array = all_shoes_array.filter((el) => {
        return el.Brand === 'Dior'
    })

    let Dior = document.getElementById('Dior')

    Dior.addEventListener('click', () => {
        if (Dior.title === "Dior_filter_on") {
            main_shoes_bx.innerHTML = ''
            Dior.classList.toggle('i_active')
            Dior.classList.toggle('bi-toggle2-off')
            Dior.classList.toggle('bi-toggle2-on')
            Dior.title = "Dior_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(Dior_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            Dior.classList.toggle('i_active')
            Dior.classList.toggle('bi-toggle2-off')
            Dior.classList.toggle('bi-toggle2-on')
            Dior.title = "Dior_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return Dior_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //GOY

    let Goyard_array = all_shoes_array.filter((el) => {
        return el.Brand === 'Goyard'
    })

    let Goyard = document.getElementById('Goyard')

    Goyard.addEventListener('click', () => {
        if (Goyard.title === "Goyard_filter_on") {
            main_shoes_bx.innerHTML = ''
            Goyard.classList.toggle('i_active')
            Goyard.classList.toggle('bi-toggle2-off')
            Goyard.classList.toggle('bi-toggle2-on')
            Goyard.title = "Goyard_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(Goyard_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            Goyard.classList.toggle('i_active')
            Goyard.classList.toggle('bi-toggle2-off')
            Goyard.classList.toggle('bi-toggle2-on')
            Goyard.title = "Goyard_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return Goyard_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //Gucci

    let Gucci_array = all_shoes_array.filter((el) => {
        return el.Brand === 'Gucci'
    })

    let Gucci = document.getElementById('Gucci')

    Gucci.addEventListener('click', () => {
        if (Gucci.title === "Gucci_filter_on") {
            main_shoes_bx.innerHTML = ''
            Gucci.classList.toggle('i_active')
            Gucci.classList.toggle('bi-toggle2-off')
            Gucci.classList.toggle('bi-toggle2-on')
            Gucci.title = "Gucci_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(Gucci_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            Gucci.classList.toggle('i_active')
            Gucci.classList.toggle('bi-toggle2-off')
            Gucci.classList.toggle('bi-toggle2-on')
            Gucci.title = "Gucci_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return Gucci_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //loewe

    let LOEWE_array = all_shoes_array.filter((el) => {
        return el.Brand === 'LOEWE'
    })

    let LOEWE = document.getElementById('LOEWE')

    LOEWE.addEventListener('click', () => {
        if (LOEWE.title === "LOEWE_filter_on") {
            main_shoes_bx.innerHTML = ''
            LOEWE.classList.toggle('i_active')
            LOEWE.classList.toggle('bi-toggle2-off')
            LOEWE.classList.toggle('bi-toggle2-on')
            LOEWE.title = "LOEWE_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(LOEWE_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            LOEWE.classList.toggle('i_active')
            LOEWE.classList.toggle('bi-toggle2-off')
            LOEWE.classList.toggle('bi-toggle2-on')
            LOEWE.title = "LOEWE_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return LOEWE_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //top

    let top_array = all_shoes_array.filter((el) => {
        return el.Type === 'top'
    })

    let top = document.getElementById('top')

    top.addEventListener('click', () => {
        if (top.title === "top_filter_on") {
            main_shoes_bx.innerHTML = ''
            top.classList.toggle('i_active')
            top.classList.toggle('bi-toggle2-off')
            top.classList.toggle('bi-toggle2-on')
            top.title = "top_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(top_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            top.classList.toggle('i_active')
            top.classList.toggle('bi-toggle2-off')
            top.classList.toggle('bi-toggle2-on')
            top.title = "top_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return top_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //down

    let down_array = all_shoes_array.filter((el) => {
        return el.Type === 'down'
    })

    let down = document.getElementById('down')

    down.addEventListener('click', () => {
        if (down.title === "down_filter_on") {
            main_shoes_bx.innerHTML = ''
            down.classList.toggle('i_active')
            down.classList.toggle('bi-toggle2-off')
            down.classList.toggle('bi-toggle2-on')
            down.title = "down_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(down_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            down.classList.toggle('i_active')
            down.classList.toggle('bi-toggle2-off')
            down.classList.toggle('bi-toggle2-on')
            down.title = "down_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return down_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //out

    let out_array = all_shoes_array.filter((el) => {
        return el.Type === 'out'
    })

    let out = document.getElementById('out')

    out.addEventListener('click', () => {
        if (out.title === "out_filter_on") {
            main_shoes_bx.innerHTML = ''
            out.classList.toggle('i_active')
            out.classList.toggle('bi-toggle2-off')
            out.classList.toggle('bi-toggle2-on')
            out.title = "out_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(out_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            out.classList.toggle('i_active')
            out.classList.toggle('bi-toggle2-off')
            out.classList.toggle('bi-toggle2-on')
            out.title = "out_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return out_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //bag

    let bag_array = all_shoes_array.filter((el) => {
        return el.Type === 'bag'
    })

    let bag = document.getElementById('bag')

    bag.addEventListener('click', () => {
        if (bag.title === "bag_filter_on") {
            main_shoes_bx.innerHTML = ''
            bag.classList.toggle('i_active')
            bag.classList.toggle('bi-toggle2-off')
            bag.classList.toggle('bi-toggle2-on')
            bag.title = "bag_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(bag_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            bag.classList.toggle('i_active')
            bag.classList.toggle('bi-toggle2-off')
            bag.classList.toggle('bi-toggle2-on')
            bag.title = "bag_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return bag_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //shoes

    let shoes_array = all_shoes_array.filter((el) => {
        return el.Type === 'shoes'
    })

    let shoes = document.getElementById('shoes')

    shoes.addEventListener('click', () => {
        if (shoes.title === "shoes_filter_on") {
            main_shoes_bx.innerHTML = ''
            shoes.classList.toggle('i_active')
            shoes.classList.toggle('bi-toggle2-off')
            shoes.classList.toggle('bi-toggle2-on')
            shoes.title = "shoes_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(shoes_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            shoes.classList.toggle('i_active')
            shoes.classList.toggle('bi-toggle2-off')
            shoes.classList.toggle('bi-toggle2-on')
            shoes.title = "shoes_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return shoes_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    // accessories

    let accessories_array = all_shoes_array.filter((el) => {
        return el.Type === 'accessories'
    })

    let accessories = document.getElementById('accessories')

    accessories.addEventListener('click', () => {
        if (accessories.title === "accessories_filter_on") {
            main_shoes_bx.innerHTML = ''
            accessories.classList.toggle('i_active')
            accessories.classList.toggle('bi-toggle2-off')
            accessories.classList.toggle('bi-toggle2-on')
            accessories.title = "accessories_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(accessories_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            accessories.classList.toggle('i_active')
            accessories.classList.toggle('bi-toggle2-off')
            accessories.classList.toggle('bi-toggle2-on')
            accessories.title = "accessories_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return accessories_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //P1預購

    let P1_array = all_shoes_array.filter((el) => {
        return el.Situation === 'P1'
    })

    let P1 = document.getElementById('P1')

    P1.addEventListener('click', () => {
        if (P1.title === "P1_filter_on") {
            main_shoes_bx.innerHTML = ''
            P1.classList.toggle('i_active')
            P1.classList.toggle('bi-toggle2-off')
            P1.classList.toggle('bi-toggle2-on')
            P1.title = "P1_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(P1_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            P1.classList.toggle('i_active')
            P1.classList.toggle('bi-toggle2-off')
            P1.classList.toggle('bi-toggle2-on')
            P1.title = "P1_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return P1_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //P2代購

    let P2_array = all_shoes_array.filter((el) => {
        return el.Situation === 'P2'
    })

    let P2 = document.getElementById('P2')

    P2.addEventListener('click', () => {
        if (P2.title === "P2_filter_on") {
            main_shoes_bx.innerHTML = ''
            P2.classList.toggle('i_active')
            P2.classList.toggle('bi-toggle2-off')
            P2.classList.toggle('bi-toggle2-on')
            P2.title = "P2_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(P2_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            P2.classList.toggle('i_active')
            P2.classList.toggle('bi-toggle2-off')
            P2.classList.toggle('bi-toggle2-on')
            P2.title = "P2_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return P2_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        }
    })

    //P3部分現貨

    let P3_array = all_shoes_array.filter((el) => {
        return el.Situation === 'P3'
    })

    let P3 = document.getElementById('P3')

    P3.addEventListener('click', () => {
        if (P3.title === "P3_filter_on") {
            main_shoes_bx.innerHTML = ''
            P3.classList.toggle('i_active')
            P3.classList.toggle('bi-toggle2-off')
            P3.classList.toggle('bi-toggle2-on')
            P3.title = "P3_filter_off"
            All_Main_filter_array = All_Main_filter_array.concat(P3_array)

            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                `
                main_shoes_bx.appendChild(card)
            })
        } else {
            main_shoes_bx.innerHTML = ''
            P3.classList.toggle('i_active')
            P3.classList.toggle('bi-toggle2-off')
            P3.classList.toggle('bi-toggle2-on')
            P3.title = "P3_filter_on"
            All_Main_filter_array = All_Main_filter_array.filter((el) => {
                return P3_array.indexOf(el) < 0
            })
            All_Main_filter_array.forEach((el, i) => {
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
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
            const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
            let card = document.createElement('a')
            card.classList.add('card')
            //console.log(${linkk})
            card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>品牌:${Category} </p>
                <div class="price">
                    <h5>折扣價 ${Price}</h5>
                    <h5>官方定價: <del> ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>折數 ${Color}</h6>
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
            const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>品牌:${Category} </p>
                <div class="price">
                    <h5>折扣價 ${Price}</h5>
                    <h5>官方定價: <del> ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>折數 ${Color}</h6>
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
                const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
                let card = document.createElement('a')
                card.classList.add('card')
                card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                            <p>品牌:${Category} </p>
                            <div class="price">
                                <h5>折扣價 ${Price}</h5>
                                <h5>官方定價: <del> ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>折數 ${Color}</h6>
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
            const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>品牌:${Category} </p>
                <div class="price">
                    <h5>折扣價 ${Price}</h5>
                    <h5>官方定價: <del> ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>折數 ${Color}</h6>
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
            const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>品牌:${Category} </p>
                <div class="price">
                    <h5>折扣價 ${Price}</h5>
                    <h5>官方定價: <del> ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>折數 ${Color}</h6>
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
            const { Img, Name, Category, MRP, Price, Tag, Color, linkk } = el
            let card = document.createElement('a')
            card.classList.add('card')
            card.innerHTML = `
            <a href="${linkk}">
                <img src="${Img}" alt="${Name}">
                <h5 class="card_title" title="${Name}">${Name}</h5>
                <p>品牌:${Category} </p>
                <div class="price">
                    <h5>折扣價 ${Price}</h5>
                    <h5>官方定價: <del> ${MRP}</del></h5>
                </div>
                <div class="color_tag">
                    <h6>折數 ${Color}</h6>
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


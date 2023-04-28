let SAS_array = all_shoes_array.filter((el) => {
    return el.Situation === 'SAS'
})

let SAS = document.getElementById('SAS')

SAS.addEventListener('click', () => {
    if (SAS.title === "SAS_filter_on") {
        main_shoes_bx.innerHTML = ''
        SAS.classList.toggle('i_active')
        SAS.classList.toggle('bi-toggle2-off')
        SAS.classList.toggle('bi-toggle2-on')
        SAS.title = "SAS_filter_off"
        All_Main_filter_array = All_Main_filter_array.concat(SAS_array)

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
        SAS.classList.toggle('i_active')
        SAS.classList.toggle('bi-toggle2-off')
        SAS.classList.toggle('bi-toggle2-on')
        SAS.title = "SAS_filter_on"
        All_Main_filter_array = All_Main_filter_array.filter((el) => {
            return SAS_array.indexOf(el) < 0
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

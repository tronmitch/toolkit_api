var json = "./assets/toolkit_commands.json"
var csv = "./assets/toolkit_commands.csv"
const commandListElements = $('#command-list')
const commnadCardElements = $('#command-card')
// console.log(json)
// console.log(csv)
fetch(json).then((response)=> response.json()).then(data => {
    // console.log(data)
    console.log(data.find(obj=>{
        console.log(obj['Command'])
        const commandTitle = obj['Command'].charAt(0).toUpperCase() + obj['Command'].slice(1)
        const description = obj['ShortDescription']
        const example = obj['example']
        commandListElements.append(`<li id="${obj['Command']}">${obj['Command']}</li>`)
        // commnadCardElements.append(`<section class="cards">\n
        //                                 <h2>${commandTitle}</h2>\n 
        //                                 <p class="description">${description}</p>\n
        //                                 <p class="syntax">${example}</p>\n
        //                             </section>`)

    }))       
})



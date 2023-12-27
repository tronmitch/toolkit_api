var json = "./assets/toolkit_commands.json"
var csv = "./assets/toolkit_commands.csv"
const commandListElements = $('#command-list')
const commnadCardElements = $('#command-card')
// console.log(json)
// console.log(csv)
fetch(json).then((response)=> response.json()).then(data => {
    // console.log(data)
    console.log(data.find(obj=>{
        console.log(obj['syntax'])
        const command = obj['Command']
        const commandTitle = command.charAt(0).toUpperCase() + obj['Command'].slice(1)
        const shortDescription =  obj['ShortDescription'].toLowerCase()
        const longDexcription = obj['LongDesciption']
        const syntax = obj['syntax']
        const example =obj['example']
        commandListElements.append(`<a href="#${command}"><li>${command}</li></a>`)
        commnadCardElements.append(`<section id=${command} class="cards">
                                        <div class="title-description">
                                            <h2>${commandTitle}</h2><p> - ${shortDescription} </p>
                                        </div><br>\n
                                        <p class="description">${longDexcription}</p><br>
                                        <p class="syntax">syntax: ${syntax}</p>
                                        <p class="example">example: ${example}</p>
                                    </section>`)

    }))       
})


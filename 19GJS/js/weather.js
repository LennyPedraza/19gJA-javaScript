let clima = prompt('De acuerdo a las siguientes opciones, digita cual corresponde al clima en tu ciudad a. Soleado , b. lluvioso, c.Nevando o d. Nublado', 'a')

let celsius = parseInt(prompt('Digita la temperatura aproximada en tu ciudad'))

let far = parseInt(celsius) * 9/5 + 32

switch (clima) {
    case 'a' : 
        let messageToShow = `Tu ciudad se encuentra soleado y con una temperatura actual de ${far} ºF`
        window.alert(messageToShow) 
        break
    case 'b' :
        messageToShow = `Tu ciudad se encuentra lluvioso y con una temperatura actual de ${far} ºF`
        window.alert(messageToShow) 
        break
    case 'c' :
        messageToShow = `Tu ciudad se encuentra nevando y con una temperatura actual de ${far} ºF`
        window.alert(messageToShow) 
        break
    case 'd' :
        messageToShow = `Tu ciudad se encuentra nublado y con una temperatura actual de ${far} ºF`
        window.alert(messageToShow) 
        break
    default :
        messageToShow =`Opción invalida solo puedes colocar a, b , c o d`
        break
}


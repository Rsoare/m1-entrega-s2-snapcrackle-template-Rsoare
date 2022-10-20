function snapCrackle(maxValue) {
    let nomes = ["Snap", "SnapCrackle", "Crackle"]
    let stringConcatenada = []
    let numeros = " "
    for (let cont = 1; cont <= maxValue; cont++) {
        if (cont % 2 == 1 && cont % 5 == 0) {
            numeros = cont
            numeros = nomes[1]
            stringConcatenada.push(numeros)
        } else if (cont % 2 !== 1 && cont % 5 !== 0) {
            numeros = cont
            stringConcatenada.push(numeros)
        } else if (cont % 2 == 1) {
            numeros = cont
            numeros = nomes[0]
            stringConcatenada.push(numeros)
        } else if (cont % 5 == 0) {
            numeros = cont
            numeros = nomes[2]
            stringConcatenada.push(numeros)
        }
    } return (stringConcatenada)
}
console.log(snapCrackle(12))
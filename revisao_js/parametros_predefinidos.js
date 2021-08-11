// forma é um paramtetro opcional. Sendo assim, ele não precisa ser informado
//na chamada da função. Caso tenha sido omitido, assumirá o valor 'R'.


function areaForma(base, altura, forma = 'R'){  //por padrão será R, a não ser que troque manualmente como linha 21'
    let area
    switch(forma) {
        case 'R': // Retangulo
            area = base * altura
            break
        case 'T': // Triangulo
            area = base * altura / 2
            break
        case 'E':
            area = (base / 2) * (altura / 2) * Math.PI
    }
    return area
}

console.log(`Retângulo 45x15: ${areaForma(45, 15)}`)
console.log(`Triângulo 13x8: ${areaForma(13, 8, 'T')}`)
console.log(`Elipse 12x16: ${areaForma(12, 16, 'E')}`)
console.log(`Quadrado de 6.5x6.5: ${areaForma(6.5, 6.5)}`)


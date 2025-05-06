let num = [5 , 2 , 8 , 9 , 3]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições.` )
console.log(`o terceiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`o valor está na posição ${pos}`)
}

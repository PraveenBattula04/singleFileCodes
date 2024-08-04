const str = 'Z have interviewiamorrow ahbjbknk ddvdfddcdcscs'

const strAr = str.split(' ');

const finalWord = {}
for (let i = 0; i < strAr.length; i++) {
    finalWord[strAr[i].length] = [strAr[i], 'io']
}

const finalwordAr = Object.keys(finalWord)
// console.log(finalWord[finalwordAr.at(-1)][0], finalWord)

console.log(finalwordAr.map(e => {
    return e
}))

console.log(finalwordAr.forEach(e => e === '4'))
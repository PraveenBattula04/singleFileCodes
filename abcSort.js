const arr = ['d', 'b', 'a', 'z', 'f', 'i', 12, 12]

const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// console.log(arr.sort())
const obj = {}
const re = []
for (let i = 0; i < arr.length; i++) {
    const char = arr[i];obj[char]?.count
    obj[char] = { place: chars.indexOf(char), count: obj[char]?.count ? ++obj[char].count : 1 }
}
for (prop in obj) {
    const count = obj[prop].count
    if (count > 1) {
        for (let j = 0; j < count; j++) re.push(prop);
    } else re.push(prop)
}
console.log(obj, re)
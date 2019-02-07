import '@babel/polyfill';

const sankaku = (teihen,takasa) =>{
    return teihen * takasa / 2
}

console.log(sankaku(20,4))


const en = (hankei) => hankei * hankei * 3.14
console.log(en(10))


const hairetu = [2,5,7,9,14]
const includeskekka = (hairetu.includes(14))? '含まれています':'含まれていない'
const includeskekka2 = (hairetu.includes(8))? '含まれています':'含まれていない'
console.log(includeskekka)
console.log(includeskekka2)

const hiduke = '2019/2/19'
const [yy,mm,dd] = hiduke.split('/')
console.log(yy+'年'+mm+'月'+dd+'日')

const nimotu = [8,9,10,11,12,14]
const souko = [2,3,4,5]
const okiya = [3,4,5,...nimotu]
console.log(nimotu)
console.log(okiya)


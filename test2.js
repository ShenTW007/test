//陣列 Array
let classA = ['小明','小白','小活','小雞']
console.log('轉學前：',classA)
classA.push ('小黃')
console.log('轉學後：',classA)

let igPhotos = [
    'www.xxx.img.com/a1.png',
    'www.xxx.img.com/a2.png',
    'www.xxx.img.com/a3.png'
]
console.log('第1筆',igPhotos[0])// index = 0
console.log('第2筆',igPhotos[1])
console.log('第3筆',igPhotos[2])
console.log('第4筆',igPhotos[3])

console.log('igPhoto',igPhotos)
console.log('igPhoto',igPhotos.length)
console.log(classA.length)
//物件 Object
const card = {
    name:'沈雞雞的名片',
    addres:'屏東縣XXX',
    age:20,
}

console.log('名片',card)
console.log('名片',card.addres)

const post = {
    photo: 'www.xxx.img.com/a1.png',
    desc: '這是一張照片',
    date: '2022/02/02',
    comment: ['好漂亮', '我也想去', '真美']
}

const post2 = {
    photo: 'www.xxx.img.com/a2.png',
    desc: '是垃圾片',
    date: '2022/02/03',
    comment: ['醜爆了', '好噁','我好廢']
    }

const wall = [
    post,
    post2
] 
console.log('wall',wall)
// for 迴圈

//let a = 10
//a = a + 10
//console.log('a：',a)

//for ( let b = 0; b < 10 ; b=b+1 ) {
    //console.log('b：',b)
//}

//b++ => b=b+1
//b+=2 => b=b+2

//3個人的班級
let classA = [100,70,58,46,98,55]
classA.push(12)
console.log('classA',classA)
//console.log('分數：',classA[0])
//console.log('分數：',classA[1])
//console.log('分數：',classA[2])
//console.log('分數：',classA[n])->index
//已知迴圈跑三次

for( let i=0 ; i < classA.length ; i=i+1 ){
    console.log('i：',classA[i])
}

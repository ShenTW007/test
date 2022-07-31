// if的用法
//true or false
//let condition = 100 < 50
//console.log('condition', condition)

//if (condition) {
//console.log('確實大於50')    
//}//當我們的條件成立要做的事情//如果條件成立
//else{
    //console.log('錯誤')    
//}//當我們的條件沒有成立要做的事情//若條件布成立時

//+ - * /算數運算子
//&& || !/邏輯運算子

//&&兩邊都是true,結果才是true (and概念)
//||兩邊只要有一邊是true,結果就是true (or概念)
//!把結果反向 
//let condition = !(true || false) 
//console.log('condition',condition)

let scoreA =100
let scoreB = 100
let condition = scoreA === scoreB
console.log('condition',condition)
 // ===是否等於(有比較的用意)
 // > , < , >= , <= , !==(兩邊不相等)

 if (scoreA > scoreB){
    console.log('A考的比較高分')
 }
else{console.log('B考的比較高分')}

let score = 59
if( score ===100 ){
    console.log('好棒棒')
}else if( score >= 80 ){
    console.log('還不錯')
}else if( score >= 70 ){
    console.log('加油喔')
}else if( score >= 60 ){
    console.log('低空飛過')
}else{console.log('不及格')}


//switch case

let key =3
00
switch (key) {
    case 100:
        console.log('考了100分')
        break;
    case 200:
        console.log('考了200分')
        break;
    case 300:
            console.log('考了300分')
            break;
    default:
        console.log('沒去考試')   
        break;
}
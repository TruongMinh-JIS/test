// hàm
// function writeLog(){
//     var myString='';
//     for(var text of arguments){
//         myString += `${text} - `
//     }
//     console.log(myString);
// }
// writeLog('log1','log2')

// function fibonacci(num){

//     var a = 1, b = 0, temp;
  
//     while (num > 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
  
//     return b;
// }


// function fibonacci(){
//     var n=document.getElementById("n").value;
//     console.log(n);
//     var a = 1, b = 0;
//     let arr="";

  
//         while (n > 0){
//           arr = a;
//           a = a + b;
//           b = temp;
//           n--;
//         }
      
    
// }


//Object trong JS
// var myInfo={
//   name: 'Truong Minh',
//   age: '20'
// }

// //add thêm key vào oj
// myInfo.mail='mamsdmmad@gmail';
// //lấy key ra
// myInfo.name;
// console.log(myInfo.name);
// //xóa key
// delete myInfo.age;

// Tạo Object Constructor

// function User(firstName,lastname,avatar){
//   this.firstName=firstName;
//   this.lastname=lastname;
//   this.avatar=avatar;
//   this.getName=function(){
//     return `${firstName} ${lastname}`;
//   }
// }

// var author=new User();
// var user=new User();

// // Tạo Object prototype
// User.prototype.className='f8';//thêm thuộc tính
// User.prototype.getClassName=function(){
//   return this.className;
// }


// Xóa các phần tử trùng lapwjtrong một mãng ko dùng cái hàm của js
// 1/ sử dụng set
//var arr=['a','b','c','a','b','c'];
//cái này trả về đối tượng set 
//console.log(new Set(arr));
// cách để bỏ đối tượng set chỉ trả về value
//console.log([...(new Set(arr))]);

// Đệ quy
// function countDown(num){
//   if(num>0){
//     console.log(num);
//     return countDown(num-1)
//   }
// }
// countDown(5);

// vòng lặp reduce()
//Flat-"làm phẳng" mảng từ Depth aray-"Mảng sâu"
// var  depthArray=[1,2,[3,4],5,6,[7,8,9]];
// var flatArray=depthArray.reduce(function(flatoutput,depthItem){
//   return flatoutput.concat(depthItem)
// },[])
// console.log(flatArray);

// Tạo ra phương thức reduce của riêng mình

// Array.prototype.reduce2=function(callback,result){
//   let i =0;
//   if(arguments.length<2){
//     i=1;
//     result=this[0];
//   }
//   for(;i<this.length;i++){
//     result=callback(result,this[i],i,this)
//   }
//   return result;
// }
// const number=[1,2,3,4,5];

// const result =number.reduce2((total,number)=>{
//   return total+number;
// })
// console.log(result)

// forEach, find, filter, some, every, reduce

// var courses=[
//   'Java',
//   'C++',
//   'PHP'
// ]

// myforEach (ko có return)
// Array.prototype.myforEach = function(callback){
//   for(var index in this){
//     if(this.hasOwnProperty(index)){ //dùng để duyệt và loại bỏ các phần tử mới tạo trong prototy
//       callback(this[index],index,this)
//     }
//   }
// }

// courses.myforEach(function(course,index,arr){
//   console.log(course,index,arr);
// })

var courses=[
  {
    name:'Java',
    coin: 200,
    isFinish: true
  },

  {
    name:'PHP',
    coin: 300,
    isFinish: true
  },
  {
    name:'PHP',
    coin: 300,
    isFinish: false
  }

];

// myFilter
// Array.prototype.myFilter=function(callback){
//   var output=[];
//   for(var index in this){
//     if(this.hasOwnProperty(index)){
//       var result = callback(this[index],index,this)
//       if(result){
//         output.push(this[index]);
//       }
//     }
//   }
//   return output;
// }

// var f=courses.myFilter(function(course,index,arr){
//   return course.coin>200;
// });
// console.log(f);

// mySome : trả về true tối thiểu 'đúng' 1 cái ( kiểm tra có đúng ko)
// Array.prototype.mySome=function(callback){
//   for(var index in this){
//     if(this.hasOwnProperty(index)){
//       if(callback(this[index],index,this)){
//         return true;
//       };
//     }
//   }
//   return false;
// }

// var result=courses.mySome(function(course,index,arr){
//   return course.isFinish;
// });
// console.log(result);

// myEvery trả về đúng hoặc sai 
// Array.prototype.myEvery=function(callback){
//   var output=true;
//     for(var index in this){
//       if(this.hasOwnProperty(index)){
//         var result = callback (this[index],index,this);
//         if(!result){
//           output=false;
//           break;
//         }
//       }
//     }
//     return output;
//   }

// var result=courses.myEvery(function(course,index,arr){
//   return course.isFinish;
// });

// console.log(result);

//InnerHTML vs OuterHTML
var boxElement =document.querySelector('.box')

boxElement.innerHTML='<h1 color="#333">Heloo</h1>'
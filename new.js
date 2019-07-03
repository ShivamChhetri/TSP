let points=[];
let point=7;
let fac= fact(point);
let count=0;
// let a=[2,3];
// let b=[7,9];
// let c=[3,5];
// let d=[6,7];
// points.push(a);points.push(b);points.push(c);points.push(d);

for (let i = 0; i < point; i++) {
   let a= Math.random()*10+1;
   let b= Math.random()*10+1;
   let pnt=[a,b];
   points.push(pnt);   
}

console.log(fac);
let path;
let short=[];
function lexico(arr){
    
    let largestX;
    path=calcDis(arr);
    do{
        console.log(((count/fac)*100)+"%");
        count++;
        let tempDis=calcDis(arr);
        // console.log(tempDis);
        if(path>tempDis){
            // console.log("!");
            short=arr;
            path=tempDis;
        }
        // console.log(arr);
        largestX=-1;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]<arr[i+1]){
                largestX=i;
            }
        }
        let largestY;
        for (let i = 0; i < arr.length; i++) {
            if(arr[largestX]<arr[i]){
                largestY=i;
            }
        }
    
        let temp=arr[largestX];
        arr[largestX]= arr[largestY];
        arr[largestY]= temp;
    
        let endArr= arr.slice(largestX+1,arr.length);
        let startArr= arr.slice(0,largestX+1);
        endArr.reverse();
        arr= startArr.concat(endArr);
    }while(largestX!=-1);
}



function calcDis(localPoints){
    let totalDis=0;
    for (let i = 0; i < localPoints.length; i++) {
        for (let j = 0; j < localPoints[i].length; j++) {
            let x1=localPoints[i][0];
            let y1=localPoints[i][1];
            let x2=localPoints[j][0];
            let y2=localPoints[j][1];
            let delX= x2-x1;
            let delY= y2-y1;
            dis= Math.sqrt(Math.pow(delX,2)+Math.pow(delY,2));
            totalDis+=dis;
        }
    }
    return totalDis;
}
lexico(points);
console.log("shortest distance: "+path);
// console.log("path: "+short);

function fact(num){
    let factorial=1;
    for(let i=1;i<=num;i++){
        factorial*=i;
    }
    return factorial;
}

// ------------Problem 1----------
let txt="the quick brown fox";
function Capitalized(param){
   return param.split(" ").map(word=> {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    
}
let capStr = Capitalized(txt);
console.log("problem 1:")
console.log(capStr);

// ------------Problem 2----------
function Max_num(...param){
    let paramMax=param[0];
    for(let i =1;i<param.length;i++){
        if(param[i]>paramMax){
            paramMax=param[i];
            
        }
    }
    return paramMax;
}
console.log("problem 2:")
console.log(Max_num(1,2,5,3));

// ------------Problem 3----------

function Move_three(param){
    if(param.length<3){
        return "Please add three or more than three letters";
    }
    else{
    let last = param.slice(-3);
    let first = param.slice(0,-3);
    let result = last.concat(first);
    return result;
    }

    
}

console.log("problem 3:")
console.log(Move_three("python"));
console.log(Move_three("hot"));
console.log(Move_three("on"));

// ------------Problem 4----------

function Finding_angle(param){
    if(param > 0 && param < 90){
        return "Acute Angle";
    }
     else if(param===90){
        return "Right Angle";
    }
    else if(param > 90 && param < 180){
        return "Obtuse Angle";
    }
    else if(param===180){
        return "Straight Angle";
    }


}
console.log("problem 4:")
console.log(Finding_angle(47));
console.log(Finding_angle(90));
console.log(Finding_angle(120));
console.log(Finding_angle(180));
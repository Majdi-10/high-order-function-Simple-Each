 function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i]); 
       } 
 }

var numbers =[1,2,3,4,5,6,7,8];

var sumSquares =function(array){
 var total = 0;
 each(array,function(number){
  total = total+(number**2)
 });
 return total;
}

var sumCubes =function(array){
  var total = 0;
  each(array,function(number){
    total = total + (number**3)
  });
   return total;
};

var product =function(array){
  var prod = 1;
  for(var i =0; i<array.length; i++){
    if(array[i]===0){
      return 1
    }
    if(array[i]!==0){
      prod=prod*array[i]
    }
     
    }
    return prod
  }

  var productEach=function(array){
    var prodE = 1;
    each(array,function(number){
      prodE = prodE*number
    });
    return prodE;
  }

  var cubeAll =function(array){
    var are =[];
    for(var i = 0; i<array.length; i++){
      are.push(array[i]**3)
    }
    return are;
  }

  var cubeAllEach =function(array){
    var areE =[];
    each(array,function(number){
      areE.push(number**3)
    });
    return areE;
  };

  var odds =function(array){
    var arro = [];
    for(var i = 0; i<array.length; i++){
      if(array[i] %2===1){
        arro.push(array[i])
      }
    }
    return arro;
  };

  var oddsEach =function(array){
    var arroE = [];
    each(array,function(number){
      if(number%2===1){
        arroE.push(number)
      }
    });
    return arroE;
  };

var sumByAllElementsMultipliedByFour =function(array){
  var result = 0;
  for(var i = 0; i<array.length; i++){
    result = result + (array[i]*4)
  }
  return result
};

var sumByAllElementsMultipliedByFourEach =function(array){
  var resultE = 0;
  each(array,function(number){
    resultE = resultE +(number*4)
  });
  return resultE;
}

var sumBy =function(array,func){
  var result = 0;
  for(var i = 0; i<array.length; i++){
    result = result + func(array[i])
  }
  return result;
}

var productBy =function(array,func){
  var result = 0;
  for(var i = 0; i<array.length; i++){
    result = result + func(array[i])
  }
  return result;
}

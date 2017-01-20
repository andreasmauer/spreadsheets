function toMil2(format){
  
  //format = '10.5 x 11 cm';
  
  //format = 'Square 10.5 cm';

  Utilities.sleep(100);
  var finalArray = [];
  
  if (format.indexOf(' x ') > -1){
  
      // split
    a = format.split(' ');
    
    // define the position of x
    index = a.indexOf('x');
    
    // eliminate('cm')
    cmIndex = a.indexOf('cm');
    delete a[cmIndex];    
    
    // change element on array
    a[index-1] = a[index-1]*10 + 'x' + a[index+1]*10 + 'mm'; 
    //a[index+1] = a[index+1]*10 + 'mm';
    
    // delete empties
    delete a[index];
    delete a[index+1];
    
    // reindex array
    for (var i = 0; i < a.length; i++){
      
      if((a[i] != 'undefined') && (a[i] != null)){
      
        finalArray.push(a[i]);
      };
    
    };
   
     Logger.log(finalArray.join('-'));
    return(finalArray.join('-'));
   
  
  
  }
  
  
  else if (format.indexOf('cm') > -1){
  
    // split the format 
    
    a = format.split(' ');
    
    // define the position of cm in array
    index = a.indexOf('cm');
    
    
    // multiple the array before cm x 10 and return it with mm
    a[index-1] = a[index-1]*10 + 'mm';
    
    //delete cm
    delete a[index];
    
    
    // reindex array
    for (var i = 0; i < a.length; i++){
      
      if((a[i] != 'undefined') && (a[i] != null)){
      
        finalArray.push(a[i]);
      };
    
    };
    
    return(finalArray.join('-'));
    
  }
  
  else {
  
    return ('');
    
  };
  



};

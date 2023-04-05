
document.getElementById('triangle-btn').addEventListener('click', function(){

    const triangleField= document.getElementById('triangle-base-field');
    const triangleFieldString=triangleField.value;
    const triangleNumberField= parseInt(triangleFieldString);
    
    const triangleHeightField=document.getElementById('triangle-height-field');
    const triangleHeightFieldString=triangleHeightField.value;
    const triangleHeightNumber= parseInt(triangleHeightFieldString);
    
    const sum= 0.5*triangleNumberField*triangleHeightNumber;
    const totalArea= sum.toFixed(2);

    // warnings
    if(triangleFieldString < 0 || triangleHeightFieldString < 0){
        alert("Please provide a positive number!");
        triangleResultDisplay.style.display='none';
        
    }
    else if(triangleFieldString==='' || triangleHeightFieldString === ''){
        alert("This field is blank!!!");
        triangleResultDisplay.style.display='none';
       
    }
    else if( isNaN(triangleFieldString) || isNaN(triangleHeightFieldString)){
        alert("Please add only Numbers!!!");
        triangleResultDisplay.style.display='none';
       
    }



   const triangleResultDisplay= document.getElementById('triangle-result-display');
   const triangleResult= document.getElementById('triangle-result');
   triangleResult.innerText= totalArea;
   
   triangleResultDisplay.style.display='block';
   triangleField.value='';
   triangleHeightField.value='';
});
  
// ============================ Rectangle Section ===================================  
    
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidthField= document.getElementById('rectangle-width');
    const rectangleWidthString=rectangleWidthField.value;
    const rectangleWidthNumber= parseInt(rectangleWidthString);
    
    const rectangleHeightField=document.getElementById('rectangle-height');
    const rectangleHeightString=rectangleHeightField.value;
    const rectangleHeightNumber= parseInt(rectangleHeightString);
    
    const sum= rectangleWidthNumber*rectangleHeightNumber;
    const rectangleArea= sum.toFixed(2);

      // warnings
      if(rectangleWidthString < 0 || rectangleHeightString < 0){
        alert("Please provide a positive number!");
        rectangleResultDisplay.style.display='none';
        
    }
    else if(rectangleWidthString==='' || rectangleHeightString === ''){
        alert("This field is blank!!!");
        rectangleResultDisplay.style.display='none';
       
    }
    else if( isNaN(rectangleWidthString) || isNaN(rectangleHeightString)){
        alert("Please add only Numbers!!!");
        rectangleResultDisplay.style.display='none';
       
    }

   
    const rectangleResultDisplay= document.getElementById('rectangle-result-display');
    const rectangleResult= document.getElementById('rectangle-result');
    rectangleResult.innerText=rectangleArea;
    rectangleResultDisplay.style.display='block';
    rectangleHeightField.value='';
    rectangleWidthString.value=''; 
})



    


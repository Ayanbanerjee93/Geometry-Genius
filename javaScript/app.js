
document.getElementById('triangle-btn').addEventListener('click', function(){

    const triangleField= document.getElementById('triangle-base-field');
    const triangleFieldString=triangleField.value;
    const triangleNumberField= parseInt(triangleFieldString);
    
    const triangleHeightField=document.getElementById('triangle-height-field');
    const triangleHeightFieldString=triangleHeightField.value;
    const triangleHeightNumber= parseInt(triangleHeightFieldString);
    
    const totalArea= 0.5*triangleNumberField*triangleHeightNumber;

   const triangleResult= document.getElementById('triangle-result');
   triangleResult.innerText= totalArea;

    
});
  
    
    
document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleField= document.getElementById('triangle-base-field');
    const triangleFieldString=triangleField.value;
    const triangleNumberField= parseInt(triangleFieldString);
    
    const triangleHeightField=document.getElementById('triangle-height-field');
    const triangleHeightFieldString=triangleHeightField.value;
    const triangleHeightNumber= parseInt(triangleHeightFieldString);
    
    const totalArea= 0.5*triangleNumberField*triangleHeightNumber;

   
})



    


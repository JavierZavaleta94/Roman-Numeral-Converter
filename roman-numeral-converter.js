function convertToRoman(num) {
    var str = "";
    //Decimal and Roman Numbers setup in correlation with each other
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

    //Loop that checks the number that will be converted into a Roman number
  for(var i = 0; i < decimalValue.length; i++){
      
      //While loop that checks when the number is less than the decimal value listed above, subtracts and adds the Roman number string value
      while(decimalValue[i] <= num){
          num -= decimalValue[i];
          str += romanNumeral[i];
      }
  }
  return str;


}

convertToRoman(36);

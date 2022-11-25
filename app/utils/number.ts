export const extractMinusNumberFromString: (x: string) => string = (x) => x.replace(/[^\-\d]/g, '');
export const numberWithCommas: (x: string | number) => number | string = (x) => {
  const numberX = Number(x);

  return isNaN(numberX) ? 0 : numberX.toLocaleString('en-US');
}

export const carNumberUi = (x : string)=>{
  if(x.length === 7){
    return x.substring(0,2) + " " + x.substring(2,3) + " " + x.substring(3,7);
  }
  return x.substring(0,3) + " " + x.substring(3,4) + " " + x.substring(4,8);
  
}
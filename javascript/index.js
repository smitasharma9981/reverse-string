function reversestr(str){
  let newstr = [];
  for(let i=0; i<=str.length; i++){
    newstr.unshift(str[i]);
  }
  return newstr.join('');
}
console.log(reversestr("nikhil brjpuriya"));

function reversestr2(str){
    return [...str].reverse().join('')
}
console.log(reversestr2('nikhil brjpuriya'))

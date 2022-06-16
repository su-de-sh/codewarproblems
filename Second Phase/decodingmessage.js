function decode(message) {
  let alph = "abcdefghijklmnopqrstuvwxyz";
  // let map ={a:z,b:,c:,d:,e:,f:,g:,h:,i:,j:,k:,l:,m:,n:,o:,p:,q:'j',r:'i',s:'h',t:"g",u:'f',v:e,w:d,x:c,y:b,z:a}

  let map = {};
  for (let i = 0; i < alph.length; i++) {
    map[alph[i]] = alph[alph.length - i - 1];
  }

  let decodedMsg = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      decodedMsg += " ";
    } else decodedMsg += map[message[i]];
  }
  return decodedMsg;
}
console.log(decode("r slkv mlylwb wvxlwvh gsrh nvhhztv"));

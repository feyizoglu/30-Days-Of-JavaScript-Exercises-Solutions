function cleanText(str){
  str = str.replace((/@|%|\$|\&|;|!|\?|#/g), "");
  return str;
}

function MostFrequentWords(str, num){
  let arr = str.match(/[a-z]+/gi);
  const newSet = new Set(arr);
  const newArr = [];
  for (const s of newSet) {
    const filteredWord = arr.filter((wrd) => wrd === s)
    newArr.push({ word: s, count: filteredWord.length })
  }
  const arr2 = newArr.sort(function(a, b){
    if (a.count> b.count) return -1
    if (a.count< b.count) return 1
    return 0
  });
  return arr2.splice(0,num);
}

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
console.log(cleanText(sentence));
console.log(MostFrequentWords(cleanText(sentence),3));



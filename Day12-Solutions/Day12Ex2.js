function tenMostFrequentWords(str){
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
  return arr2.splice(0,10);
}



let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));

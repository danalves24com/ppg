import randomWords  from 'random-words';

const seed = ( len ) => {
  return parseInt(Math.random() * (10 ** (len+1)))
}

function combine(abc, int) {
  var ret = "";
  for(var i = 0; i < abc.length; i+=1) {
    ret += abc[i]+""+int[i]
  }
  return ret;
}


const password = (phrase, mod) => {

}

function generate(phrase) {
  var word = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  while (word.length/2 >= 4 || word.length/2 < 1) {
    word = randomWords()
  }
  var word_length = word.length
  word = word.substring(0, parseInt(word_length/2));
  var int = ""+seed(word.length)
  var combo = combine(word, int)
  console.log(combo)
}



export default generate

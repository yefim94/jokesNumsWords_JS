const buttonJoke = document.querySelector('.btnJoke');
const jokeTxt = document.querySelector('.joke');

buttonJoke.addEventListener('click', getJoke);
async function getJoke(e)  {
  const jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers: { 'Accept': 'application/json'}  
  });
  const jokeParsedData = await jokeData.json();
  jokeTxt.innerHTML = jokeParsedData.joke;
};

const buttonWord = document.querySelector('.btnWord');
const wordTxt = document.querySelector('.word');

buttonWord.addEventListener('click', getWord);
async function getWord(e)  {
  const wordData = await fetch('http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', {
    headers: { 'Accept': 'application/json'}  
  });
  const dataParsed = await wordData.json();
  wordTxt.innerHTML = dataParsed[0].word;
};

const num = document.querySelector('.number');
const numBtn = document.querySelector('.btnNumber');
numBtn.addEventListener('click', (e) => {
  const randomNumber = Math.floor(Math.random() * 20);
  num.innerHTML = randomNumber;
});
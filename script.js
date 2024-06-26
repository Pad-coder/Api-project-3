const Api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("main_container");
const sound = document.getElementById("sound");

const btn = document.getElementById("Search_btn");

async function dictionaryResult() {
    try {
        btn.addEventListener("click", () => {
            let word = document.getElementById("inp_word").value;
            console.log(word);

            fetch(`${Api_url}${word}`)
                .then((Response) => Response.json()).then((data) => {
                    console.log(data);
                    result.innerHTML = `
                <div id="result">
                        <div class="word" id="word">
                            <h2 id="outp_result">${word}</h2>
                            <button id="sound_btn" class="sound_btn" onclick="audioPlay()"><i class="fa-solid fa-volume-high"></i></button>
                        </div>
                        <div class="phonetics" id="phonetics">
                        <p>${data[0].meanings[0].partOfSpeech} ${data[0].phonetic}</p>
                        </div>
                        <div class="meaning">
                        <p class="synonyms">Synonyms: ${data[0].meanings[0].synonyms.slice(0, 3)}</p
                        <p class="antonyms">Antonyms: ${data[0].meanings[0].antonyms.slice(0, 3)}</p
                            <p class="Meanings">Meaning: ${data[0].meanings[0].definitions[0].definition}</p>
                    </div>
                    </div>`;
                    sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
                });
        });

    } catch(error){
        console.log(error);
    }
}
async function audioPlay() {
    sound.play();
}

dictionaryResult()
import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImgBtn = document.getElementById('get-image-btn')
const gifOnlyOption = document.getElementById('gifs-only-option')

emotionRadios.addEventListener('change',highlightedCheckedOption)
getImgBtn.addEventListener('click',getMatchingCatsArray)

function getMatchingCatsArray(){

   if(document.querySelector('input[type="radio"]:checked')){
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    const isGif = gifOnlyOption.ariaChecked;

const matchingEmo = catsData.filter((emotion)=>{
return emotion.emotionTags.includes(selectedEmotion)
})

console.log(matchingEmo)
   } 
}

function highlightedCheckedOption(e){

const radios = document.getElementsByClassName('highlight')

for(let radio of radios){
    radio.classList.remove('highlight')
   
}

document.getElementById(e.target.id).parentElement.classList.add('highlight')

}

function getEmotionsArray(catsEmotion){

    const catEmotions = []
    for(let emotions of catsEmotion){
        for(let cat of emotions.emotionTags){
            if(!catEmotions.includes(cat))
                {catEmotions.push(cat)

                }
        }
    }
    return catEmotions
    
}



function renderEmotionsRadios(cats){
    let radioItems = ``

    const emotions = getEmotionsArray(cats)

  for(let emotion of emotions){

    radioItems += `<div class="radio">
    <label for=${emotion}> ${emotion} </label> 
    <input    
    type="radio" 
    id=${emotion}
    name="emotion"
    value=${emotion}>
 </div>`
   
  }
emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)






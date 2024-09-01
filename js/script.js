let bodyElem = document.querySelector("body").addEventListener("keydown",keyboardAction);
let audioElem = document.querySelector('.audio_elem');
let volumeElem = document.querySelector('#voulme_range');
volumeElem.addEventListener('change' , setVolume);
let playStop = document.querySelector('.play_stop');
playStop.addEventListener('click' , playOrStop);
let previous = document.querySelector('.previous');
previous.addEventListener('click' , function(){
  player('MediaTrackPrevious')
})
let next = document.querySelector('.next');
next.addEventListener('click' , function(){
  player('MediaTrackNext')
})
let musicImg = document.getElementById('music_image');
let musicName = document.getElementById('music_name');
let musicSinger = document.getElementById('music_singer');
let currentMusic = 0;
let isPlay = false;
let musicList = [
  {id:0 , src:"audio/G-Eazy & Halsey - Him & I (Official Video).mp3" ,
    image:"image/G-Eazy_and_Halsey_Him_&_I.jpg" , name:"Him & I " , singer:"G-Eazy & Halsey"},
  {id:1 , src:"audio/CLANN - I Hold You.mp3" ,
   image:"image/CLANN - I Hold You.jpg" , name:"I Hold You" , singer:"CLANN "},
  {id:2 , src:"audio/Crystal Castles - Transgender.mp3" ,
   image:"image/Crystal Castles - Transgender.jpg" , name:"Transgender" , singer:"Crystal Castles"},
  {id:3 , src:"audio/SUICIDAL-IDOL - ecstacy (slowed).mp3" ,
   image:"image/SUICIDAL-IDOL - ecstacy (slowed).jpg" , name:"Ecstacy " , singer:"SUICIDAL IDOL"},
  {id:4 , src:"audio/Tom Odell - Another Love.mp3" ,
   image:"image/Tom Odell - Another Love.jpg" , name:"Another Love" , singer:"Tom Odell"}
]

setVolume();
function playOrStop() {
  if(!isPlay)
  {
    playStop.style.animation = '0.3s rotate linear';
    playStop.style.padding = "10px" ;
    playStop.setAttribute('src' ,"icon/pause.png");
    audioElem.play();
    isPlay = true;

  }
  else 
  {
    playStop.style.animation = '';
    playStop.style.padding = "10px 8px 10px 12px" ;
    playStop.setAttribute('src' , "icon/play.png");
    audioElem.pause();
    isPlay = false;

  }
}

function setVolume() {
  audioElem.volume =  volumeElem.value/100;
}


function keyboardAction(event){
  player(event.key);
}

function player(action){
  if(action == 'MediaPlayPause')
  {
    playOrStop();
  }
  if(action == 'MediaTrackNext')
  {
    ++currentMusic;
    if(currentMusic > musicList.length-1)
      currentMusic = 0;
    console.log(currentMusic)
    musicImg.setAttribute('src', musicList[currentMusic].image)
    musicName.innerHTML =  musicList[currentMusic].name;
    musicSinger.innerHTML = musicList[currentMusic].singer;
    audioElem.setAttribute('src', musicList[currentMusic].src)  
    if(isPlay)
      {
        playStop.setAttribute('src' ,"icon/pause.png");
        audioElem.play();
        isPlay = true;
      }
  }
  if(action == 'MediaTrackPrevious')
  {
    --currentMusic;
    if(currentMusic < 0)
      currentMusic = musicList.length-1;
    musicImg.setAttribute('src', musicList[currentMusic].image)
    musicName.innerHTML =  musicList[currentMusic].name;
    musicSinger.innerHTML = musicList[currentMusic].singer;
    audioElem.setAttribute('src', musicList[currentMusic].src)
    if(isPlay)
      {
        playStop.setAttribute('src' ,"icon/pause.png");
        audioElem.play();
        isPlay = true;
      }
  }
}

let musicTimeShower = document.getElementById('music_time')
musicTimeShower.addEventListener('change' , changeMusicTime)

setInterval(function(){
  musicTimeShower.value = audioElem.currentTime
  setMusicTime()
},1000)

function setMusicTime(){
  setTimeout(function(){
    let D = audioElem.duration
    musicTimeShower.setAttribute('max' , D)
    console.log(D)
  }, 1) 
}
function changeMusicTime(){
  audioElem.currentTime = musicTimeShower.value;
}
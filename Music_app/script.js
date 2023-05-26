const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
         const artist = document.getElementById("artist");
         const title = document.getElementById("title");
         const prev = document.getElementById("prev");
         const next = document.getElementById("next");
         let progress= document.getElementById("progress");
         let total_duration = document.getElementById("duration");
         let current_time = document.getElementById("current_time");
         const progress_div = document.getElementById("progress_div");
         
        const songs = [
            {
                name:"Suzume",
                title:"Suzume",
                artist:"Radwimps",
            },
            {
                name:"Libianca",
                title:"Libianca",
                artist:"Libianca Kenzonkinboum",
            },
            {
                name:"Middle of Night",
                title:"Middle of Night",
                artist:"Elley Duhe",
            },
            {
                name:"Heat Waves",
                title:"Heat Waves",
                artist:"Glass Animals",
            }
    ]         

     let isPlaying = false;
        //  play func
         const playMusic= () => {
             isPlaying=true;
             music.play();
             play.classList.replace("fa-play", "fa-pause");

         };

         //  pause func
         const pauseMusic=  () => {
             isPlaying=false;
             music.pause();
             play.classList.replace("fa-pause","fa-play");


         };
            play.addEventListener("click", () =>{
                isPlaying ? pauseMusic() : playMusic();
            });

            // change music
           const loadSong= (songs) => {
               title.textContent = songs.title;
               artist.textContent = songs.artist;
               music.src= "music/" + songs.name + ".mp3";
               img.src= "images/" + songs.name + ".jpg";
           };

           songIndex = 0;

           const nextSong = () =>{
               songIndex = (songIndex + 1) % songs.length;
               loadSong(songs[songIndex]);
               playMusic();
           };
           const prevSong = () =>{
               songIndex = (songIndex - 1+ songs.length)%songs.length;
               loadSong(songs[songIndex]);
               playMusic();
           };

           /*progress*/
           music.addEventListener("timeupdate",(event) => {           
           const { currentTime, duration} = event.srcElement;
           let progress_time = (currentTime / duration) * 100;
           progress.style.width = `${progress_time}%`;
        

         // duration
         let min_duration = Math.floor(duration / 60);
         let sec_duration = Math.floor(duration % 60);
        
         let tot_duration = `${min_duration}:${sec_duration}`;
         
         if(duration){
         total_duration.textContent = `${tot_duration}`;
        }

        //  current
        let min_currentTime = Math.floor(currentTime / 60);
         let sec_currentTime = Math.floor(currentTime % 60);

         if(sec_currentTime < 10){
             sec_currentTime = `0${sec_currentTime}`;
         }
        
         let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
         
  
   current_time.textContent = `${tot_currentTime}`;
  
  }); 
  
   // seek
   progress_div.addEventListener('click', (event) => {
       console.log(event);
       const{duration} =music;
       let move_progress =
       (event.offsetX / event.srcElement.clientWidth) * duration;
       music.currentTime = move_progress;
   })
   //for song play in contineously
  music.addEventListener("ended",nextSong);
  next.addEventListener("click", nextSong);
  prev.addEventListener("click", prevSong);
    
// autoplay video preview on hover

const videos=document.querySelectorAll(".portfolio-card video")

videos.forEach(video=>{

video.addEventListener("mouseover",()=>{
video.play()
})

video.addEventListener("mouseout",()=>{
video.pause()
})

})
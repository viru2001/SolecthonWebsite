const videoDiv = document.querySelector("#videos");
const displayVideos = async () => {
    let links;
    await fetch(
      "https://raw.githubusercontent.com/viru2001/SolecthonWebsite/master/submission.json"
    // "submission.json"

    )
      .then((res) => res.json())
      .then((json) => {
        links =  json;
        console.log(typeof(links),links)
        links["video-links"].map( (link)=>{
            let video = document.createElement("iframe");
            video.className = "ourVideos col-md-5";
            video.src = link;
            video.frameBorder=0;
            videoDiv.appendChild(video); 
        })
      });
    
}

displayVideos();

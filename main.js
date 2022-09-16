document.querySelector('button').addEventListener('click', getNasa)

function getNasa(){
    const selectDate = document.querySelector('input').value
    document.querySelector('h4').style.border = '1px solid lightslategray'
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=QU8lOuwX3DRm9CiNiPxDrCc7X450zK83oH1Ban0i&date=${selectDate}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      
      if(data.media_type === "image"){document.querySelector('img').src = data.hdurl}
      else if(data.media_type === "video"){
        document.querySelector('iframe').src = data.url
        document.querySelector('img').src = ''
    }
      document.querySelector('.information').innerText = data.explanation
        
     
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
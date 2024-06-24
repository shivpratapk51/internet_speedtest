const btn = document.querySelector('button');
const content = document.querySelector('.content');
const loader_content = document.querySelector('.loader-content');
const loader = document.querySelector('.loader')



btn.addEventListener('click', (e)=>{
    let imagelink = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG',
        downloadSize = 8185374,
        time_start , time_end,
        downloadSrc = new Image();
        loader_content.classList.add('hide')
        loader.classList.remove('hide')


    time_start = new Date().getTime();
    
    let cacheImg = "?nn" + time_start;
    downloadSrc.src = imagelink + cacheImg;

    downloadSrc.onload = ()=>{
        // this function will trigger once the image load
        time_end = new Date().getTime();
        let timeDuratuion = (time_end - time_start)/1000,
            loadedBytes = downloadSize * 8;
            totalSpeed = ((loadedBytes / timeDuratuion) / 1024 / 1024).toFixed(2);

        let i = 0, speedOut;
        const animate = ()=>{
            if ( i < totalSpeed ){
                content.innerHTML = i.toFixed(2) + '<small>Mbps</small>';
                setTimeout(animate, 20);
                i+= 1.02;
            } else {
                content.innerHTML = totalSpeed + '<small>Mbps</small>';
            }
        }
        animate();
       
        loader_content.classList.remove('hide')
        loader_content.classList.add('result')
        loader.classList.add('hide')
        content.classList.remove('hide')
        e.target.innerText = "CHECK AGAIN"
    }

})
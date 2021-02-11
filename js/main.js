let sliderItem = document.querySelector('.slider-item'),
    imgSrc = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];


let i = 0,
    len = imgSrc.length - 1;     
setInterval(() => {
    if (i <= len) {
        
        sliderItem.style.backgroundImage = `url(images/slider/${imgSrc[i]})`;
        i++;
            
    } else {
        i = 0;
        sliderItem.style.backgroundImage = `url(images/slider/${imgSrc[i]})`;
        }
        
        
    }, 6000);

    
// setInterval(() => {
//     //background: url(../../images/slider/image_8.jpg)
//     let i = Math.floor(Math.random() * imgSrc.length);
//     sliderItem.style.backgroundImage = `url(images/slider/${imgSrc[i]})`
// }, 5000);

let backgroundImageURL = '';

function setBackgroundImage() {
    const backgroundSelect = document.getElementById('backgroundSelect');
    const selectedBackground = backgroundSelect.value;
    
    const newsletterContainer = document.getElementById('newsletter');
    newsletterContainer.style.backgroundImage = `url(${selectedBackground})`;
    backgroundImageURL = selectedBackground;
}
function inputdata {
    const uploadedImage1 = document.getElementById('fileInput1').files[0]

}
let DoggosHeader = document.querySelector ('#page-header')
DoggosHeader.style.textAlign = "left"

let dogImages = querySelectorAll (".dog-image")
for (let i=0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

// Select some elements...
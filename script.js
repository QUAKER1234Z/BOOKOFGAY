let currentPage = 1; // Start with the first set of pages visible

function flipPage() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const pages = document.querySelectorAll('.page-content');
    const pagesCount = 17

    if (!isPortrait) {
        currentPage += 2;
        if (currentPage > pagesCount) currentPage = 1;
        pages[0].innerHTML = getPage(currentPage)
        pages[1].innerHTML = getPage(currentPage + 1)
    } else {
        currentPage += 1;
        if (currentPage > pagesCount) currentPage = 1;
        pages[0].innerHTML = getPage(currentPage)
    }


}

function getPage(index) {
    let finalElement = ''
    if (index == 1) {
        finalElement = `<h1 style="padding-top: 100px; text-align:center;">The Book of Ethereum</h1>`
    } else if (index == 2) {
        finalElement =  
        <p>
        
    } 
    
    
    else {
        return `<h3></h3><p></p>`
    }
    
    finalElement += '<div class="bible-image-div"><img src="images/bible-images/' + (index - 1) + '.jpg" class="bible-image"></div>';
    return finalElement
}

// Initial setup to display the first two pages without waiting for the first click
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page-content');
    pages[0].innerHTML = getPage(1)
    pages[1].innerHTML = getPage(2)
    

    const leftPage = document.querySelector('.left-page');
    const rightPage = document.querySelector('.right-page');

    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    leftPage.addEventListener('click', function() {
        flipPage(isPortrait ? 'forward' : 'backward');
    });

    rightPage.addEventListener('click', function() {
        flipPage('forward');
    });
});

function changeAllArticleColors() {
     const products = document.querySelectorAll('#products article');

    for (let element of products){
        element.classList.add('sale');
    }
}

changeAllArticleColors();
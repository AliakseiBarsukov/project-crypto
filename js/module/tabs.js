const advantageBtn = document.querySelectorAll('.advantage__btn');
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');


advantageBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        advantageItemsContent.forEach((advantageItemContent, j) => {
            if (i === j) {
                advantageBtn[j].classList.add('advantage__btn_active');
                advantageItemsContent[j].classList.add('advantage__item-content_active');
            } else {
                advantageBtn[j].classList.remove('advantage__btn_active');
                advantageItemsContent[j].classList.remove('advantage__item-content_active');
            }
        })
    })
});
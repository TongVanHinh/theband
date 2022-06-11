// Lấy ra các nut
const buyBtns = document.querySelectorAll('.js-buy-ticket');
// Lấy ra modal
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');

//Lay ra nút close modal 
const modalClose = document.querySelector('.js-modal-close');


// Tạo hàm hiện thị form them class open vào modal
function showBuyTicket() {
    modal.classList.add('open');
}

// Ham dong modal gỡ bỏ class open khỏi modal
function hideBuyTichket() {
    modal.classList.remove('open');
}

// Lặp lại và Lắng nghe ấn vào từng nut
for(const buyBtn of buyBtns)
{
    buyBtn.addEventListener('click', showBuyTicket)
}

modalClose.addEventListener('click', hideBuyTichket);


modal.addEventListener('click', hideBuyTichket);

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})


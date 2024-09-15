// カルーセル
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    navigation: {
        prevEl: '.my-button-prev',
        nextEl: '.my-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // 767px以下の設定
        0: {
            slidesPerView: 1, // 表示するスライド数
            slidesPerGroup: 1, // 移動するスライド数
        },
        // 768px以上の設定
        768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
    },
});

// アコーディオン
$('.faq__question').on('click', function (e) {
    // アンサーを選択
    var answer = $(this).next();

    // answerを表示・非表示
    answer.slideToggle();
    // アイコンの上下反転
    $(this).find('.bi').toggleClass('rotate');
});

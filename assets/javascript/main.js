$(document).ready(() => {
    $("#try_button").on("click", redirectToGame)
    $("#arrow_down").on("click", scrollToBottom)
    
    $(document).scroll(onScroll)

})

function redirectToGame() {
    window.open('https://azowyl.itch.io/a-redemption-tale', '_blank');
}

function scrollToBottom() {
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
}

function onScroll(event) {
    const target = $('#arrow_down');
    const targetHeight = target.outerHeight();
    const scrollPercent = (targetHeight - window.scrollY) / targetHeight;

    if(scrollPercent >= 0){
        target.css('opacity', scrollPercent);
    }
}
$('#check-term-all').change(function (e) { 
    e.preventDefault();
    
    handleTermChecked(this.checked);
});

const handleTermChecked = (isChecked, forceUpdateInput = true) => {
    if(!forceUpdateInput) {
        $('#check-term-all').prop('checked', isChecked);
    }

    $('#popup-content .term__checkbox .checkbox-icon:not(.icon-all)').css('background-image', `url(${isChecked ? "../assets/icons/single-check-active.svg" : "../assets/icons/single-check-disabled.svg"})`)
    $('#popup-footer__button').prop('disabled', !isChecked);
}

//region handle expaned 
let globExpaned = {};

//handle when user click on sumary term 
$('.term__sumary__text').each(function (index) {
    globExpaned[index] = false;

    $(this).click(function (e) {
        e.preventDefault();

        $(this).parent().siblings('.term__details').css('max-height', globExpaned[index] ? 0 : '999999px');

        if (globExpaned[index]) {
            $(this).find('.expaned-icon').removeClass('expaned');
        } else {
            $(this).find('.expaned-icon').addClass('expaned');
        }

        globExpaned[index] = !globExpaned[index];
    })
});

// handle user click on the footer button
$("#popup-footer__button").click(function (e) {
    Popup.postMessageToParent( {
        allChecked: $('#check-term-all').prop('checked')
    }, '*');
   parentCallback.closePopup();
});

// handle user click on the back button
$('#popup-header__back').click(function (e) {
   
   Popup.postMessageToParent({
        allChecked: $('#check-term-all').prop('checked')
    });

    parentCallback.closePopup();
});

// handle user click on the back button
$('#popup-header__cancle').click(function (e) {
    
    Popup.postMessageToParent( {
        allChecked: $('#check-term-all').prop('checked')
    }, '*');
    parentCallback.closePopup();
});

const parentCallback = Popup.extractCallbacksFromParent();

$(document).ready(() => {
    Popup.extractPayloadFromParent((payload) => {
        const { termChecked } = payload;
        handleTermChecked(termChecked, false);
        $('#popup-footer__button').prop('disabled', !termChecked);
    })
})


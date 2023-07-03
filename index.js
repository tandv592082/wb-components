


function isAllInputChecked(selector) {
    let isAllInputChecked = true;

    $(selector).each(function () {
        if (!this.checked) {
            isAllInputChecked = false;
            return;
        }
    });

    return isAllInputChecked;
}

/**
 * handle all sub-checkbox checked
 * @param {boolean} isAllChecked - is all sub term checked?
 */
function handleAllCheckboxChecked(isAllChecked) {
    if (isAllChecked) {
        $('#popup-footer__button').prop('disabled', false);
        $('.text-all').addClass('active');
        return;
    }

    $('.text-all').removeClass('active');
    $('#popup-footer__button').prop('disabled', true);
}

/**
 * handle single checkbox of term when it changes
 */
function handleSingleTermChange(term) {
    let subTermId = $(term).attr('sub-term-for');
    const checked = $(term).prop('checked');

    // is sub term case
    if (subTermId) {
        $(`input#${subTermId}`).prop('checked', isAllInputChecked(`input[sub-term-for="${subTermId}"]`));
    } else {
        //  is sumary term case
        subTermId = $(term).attr('id');
        $(`input[sub-term-for="${subTermId}"]`).prop('checked', checked);
    }

    let isAllChecked = isAllInputChecked("input[id^='check-term']:not(input#check-term-all)");
    handleAllCheckboxChecked(isAllChecked);
    $('input#check-term-all').prop('checked', isAllChecked);

}

// listen checkbox check all changes
$('input#check-term-all').change(function (e) {
    e.preventDefault();
    handleAllCheckboxChecked(this.checked);
    $(".term__input:not(input#check-term-all)").prop('checked', this.checked);
});

// handle single term not term all change
$(".term__input:not(input#check-term-all)").change(function (e) {
    e.preventDefault();
    handleSingleTermChange(this);
});


let globExpaned = {};

//handle when user click on sumary term 
$('.term__sumary__text').each(function (index) {
    globExpaned[index] = false;

    $(this).click(function (e) {
        e.preventDefault();

        $(this).parent().siblings('.term__details').css('max-height', globExpaned[index] ? 0 : '9999px');

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
        handleAllCheckboxChecked(termChecked);
        $(".term__input").prop('checked', termChecked);
        $('#popup-footer__button').prop('disabled', !termChecked);
    })
})


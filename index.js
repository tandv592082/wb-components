/**
 * handle all sub-checkbox checked
 * @param {boolean} isAllChecked - is all sub term checked?
 */
function handleAllCheckboxChecked(isAllChecked) {
    if(isAllChecked) {
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
function handleSingleTermChange() {
    let isAllChecked = true;

    $("input[id^='check-term']:not(#check-term-all)").each(function () {
        if(!this.checked) {
            isAllChecked = false;
        }
    });

    handleAllCheckboxChecked(isAllChecked);
    $('.text-all')[isAllChecked ? 'addClass' : 'removeClass']('active');
    $('input#check-term-all').prop('checked', isAllChecked);
}

// listen checkbox check all changes
$('input#check-term-all').change(function (e) { 
    e.preventDefault();
    handleAllCheckboxChecked(this.checked);
    $("input[id^='check-term']").prop('checked', this.checked); 
});

// handle sub checkbox change
$("input[id^='check-term']:not(#check-term-all)").change(function (e) { 
    e.preventDefault();
    handleSingleTermChange();
});

let globExpaned = {};

//handle when user click on sumary term 
$('.term__sumary__text').each(function(index) {
    globExpaned[index] = false;

    $(this).click(function(e) {
        e.preventDefault();

        $(this).parent().siblings('.term__details').css('max-height', globExpaned[index] ? '9999px' : 0);

        if(globExpaned[index]) {
            $(this).find('.expaned-icon').removeClass('expaned');
        } else {
            $(this).find('.expaned-icon').addClass('expaned');
        }
       
        globExpaned[index] = !globExpaned[index];
    })
});

// handle user click on the footer button
$("#popup-footer__button").click(function(e) {
    e.preventDefault();

});

// handle user click on the back button
$('#popup-header__back').click(function(e) {
    e.preventDefault();
    $('iframe#wb-frame__popup').hide();
});

$('#open-term').click(function(e) {
    e.preventDefault();

    $('iframe#wb-frame__popup').show();
    window.go = $('iframe#wb-frame__popup');
})
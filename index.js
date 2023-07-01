



$('input#check-all').change(function (e) { 
    e.preventDefault();
    
    if(this.checked) {
        $("input[id^='check-term']").prop('checked', true);
        $('#wb-screen__btn-confirm').prop('disabled', false);
        $('.text-check-all').addClass('active');
        return;
    }

    $('.text-check-all').removeClass('active');
    $("input[id^='check-term']").prop('checked', false);
    $('#wb-screen__btn-confirm').prop('disabled', true);
});

function handleSingleTermChange() {
    let isAllChecked = true;

    $("input[id^='check-term']").each(function () {
        if(!this.checked) {
            isAllChecked = false;
        }
    });

    if(isAllChecked) {
        $('input#check-all').prop('checked', true);
        $('.text-check-all').addClass('active');
        $('#wb-screen__btn-confirm').prop('disabled', false);
        return;
    }

    $('.text-check-all').removeClass('active');
    $('input#check-all').prop('checked', false);
    $('#wb-screen__btn-confirm').prop('disabled', true);
}

$("input[id^='check-term']").change(function (e) { 
    handleSingleTermChange();
});

let globExpaned = {};

$('.term-sumary').each(function(index) {
    globExpaned[index] = false;

    $(this).click(function(e) {
        e.preventDefault();

        if(globExpaned[index]) {
            console.log('true')
            globExpaned[index] = false;
            $(`div[data-term-for="term-sumary-1"]`).css('max-height', '9999px');
            $('.expaned-icon').addClass('expaned');
            return;
        }

        $('.expaned-icon').removeClass('expaned');
        $(`div[data-term-for="term-sumary-1"]`).css('max-height', 0);
        globExpaned[index] = true;
    })
});

$("#wb-screen__btn-confirm").click(function(e) {
    e.preventDefault();

})
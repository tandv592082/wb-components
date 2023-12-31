
// Create a new URLSearchParams object with the current URL
const params = new URLSearchParams(window.location.search);

// Get the value of a specific parameter
const locale = params.get('locale');
let data = null;

if(!locale || locale?.toLowerCase()?.startsWith('vi')) {
    data = TERMS['vi'];
} else {
    data = TERMS['en'];
}

$('#popup-header__title p').text(data.configs.screen);
$('#popup-header__cancle p').text(data.configs.cancel);
$('.popup-content__title p').text(data.configs.title);
$('.term__sumary__text .text-all').text(data.configs.all);
$('#popup-footer__button').text(data.configs.button);

//term__details__title
//term__details
const wrap = (elmStart, content, elemEnd) => {
    return `${elmStart}${content}${elemEnd}`
}

const createTermSumaryElm = (title) => {
    return `
    <div class="term__sumary">
        <div class="term__checkbox">
            <span class="checkbox-icon"></span>
        </div>
        <div class="term__sumary__text">
            <p>${title}</p>
            <span class="expaned-icon"></span>
        </div>
    </div>
    `
}




const createSubTermParagraph = (content) => {
    return wrap('<p>',content,'</p>')
}

const createSubTermTitle = (title) => {
    return wrap(`<p class="term__details__title">`, title, `</p>`);
}

const createSubTermCheckBox = (content) => {
    return `
    <div class="sub-term">
        <div class="term__checkbox">
            <span class="checkbox-icon"></span>
        </div>
        <p>
            ${content}
        </p>
    </div>
    `
}

const termXX = data.data.map((term, index) => {
    let sumaryTerm = createTermSumaryElm(term.sumary, index);
    let detailTerm = '';

    for(const detail of term.details) {
        if(detail.startsWith('[TITLE]')) {
            detailTerm += createSubTermTitle(detail.replace('[TITLE]',''))
        } else if(detail.startsWith('[INPUT]')) {
            const input = createSubTermCheckBox(detail.replace('[INPUT]',''), index);
            detailTerm += input;
        } else {
            const p = createSubTermParagraph(detail);
            detailTerm += p
        }
    }

    const fullTermDetails = wrap(`<div class="term__details">`,detailTerm, `</div>`)

    return wrap(`<div class="term">`, sumaryTerm + fullTermDetails,`</div>`)
})


$(termXX.join('')).insertAfter('.term.term-all')





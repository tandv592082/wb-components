const IFRAME_ID = 'wb-frame__popup';
const IFRAME_SELETOR = `#${IFRAME_ID}`;
const LOADING_ASSET_URL = 'https://i.stack.imgur.com/FhHRx.gif';
const POPUP_FRAME_STYLE = `
<style>
    iframe#wb-frame__popup {
        margin: 0;
        display: block;
        border: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999999;
        outline: none;
        display: none;
    }
</style>
`
const LOADING_TEMPLATE = `
<style>
    div#popup__loading {
        position: fixed !important;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: none;
        justify-content: center !important;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.11);
    }
    div#popup__loading span {
        width: 232px;
        height: 32px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(${LOADING_ASSET_URL});
    }
</style>
<div id="popup__loading"><span></span></div>
`

class Popup {
    constructor(url, options = {showLoading: true, cached: false}) {
        this.url = url;
        this.options = options;
        this.isLoaded = false;
        this.payload = {};
    }

    close() {
        

        if (this?.options?.cached) {
            $(IFRAME_SELETOR).hide();
        } else {
            $(IFRAME_SELETOR).remove();
            this.isLoaded = false;
        }
    }

    setPayload(payload = {}) {
        this.payload = payload;
    }

    show() {
        const IFRAME_ELM = `<iframe id="${IFRAME_ID}" src="${this.url}"></iframe>`;

        // check iframe is exist
        if (!this.isLoaded) {
            $('body').append(IFRAME_ELM, POPUP_FRAME_STYLE);
            this.showLoading();
        }

        if (!this?.options?.showOnReady) {
            $(IFRAME_SELETOR).show();
        }

        if (!this.isLoaded) {
            const _self = this;

            $(IFRAME_SELETOR).on('load', function () {
                $(IFRAME_SELETOR)[0].contentWindow.postMessage(_self.payload, '*');

                if (_self?.options?.showOnReady) {
                    $(IFRAME_SELETOR).show();
                }
                _self.isLoaded = true;
                _self.hideLoading();
            });
        }

        $(IFRAME_SELETOR)[0].contentWindow.postMessage(this.payload, '*');
    }

    setCallbacks(fns) {
        window.iframeFns = fns;
    }


    showLoading() {
        if(this?.options?.showLoading) {
            if(!$('div#popup__loading').length) {
                $('body').append(LOADING_TEMPLATE);
            }
    
            $('div#popup__loading').css('display', 'flex');
        }
    }

    hideLoading() {
        window.parent.jQuery('div#popup__loading').hide();
    }

    static postMessageToParent(payload, url = '*') { 
        try {
            if (window) {
                window.parent.postMessage(payload, url);
                return;
            }

            throw new Error(`Cannot post message to parent, because window does not exist`);
        } catch (error) {
            console.error(`Something went wrong when post message to ${url}, reason: ${error.message}`);
        }
    }

    static extractMessageFromIframe(url, callback) {
        let received = null;

        try {
            if (window) {
                // Listen for messages from the iframe
                window.addEventListener('message', function (event) {
                    console.log(event);
                  
                    // Verify that the message is from the expected iframe
                    console.log(url);
                    if (event.origin.includes(url)) {
                        // Handle the received message
                        if(JSON.stringify(received) !== JSON.stringify(event.data)) {
                            console.log(true);
                            received = event.data;
                            callback(event.data);
                        }
                        

                    }
                });

                return;
            }

            throw new Error(`Cannot extract data from iframe url ${url}, because window does not exist`);
        } catch (error) {
            console.error(`Something went wrong when post message to ${url}, reason: ${error.message}`);
        }
    }

    static extractPayloadFromParent(callback) {
        // Listen for messages from the parent window
        $(window).on('message', function (event) {
            // Retrieve the received message
            const payload = event.originalEvent.data;
            callback(payload);
        });

    }

    static extractCallbacksFromParent() {
        return window?.parent?.iframeFns;
    }
}
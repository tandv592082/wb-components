const IFRAME_ID = 'wb-frame__popup';
const IFRAME_SELETOR = `#${IFRAME_ID}`;

class Popup {
    constructor(url, options = {}) {
        this.url = url;
        this.options = options;
        this.isLoaded = false;
        this.payload = {};
    }

    close() {
        if (this?.options?.cached) {
            $(IFRAME_SELETOR).hide();
            return;
        }

        $(IFRAME_SELETOR).remove();
        this.isLoaded = false;
    }

    setPayload(payload = {}) {
        this.payload = payload;
    }

    show(onReady = () => {}) {
        const iframeElm = `<iframe id="${IFRAME_ID}" src="${this.url}"></iframe>`;
        
        // check iframe is exist
        if (!this.isLoaded) {
            $('body').append(iframeElm);
        }

        $(IFRAME_SELETOR).show();

        if (!this.isLoaded) {
            const _self = this;

            $(IFRAME_SELETOR).on('load', function()  {
                onReady();
               _self.isLoaded = true;
                $(IFRAME_SELETOR)[0].contentWindow.postMessage(_self.payload, '*');
            });

            return;

        }

        $(IFRAME_SELETOR)[0].contentWindow.postMessage(this.payload, '*');
    }

    setCallbacks(fns) {
        window.iframeFns = fns;
    }

    static postMessageToParent(url, payload) {
        try {
            if (window) {
                const parentWindow = window.parent;
                parentWindow.postMessage(payload, url);
                return;
            }

            throw new Error(`Cannot post message to parent, because window does not exist`);
        } catch (error) {
            console.error(`Something went wrong when post message to ${url}, reason: ${error.message}`);
        }
    }

    static extractMessageFromIframe(url, callback) {
        try {
            if (window) {
                // Listen for messages from the iframe
                window.addEventListener('message', function (event) {
                    // Verify that the message is from the expected iframe
                    if (event.origin.includes(url)) {
                        // Handle the received message
                        callback(event.data);
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
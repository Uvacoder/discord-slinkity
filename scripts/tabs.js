/**
 * tabs  by MoonFace Design
 * https://moonface.ga
 * https://github.com/moonfacedesign
 */

(function () {
    'use strict';

    function load(href, pushState) {
        const content = $('main');
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            const d = xhr.responseXML;
            const dTitle = d.title || '';
            const dcontent = $('main', d);
            $('#tabs-loader').classList.remove("load");
            content.innerHTML = (dcontent && dcontent.innerHTML) || '';
            document.title = dTitle;
            if (pushState) {
                history.pushState({}, dTitle, href);
            }
            content.focus();
            window.scrollTo(0, 0);
            document.body.classList.remove("opened");
        };
        xhr.onerror = function () {
            // fallback to normal link behaviour (fail graciously)
            document.location.href = href;
            return;
        };
        xhr.open('GET', href);
        xhr.responseType = 'document';
        xhr.send();
    }

    function $(sel, con) {
        return (con || document).querySelector(sel);
    }

    /**
     * Search for a parent anchor tag outside a clicked event target
     *
     * @param {HTMLElement} el the clicked event target.
     * @param {number} maxNests max number of levels to go up.
     * @returns the anchor tag or null
     */
    function findAnchorTag(el, maxNests = 3) {
        for (let i = maxNests; el && i > 0; --i, el = el.parentNode) {
            if (el.nodeName === 'A') {
                return el;
            }
        }
        return null;
    }

    window.addEventListener('click', function (evt) {
        const el = findAnchorTag(evt.target);
        const href = el?.getAttribute('href');
        if (el && href) {
            if (
                href.startsWith('#') ||
                el.getAttribute('target') === '_blank' ||
                /\.\w+$/.test(href)
            ) {
                // eleventy urls in this configuration do not have .html extensions
                // if they have, or if target _blank is set, or they are a hash link,
                // then do nothing and load normally.
                return;
            }
            // initiate SPA
            evt.preventDefault();
            $('#tabs-loader').classList.add("load");
            load(href, true);
        }
    });

})();
/**
 * tabs  by Moonface Digital
 * https://moonface.digital
 * https://github.com/moonfacedigital
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
            content.innerHTML = (dcontent && dcontent.innerHTML) || '';
            document.title = dTitle;
            if (pushState) {
                history.pushState({}, dTitle, href);
            }
            content.focus();
            window.scrollTo(0, 0);
            document.body.classList.remove("opened");
            const siemas = document.querySelectorAll('.siema'); // allows for mutiple sliders on a page
            for (const siema of siemas) {
                new Siema({
                    selector: siema,
                    perPage: {
                        0: 1,
                        1024: 2,
                        1280: 3
                    },
                    multipleDrag: true
                })
                sliderCursor()
            }
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
            load(href, true);
        }
    });

    window.addEventListener('popstate', function (e) {
        load(document.location.pathname, false);
    });

    function sliderCursor() {
        const ball = document.querySelector(".dragVisual");

        let mouseX = 0;
        let mouseY = 0;

        let ballX = 0;
        let ballY = 0;

        let speed = 0.2;


        function animate() {

            let distX = mouseX - ballX;
            let distY = mouseY - ballY;


            ballX = ballX + (distX * speed);
            ballY = ballY + (distY * speed);

            ball.style.left = ballX + "px";
            ball.style.top = ballY + "px";

            requestAnimationFrame(animate);
        }
        animate();

        document.addEventListener("mousemove", function (event) {
            mouseX = event.pageX;
            mouseY = event.pageY;
        })

        document.querySelector('.siema').addEventListener("mouseenter", function (event) {
            document.querySelector('.dragVisual').classList.add("active");
        });
        document.querySelector('.siema').addEventListener("mouseleave", function (event) {
            document.querySelector('.dragVisual').classList.remove("active");
        });

        document.querySelector('.sliderCont').addEventListener("mouseenter", function (event) {
            document.querySelector('.dragVisual').classList.add("on");
        });
        document.querySelector('.sliderCont').addEventListener("mouseleave", function (event) {
            document.querySelector('.dragVisual').classList.remove("on");
        });
    }

})();
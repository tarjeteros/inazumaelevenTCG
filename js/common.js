(function () {
    'use strict';

    var GOATCOUNTER_ENDPOINT = 'https://tarjeteros.goatcounter.com/count';

    function getById(id) {
        return document.getElementById(id);
    }

    function getIndexHref() {
        var path = decodeURIComponent(window.location.pathname || '').toLowerCase();
        if (path.indexOf('/colecciones originales/barajas/') !== -1) {
            return '../../index.html';
        }
        if (path.indexOf('/colecciones originales/') !== -1 || path.indexOf('/colecciones go/') !== -1) {
            return '../index.html';
        }
        return 'index.html';
    }

    function enableLogoHomeLink() {
        var logo = document.querySelector('header .logo');
        if (!logo) {
            return;
        }

        var href = getIndexHref();
        var existingLink = logo.closest('a');

        // Fallback robusto: incluso sin <a>, clic en el logo vuelve a inicio.
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function () {
            window.location.href = href;
        });

        if (existingLink) {
            existingLink.setAttribute('href', href);
            if (!existingLink.getAttribute('aria-label')) {
                existingLink.setAttribute('aria-label', 'Ir a inicio');
            }
            return;
        }

        var link = document.createElement('a');
        link.setAttribute('href', href);
        link.setAttribute('aria-label', 'Ir a inicio');
        logo.parentNode.insertBefore(link, logo);
        link.appendChild(logo);
    }

    function isLocalHost(hostname) {
        return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
    }

    function enableAnalytics() {
        if (window.location.protocol !== 'http:' && window.location.protocol !== 'https:') {
            return;
        }
        if (isLocalHost(window.location.hostname)) {
            return;
        }
        if (document.querySelector('script[data-goatcounter]')) {
            return;
        }

        window.goatcounter = window.goatcounter || {};
        // Agrupa todo el sitio en una sola ruta para evitar contar una visita por subpágina.
        window.goatcounter.path = function () {
            return '/site';
        };

        var script = document.createElement('script');
        script.setAttribute('data-goatcounter', GOATCOUNTER_ENDPOINT);
        script.setAttribute('async', 'async');
        script.setAttribute('src', 'https://gc.zgo.at/count.js');
        document.head.appendChild(script);
    }

    window.toggleMenu = function toggleMenu() {
        var menu = getById('side-menu');
        if (!menu) {
            return;
        }

        menu.style.left = menu.style.left === '0px' ? '-300px' : '0px';
    };

    window.openModal = function openModal(imgSrc) {
        var modal = getById('modal');
        var modalImg = getById('modal-img');

        if (!modal || !modalImg) {
            return;
        }

        modal.style.display = 'flex';
        modalImg.src = imgSrc;
    };

    window.closeModal = function closeModal() {
        var modal = getById('modal');
        if (!modal) {
            return;
        }

        modal.style.display = 'none';
    };

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            window.closeModal();
        }
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            enableLogoHomeLink();
            enableAnalytics();
        });
    } else {
        enableLogoHomeLink();
        enableAnalytics();
    }
})();

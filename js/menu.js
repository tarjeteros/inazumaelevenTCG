(function () {
    'use strict';

    function getSafePathname() {
        var rawPath = window.location.pathname || '';
        try {
            return decodeURIComponent(rawPath);
        } catch (e) {
            return rawPath;
        }
    }

    function getPrefix() {
        var path = getSafePathname().toLowerCase().replace(/\\/g, '/');
        if (path.indexOf('/colecciones originales/barajas/') !== -1) {
            return '../../';
        }
        if (path.indexOf('/colecciones originales/') !== -1 || path.indexOf('/colecciones go/') !== -1) {
            return '../';
        }
        return '';
    }

    function p(prefix, target) {
        return prefix + target;
    }

    function injectMenu() {
        var sideMenu = document.getElementById('side-menu');
        if (!sideMenu) {
            return;
        }

        var prefix = getPrefix();
        var menuHtml = [
            '<a href="https://www.youtube.com/@Tarjeteros">Canal de Tarjeteros</a>',
            '<a href="https://linktr.ee/tcg_inazuma">Traducción de Cartas</a>',
            '<a href="https://drive.google.com/drive/folders/1Z7na7AZW6ceS1DFesohnh6cbB6-R6JnB">Aprende a jugar</a>',
            '<a href="' + p(prefix, 'penaltylegends.html') + '">FANGAME</a>',
            '',
            '<h3>Inazuma Eleven 1</h3>',
            '<a href="' + p(prefix, 'colecciones originales/1-1.html') + '">1-1 ESP</a>',
            '<a href="' + p(prefix, 'colecciones originales/1-2.html') + '">1-2</a>',
            '<a href="' + p(prefix, 'colecciones originales/R1.html') + '">R1</a>',
            '',
            '<h3>Inazuma Eleven 2</h3>',
            '<a href="' + p(prefix, 'colecciones originales/2-1.html') + '">2-1</a>',
            '<a href="' + p(prefix, 'colecciones originales/2-2.html') + '">2-2</a>',
            '<a href="' + p(prefix, 'colecciones originales/2-3.html') + '">2-3</a>',
            '<a href="' + p(prefix, 'colecciones originales/2-4.html') + '">2-4</a>',
            '<a href="' + p(prefix, 'colecciones originales/R2.html') + '">R2</a>',
            '',
            '<h3>Inazuma Eleven 3</h3>',
            '<a href="' + p(prefix, 'colecciones originales/3-1.html') + '">3-1</a>',
            '<a href="' + p(prefix, 'colecciones originales/3-2.html') + '">3-2</a>',
            '<a href="' + p(prefix, 'colecciones originales/3-3.html') + '">3-3</a>',
            '<a href="' + p(prefix, 'colecciones originales/3-4.html') + '">3-4</a>',
            '<a href="' + p(prefix, 'colecciones originales/3-5.html') + '">3-5</a>',
            '<a href="' + p(prefix, 'colecciones originales/3-6.html') + '">3-6</a>',
            '',
            '<h3>Barajas</h3>',
            '<a href="' + p(prefix, 'colecciones originales/barajas/y1.html') + '">Y-1 ESP</a>',
            '<a href="' + p(prefix, 'colecciones originales/barajas/y2.html') + '">Y-2</a>',
            '<a href="' + p(prefix, 'colecciones originales/barajas/y3.html') + '">Y-3</a>',
            '<a href="' + p(prefix, 'colecciones originales/barajas/y4.html') + '">Y-4</a>',
            '<a href="' + p(prefix, 'colecciones originales/barajas/y5.html') + '">Y-5</a>',
            '<a href="' + p(prefix, 'colecciones originales/barajas/y6.html') + '">Y-6</a>',
            '<a href="' + p(prefix, 'colecciones originales/barajas/y7.html') + '">Y-7</a>',
            '<a href="' + p(prefix, 'colecciones originales/barajas/y8.html') + '">Y-8</a>',
            '<a href="' + p(prefix, 'colecciones originales/barajas/y9.html') + '">Y-9</a>',
            '',
            '<h3>Promos</h3>',
            '<a href="' + p(prefix, 'colecciones originales/P.html') + '">P1</a>',
            '<a href="' + p(prefix, 'colecciones originales/P2.html') + '">P2</a>',
            '',
            '<h3>Inazuma Eleven GO</h3>',
            '<a href="' + p(prefix, 'colecciones GO/IG-00.html') + '">IG-00</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-01.html') + '">IG-01</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-02.html') + '">IG-02</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-03.html') + '">IG-03</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-04.html') + '">IG-04</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-05.html') + '">IG-05</a>',
            '',
            '<h3>Inazuma Eleven GO Chrono Stone</h3>',
            '<a href="' + p(prefix, 'colecciones GO/IG-07.html') + '">IG-07</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-08.html') + '">IG-08</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-09.html') + '">IG-09</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-010.html') + '">IG-10</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-012.html') + '">IG-12</a>',
            '',
            '<h3>Inazuma Eleven GO Galaxy</h3>',
            '<a href="' + p(prefix, 'colecciones GO/IG-014.html') + '">IG-14</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-015.html') + '">IG-15</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-016.html') + '">IG-16</a>',
            '',
            '<h3>Colecciones especiales</h3>',
            '<a href="' + p(prefix, 'colecciones GO/IG-06.html') + '">IG-06</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-011.html') + '">IG-11</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-013.html') + '">IG-13</a>',
            '<a href="' + p(prefix, 'colecciones GO/IG-017.html') + '">IG-17</a>',
            '',
            '<h3>Promos GO</h3>',
            '<a href="' + p(prefix, 'colecciones GO/PromosGO.html') + '">Promos GO</a>',
            '',
            '<h3>Colecciones traducidas</h3>',
            '<a href="' + p(prefix, 'colecciones originales/1-2 ESP.html') + '">1-2 ESP</a>',
            '<h3> </h3>',
            '<h3> </h3>'
        ].join('');

        sideMenu.innerHTML = menuHtml;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectMenu);
    } else {
        injectMenu();
    }
})();


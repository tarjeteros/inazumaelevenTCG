(function () {
    'use strict';

    function getCurrentPageName() {
        var path = decodeURIComponent(window.location.pathname || '');
        var parts = path.split('/');
        return parts[parts.length - 1] || '';
    }

    function createCard(card) {
        var wrapper = document.createElement('div');

        var img = document.createElement('img');
        img.src = card.src;
        img.alt = card.alt;
        img.loading = 'lazy';
        img.onclick = function () {
            window.openModal(this.src);
        };

        var p = document.createElement('p');
        p.textContent = card.label;

        wrapper.appendChild(img);
        wrapper.appendChild(p);
        return wrapper;
    }

    function renderCollection() {
        var root = document.getElementById('collection-root');
        if (!root || !window.COLLECTIONS_DATA) {
            return;
        }

        var key = getCurrentPageName();
        var data = window.COLLECTIONS_DATA[key];
        if (!data) {
            return;
        }

        var heading = document.createElement('h2');
        heading.innerHTML = data.headingHtml;
        root.appendChild(heading);

        if (Array.isArray(data.info) && data.info.length > 0) {
            var infoWrap = document.createElement('div');
            infoWrap.className = 'collection-info';

            data.info.forEach(function (item) {
                var img = document.createElement('img');
                img.src = item.src;
                img.alt = item.alt;
                if (item.className) {
                    img.className = item.className;
                }
                infoWrap.appendChild(img);
            });

            root.appendChild(infoWrap);
        }

        var galleryOuter = document.createElement('div');
        galleryOuter.className = 'gallery';

        var gallery = document.createElement('div');
        gallery.className = 'gallery';

        (data.cards || []).forEach(function (card) {
            gallery.appendChild(createCard(card));
        });

        galleryOuter.appendChild(gallery);

        var modal = document.createElement('div');
        modal.id = 'modal';
        modal.className = 'modal';
        modal.onclick = function () {
            window.closeModal();
        };

        var modalImg = document.createElement('img');
        modalImg.id = 'modal-img';
        modalImg.src = '';
        modalImg.onclick = function (event) {
            event.stopPropagation();
        };

        modal.appendChild(modalImg);
        galleryOuter.appendChild(modal);

        root.appendChild(galleryOuter);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderCollection);
    } else {
        renderCollection();
    }
})();

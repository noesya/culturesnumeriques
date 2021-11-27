/* global */
window.events = {
    init: function () {
        'use strict';
        this.events = document.querySelector('#events');
        this.buttonExtend = document.querySelector('.js-events-extend');
        this.buttonCompact = document.querySelector('.js-events-compact');
        this.bindActions();
        console.log('init');
    },

    bindActions: function () {
        'use strict';
        console.log('bindActions');
        var that = this;
        if (this.buttonExtend) {
            this.buttonExtend.addEventListener('click', function () {
                that.extend();
            });
        }
        if (this.buttonCompact) {
            this.buttonCompact.addEventListener('click', function () {
                that.compact();
            });
        }
    },

    extend: function () {
        'use strict';
        console.log('extend');
        this.events.classList.remove('events--compact');
    },

    compact: function () {
        'use strict';
        console.log('compact');
        this.events.classList.add('events--compact');
    },

    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();

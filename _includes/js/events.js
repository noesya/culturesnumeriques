/* global */
console.log('ok');
window.events = {
    init: function () {
        'use strict';
        this.buttonExtend = document.querySelector('.js-events-extend');
        this.buttonCompact = document.querySelector('.js-events-compact');
        this.bindActions();
    },

    bindActions: function () {
        'use strict';
        console.log('ok');
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
    },

    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();

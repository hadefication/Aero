import SM2 from 'soundmanager2';
import _isUndefined from 'lodash/isUndefined';
import _merge from 'lodash/merge';

export default class Player {

    constructor(options) {
        let self = this;

        self.options = _merge({
            debug: true,
            shims: '/swf/',
            autoPlay: false,
        }, options);

        self.ui = self.options.el;
        self.tracks = [];
        self.dj = SM2.soundManager.setup({
            url: self.options.shims,
            debugMode: self.options.debug,
            onready: function(e) {
                self.tracks.push(self.dj.createSound({
                    url: self.options.source,
                    autoPlay: self.options.autoPlay,
                    onfinish: function() {
                        
                    }
                }));
            },
            ontimeout: function() {
                throw new Error('');
            }
        });
    }

    actions() {

    }

    play() {

    }


}

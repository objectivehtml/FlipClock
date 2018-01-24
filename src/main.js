import './scss/flipclock.scss';
import Broadcast from '@objectivehtml/broadcast';
import Component from './js/Components/Component.js';
import Timer from './js/Components/Timer.js';
import Uuid from './js/Components/Uuid.js';
import ListItem from './js/Components/ListItem.js';

const t = {
    true: function() {
        console.log.apply(this, arguments);
    },
    false: function() {
        console.log.apply(this, arguments);
    }
};


    const instance = new ListItem(1, {
        className: 'some-class-name'
    });

    t.true(instance.value === 1);
    t.true(instance.getOption('className') === 'some-class-name');

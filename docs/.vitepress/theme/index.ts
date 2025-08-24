import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import Intro from '../../components/Intro.vue';
import './styles.css';

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'home-hero-image': () => h(Intro)
        });
    }
};
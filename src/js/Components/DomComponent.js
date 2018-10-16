import Component from './Component';
import validate from '../Helpers/Validate';
import translate from '../Helpers/Translate';
import DefaultValues from '../Config/DefaultValues';
import ConsoleMessages from '../Config/ConsoleMessages';

export default class DomComponent extends Component {

    constructor(attributes) {
        super(Object.assign({
            theme: DefaultValues.theme,
            language: DefaultValues.language
        }, attributes));
    }

    get theme() {
        return this.$theme;
    }

    set theme(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.value);
        }

        this.$theme = value;
    }

    get language() {
        return this.$language;
    }

    set language(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.language);
        }

        this.$language = value;
    }

    translate(key) {
        return translate(key, this.language);
    }

    t(key) {
        return this.translate(key);
    }

	render() {
		if(this.theme[this.constructor.name]) {
            return this.theme[this.constructor.name](this);
        }

        throw new Error(
            'This component cannot be rendered because it has no template.'
        );
	}

    static getDefaultTheme() {
        return DefaultValues.theme;
    }

    static setDefaultTheme(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.theme);
        }

        DefaultValues.theme = value
    }

    static getDefaultLanguage() {
        return DefaultValues.language;
    }

    static setDefaultLanguage(value) {
        if(!validate(value, 'object')) {
            error(ConsoleMessages.language);
        }

        DefaultValues.language = value;
    }

}

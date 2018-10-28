import * as LANGUAGES from '../Languages';

export default function language(name) {
    return name ? LANGUAGES[name.toLowerCase()] || Object.values(LANGUAGES).find(value => {
        return value.aliases.indexOf(name) !== -1;
    }) : null;
}

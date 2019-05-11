import DomComponent from './DomComponent';

/**
 * Create a new `Divider` instance.
 *
 * The purpose of this class is to return a unique class name so the theme can
 * render it appropriately, since each `DomComponent` can receive its own template
 * from the theme.
 *
 * @class Divider
 * @extends DomComponent
 * @param {(object|undefined)} [attributes] - The instance attributes.
 */
export default class Divider extends DomComponent {

    /**
     * Define the name of the class.
     *
     * @return {string}
     */
    static defineName() {
        return 'Divider';
    }

}

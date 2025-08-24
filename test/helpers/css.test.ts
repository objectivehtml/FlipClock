import { describe, expect, it } from 'vitest';
import { useCss } from '../../src/helpers/css';

describe('useCss', () => {
    const css = useCss((background: string, color: string) => ({
        body: {
            background: background,
            color: color,
        }
    }));

    it('declares css with props', () => {
        const declaration = css('white', 'black');
        
        expect(declaration).toMatchObject({
            css: {
                body: {
                    background: 'white',
                    color: 'black' 
                }
            }
        });

        expect(String(declaration)).toBe('go3003028782');
    });

    it('can be merged', () => {
        css.merge(() => ({
            h1: {
                fontSize: '20px'
            }
        }));

        const declaration = css('white', 'black');

        expect(declaration).toMatchObject({
            css: {
                body: {
                    background: 'white',
                    color: 'black' 
                },
                h1: {
                    fontSize: '20px'
                }
            }
        });
    });

    it('can be extended', () => {
        expect(css('white', 'black')).toMatchObject({
            css: {
                body: {
                    background: 'white',
                    color: 'black' 
                }
            }
        });

        expect(css.extend(() => ({
            h1: {
                fontSize: '20px'
            }
        }))('white', 'black')).toMatchObject({
            css: {
                body: {
                    background: 'white',
                    color: 'black' 
                },
                h1: {
                    fontSize: '20px'
                }
            }
        });
    });
});
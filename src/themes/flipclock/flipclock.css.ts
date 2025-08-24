import { useCss } from "../../helpers/css";

/**
 * The FlipClock CSS options.
 * 
 * @public
 */
export type FlipClockCssOptions = {
    borderRadius?: string;
    fontSize?: string;
    fontFamily?: string;
    width?: string;
    height?: string;
    animationDuration?: string;
    animationDelay?: string;
}

/**
 * The FlipClock Theme CSS.
 * 
 * @public
 */
export const css = useCss((options?: FlipClockCssOptions) => ({
    '&': {
        '--border-radius': options?.borderRadius ?? '.15em',
        '--font-size': options?.fontSize ?? '4.5em',
        '--font-family': options?.fontFamily ?? '"Helvetica Neue", Helvetica, sans-serif',
        '--width': options?.width ?? '1em',
        '--height': options?.height ?? '1.45em',
        '--animation-duration': options?.animationDuration ?? '250ms',
        '--animation-delay': options?.animationDelay ?? 'var(--animation-duration)',

        fontFamily: 'var(--font-family)',
        fontSize: 'var(--font-size)',
        userSelect: 'none',
        textAlign: 'center',
        position: 'relative',
        width: '100%',
        display: 'inline-flex',
        boxSizing: 'border-box',
        alignItems: 'flex-end',
        gap: '.25rem'
    },
    '.flip-clock-label': {
        fontSize: '1rem',
        marginBottom: '.5rem',
    },
    '.flip-clock-meridium': {
        lineHeight: '1em',
        top: '50%',
        left: '100%',
        flex: '0',
        width: 'auto',
        textTransform: 'uppercase',
        fontWeight: '200',
        transform: 'translate(.5em, -50%)' 
    },
    '.flip-clock-divider': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'serif',
        color: '#333',
        height: 'var(--height)',
        '.flip-clock-divider-inner': {
            fontSize: '1.25em' 
        },
        '&[data-value=" "]': {
            minWidth: '1rem'
        },
        '.dark &': {
            color: '#ccc'
        },
    },
    '.flip-clock-group': {
        display: 'flex',
        flexDirection: 'column',
        '+ .flip-clock-group': {
            marginLeft: '1rem' 
        },
        '.flip-clock-group-items': {
            display: 'flex',
            alignItems: 'end',
            gap: '.25rem' 
        }
    },
    '.flip-clock-card': {
        width: 'var(--width)',
        height: 'var(--height)',
        position: 'relative',
        borderRadius: 'var(--border-radius)',
        boxShadow: '0 1.5px 3px rgba(0, 0, 0, 0.24), 0 3px 8px rgba(0, 0, 0, 0.05)',
        fontWeight: 'bold',
        color: '#ccc',
        flexShrink: 0,
        '&:not(.animate)': {
            '.active .flip-clock-card-item-inner': {
                zIndex: '4' 
            },
            '.flip-clock-card-item-inner': {
                '.top, .bottom': {
                    '&:after': {
                        display: 'none' 
                    } 
                } 
            } 
        },
        '.flip-clock-card-item': {
            
        },
        '.flip-clock-card-item-inner': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            '&:first-child': {
                zIndex: '2' 
            },
            '.top, .bottom': {
                width: '100%',
                height: '50%',
                overflow: 'hidden',
                position: 'relative',
                fontSize: '1em',
                background: '#333',
                boxShadow: 'inset 0 0 .2em rgba(0,0,0,.5)',
                '&:after': {
                    content: '" "',
                    display: 'block',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    overflow: 'hidden' 
                },
                '&:before': {
                    content: '" "',
                    display: 'block',
                    width: '100%',
                    height: '1px',
                    position: 'absolute' 
                } 
            },
            '.top': {
                borderRadius: 'var(--border-radius) var(--border-radius) 0 0',
                lineHeight: 'var(--height)',
                '&:after': {
                    borderRadius: 'var(--border-radius) var(--border-radius) 0 0' 
                },
                '&:before': {
                    background: '#333',
                    opacity: '.4',
                    bottom: '0' 
                } 
            },
            '.bottom': {
                borderRadius: '0 0 var(--border-radius) var(--border-radius)',
                lineHeight: '0',
                '&:after': {
                    borderRadius: '0 0 var(--border-radius) var(--border-radius)' 
                },
                '&:before': {
                    background: '#ccc',
                    opacity: '.1' 
                } 
            } 
        },
        '&.animate': {
            animationDuration: 'var(--animation-duration)',
            animationDelay: 'var(--animation-delay)',
            '.flip-clock-card-item-inner': {
                perspective: '15em' 
            },
            '.top, .bottom, .active, .active > div, .before, .before > div': {
                animationDelay: 'inherit',
                animationFillMode: 'forwards',
                animationDuration: 'inherit',
                animationTimingFunction: 'inherit',
                '&:after': {
                    animationDuration: 'inherit',
                    animationFillMode: 'inherit' 
                } 
            },
            '.before': {
                animationDelay: '0s',
                animationTimingFunction: 'ease-in',
                '.top': {
                    animationName: 'flip-clock-top' 
                },
                '.top:after, .bottom:after': {
                    animationName: 'flip-clock-show-shadow' 
                } 
            },
            '.active': {
                animationTimingFunction: 'ease-out',
                '& > div': {
                    animationName: 'flip-clock-indexing' 
                },
                '.top:after, .bottom:after': {
                    animationName: 'flip-clock-hide-shadow' 
                },
                '.bottom': {
                    animationName: 'flip-clock-bottom' 
                } 
            } 
        },
        '.active': {
            zIndex: '2',
            '.bottom': {
                zIndex: '2',
                transformOrigin: 'top center' 
            } 
        },
        '.before': {
            zIndex: '3',
            '.top': {
                zIndex: '2',
                transformOrigin: 'bottom center',
                '&:after': {
                    background: 'linear-gradient(to bottom, rgba(0,0,0,.1) 0%, rgba(0,0,0,1) 100%)' 
                } 
            },
            '.bottom': {
                '&:after': {
                    background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,.1) 100%)' 
                } 
            } 
        } 
    },
    '@keyframes flip-clock-indexing': {
        '0%': {
            zIndex: '2' 
        },
        '1%': {
            zIndex: '3' 
        },
        '100%': {
            zIndex: '4' 
        } 
    },
    '@keyframes flip-clock-bottom': {
        '0%': {
            transform: 'rotateX(90deg)' 
        },
        '100%': {
            transform: 'rotateX(0)' 
        } 
    },
    '@keyframes flip-clock-top': {
        '0%': {
            transform: 'rotateX(0)' 
        },
        '100%': {
            transform: 'rotateX(-90deg)' 
        } 
    },
    '@keyframes flip-clock-show-shadow': {
        '0%': {
            opacity: '0' 
        },
        '100%': {
            opacity: '1' 
        } 
    },
    '@keyframes flip-clock-hide-shadow': {
        '0%': {
            opacity: '1' 
        },
        '100%': {
            opacity: '0' 
        } 
    } 
}));
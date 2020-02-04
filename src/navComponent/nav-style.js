import configStyle from '../config-style'

export default {
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex'
    },
    previous: {
        ...configStyle.button,
        textAlign: 'left'
    },
    next: {
        ...configStyle.button,
        textAlign: 'right'
    }
}
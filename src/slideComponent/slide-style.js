import configStyles from '../config-style'

export default {
    root: {
        position: 'absolute',
        top: 0,
        transition: 'all 0.6s'
    },
    title: {
        margin: '0 0 10px 0'
    },
    footer: {
        position: 'absolute',
        top: configStyles.image.imageHeight - configStyles.footer.footerHeight,
        left: 0,
        width: '100%',
        height: configStyles.footer.footerHeight,
        padding: 15,
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#ffff',
        textShadow: '1px 1px 0 rgba(0, 0, 0, 0.6)',
        fontFamily: '"Helvetica Neue", Helvetica, Arial',
        fontSize: 14,
        lineHeight: '1.4em',
        boxSizing: 'border-box'
    }
}
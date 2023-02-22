//import { makeStyles } from '@mui/material'
import styled from '@emotion/styled'

import { COLORS, FONTS, SIZES } from '../../constants'

const useStyles = styled({
    appBar: {

        backgroundColor: COLORS.white,
        transform: 'translatez(0)'
    },
    appBarLogo: {
        width: '40px',
        height: '40px',
        marginRight: '20px'
    },
    appBarLogoTitle: {
        color: COLORS.primary,
        fontSize: '2rem',
        fontFamily: 'unset'
    },
    appBarLogoGroup: {
        display: 'flex',
        alignItems: 'center'

    },
    appBarButton: {
        textTransform: 'none',
        color: COLORS.darkgray,
        fontWeight: 'bold',
        marginRight: '20px'
    },
    appBarButtonAct: {
        textTransform: 'none',
        color: COLORS.primary,
        fontWeight: 'bold',
        marginRight: '20px'
    },
    refreshDate: {
        color: COLORS.darkgray,
        fontFamily: 'unset',

    },
    userName: {
        color: COLORS.darkgray,
        fontFamily: 'unset',
        fontWeight: 'bold',
    },
    controlButton: {
        textTransform: 'none',
        color: COLORS.darkgray,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginRight: '20px'
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px, 8px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2f2'
        }
    }
})
// const mainStyles = makeStyles({
//     appBar: {

//         backgroundColor: COLORS.white,
//         transform: 'translatez(0)'
//     },
//     appBarLogo: {
//         width: '40px',
//         height: '40px',
//         marginRight: '20px'
//     },
//     appBarLogoTitle: {
//         color: COLORS.primary,
//         fontSize: '2rem',
//         fontFamily: 'unset'
//     },
//     appBarLogoGroup: {
//         display: 'flex',
//         alignItems: 'center'

//     },
//     appBarButton: {
//         textTransform: 'none',
//         color: COLORS.darkgray,
//         fontWeight: 'bold',
//         marginRight: '20px'
//     },
//     appBarButtonAct: {
//         textTransform: 'none',
//         color: COLORS.primary,
//         fontWeight: 'bold',
//         marginRight: '20px'
//     },
//     refreshDate: {
//         color: COLORS.darkgray,
//         fontFamily: 'unset',

//     },
//     userName: {
//         color: COLORS.darkgray,
//         fontFamily: 'unset',
//         fontWeight: 'bold',
//     },
//     controlButton: {
//         textTransform: 'none',
//         color: COLORS.darkgray,
//         fontWeight: 'bold',
//         textDecorationLine: 'underline',
//         marginRight: '20px'
//     },
//     searchInput: {
//         opacity: '0.6',
//         padding: '0px, 8px',
//         fontSize: '0.8rem',
//         '&:hover': {
//             backgroundColor: '#f2f2f2f2'
//         }
//     }
// })

export { useStyles }
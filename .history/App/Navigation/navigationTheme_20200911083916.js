import {DefaultTheme} from '@react-navigation/native'
import colors from '../StyleSheets/colors'

const myTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
}

export default myTheme
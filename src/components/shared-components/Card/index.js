import { Card as AntdCard } from 'antd';
import { useSelector } from 'react-redux';
import { GRAY_SCALE, DARK_MODE } from 'constants/ThemeConstant';

const Card = ({style, ...rest}) => {
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    return (
        <AntdCard  style={{ marginBottom: 20, backgroundColor:currentTheme==='dark'? DARK_MODE.BG_COLOR: GRAY_SCALE.GRAY_LIGHTER }} {...rest} />
    )
}

export default Card
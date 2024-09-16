import { Table as AntdTable } from 'antd';
import { useSelector } from 'react-redux';
import { GRAY_SCALE, DARK_MODE } from 'constants/ThemeConstant';

const Table = ({style, ...rest}) => {
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    const lightRows =(index)=> index % 2 === 0 ? GRAY_SCALE.GRAY_LIGHTER : '#C8C8C8'
    const darkRows =(index)=> index % 2 === 0 ? "#222" : DARK_MODE.BG_COLOR

    
    return (
        <AntdTable  onRow={(record, index) => ({
            style: {
              backgroundColor: currentTheme==="dark"?darkRows(index) : lightRows(index), // Light blue for even, light gray for odd rows
            },
          })}    {...rest} />
    )
}

export default Table
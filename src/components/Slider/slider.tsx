import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

export const Slider = () => {
    return (
        <div className="slider">
            {data.map((e) => {
                return <img src={e} alt="images" />;
            })}
            <div className="icons">
                <div className="icon">
                    <ArrowBackOutlinedIcon />
                </div>
                <div className="icon">
                    <ArrowForwardOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

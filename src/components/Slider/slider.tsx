import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ReactSlider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slider.scss';

const data = [
    'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <button className="arrow-btn arrow-right" onClick={onClick}>
            <ArrowForwardOutlinedIcon />
        </button>
    );
};

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
        <button className="arrow-btn arrow-left" onClick={onClick}>
            <ArrowBackOutlinedIcon />
        </button>
    );
};

export const Slider = () => {
    const settings = {
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: <ArrowBackOutlinedIcon color="primary" />,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        // nextArrow: <ArrowForwardOutlinedIcon color="primary" />,
    };

    return (
        <div className="slider">
            <ReactSlider {...settings}>
                {data.map((e) => {
                    return <img src={e} alt="images" />;
                })}
            </ReactSlider>
            {/* <div className="icons">
                <div className="icon slick-arrow ">
                    <ArrowBackOutlinedIcon />
                </div>
                <div className="icon slick-arrow ">
                    <ArrowForwardOutlinedIcon />
                </div>
            </div> */}
        </div>
    );
};

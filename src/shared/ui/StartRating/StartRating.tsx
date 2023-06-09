import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StartRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

interface StartRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStar?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StartRating = memo((props: StartRatingProps) => {
    const {
        className, onSelect, size = 30, selectedStar = 0,
    } = props;
    const [currentStarHover, setCurrentStarHover] = useState(0);
    const [isSelected, setIsSelected] = useState(false);

    const onHover = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStarHover(starCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarHover(0);
        }
    };

    const onClick = (starCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starCount);
            setCurrentStarHover(starCount);
            setIsSelected(true);
        }
    };
    return (
        <div className={classNames(cls.StartRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [currentStarHover >= starNumber ? cls.hovered : cls.normal],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});

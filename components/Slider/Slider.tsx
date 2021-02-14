import React, { FC, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { SliderContent } from '@components/SliderContent/SliderContent';
import { Slide, SlideProps } from '@components/Slide/Slide';
interface SliderProps {
    slides: SlideProps[];
}

const StyledSlider = styled.div`
    position: relative;
    height: auto;
    margin: auto;
    overflow: hidden;
`;
const StyledNavBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

const StyledNavBarButton = styled.button<{ isActive: boolean }>`
    margin-right: 5px;
    cursor: pointer;
    width: 198px;
    height: 4px;
    border: none;
    background-color: ${({ isActive }) =>
        isActive === true ? 'white' : '#6E7986'};
    margin-bottom: 50px;

    :active,
    :focus {
        outline: none;
        border: none;
    }
`;

export const Slider: FC<SliderProps> = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onClick = useCallback(
        (index: number) => () => {
            setActiveIndex(index);
        },
        [activeIndex]
    );

    return (
        <>
            <StyledSlider>
                <SliderContent>
                    <Slide
                        color={slides[activeIndex].color}
                        icon={slides[activeIndex].icon}
                        text={slides[activeIndex].text}
                        highlightedText={slides[activeIndex].highlightedText}
                        extendedText={slides[activeIndex].extendedText}
                        infoText={slides[activeIndex].infoText}
                        company={slides[activeIndex].company}
                    />
                </SliderContent>
                <StyledNavBar>
                    {slides.map((_, index) => (
                        <StyledNavBarButton
                            key={index}
                            onClick={onClick(index)}
                            isActive={index === activeIndex}
                        />
                    ))}
                </StyledNavBar>
            </StyledSlider>
        </>
    );
};

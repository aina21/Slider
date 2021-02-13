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
const StyledNavBarButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

const StyledButton = styled.button<{ isActive: boolean }>`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    width: 198px;
    height: 4px;
    background: ${(isActive) => (isActive ? 'white' : '#6E7986')};
`;

export const Slider: FC<SliderProps> = ({ slides }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const onClick = useCallback(
        (index: number) => () => {
            console.log(index);
            setActiveIndex(index);
            console.log(activeIndex);
        },
        []
    );
    return (
        <>
            <StyledSlider>
                <SliderContent>
                    {slides.map((slide, index) => (
                        <Slide
                            key={index}
                            color={slide.color}
                            icon={slide.icon}
                            text={slide.text}
                            highlightedText={slide.highlightedText}
                            extendedText={slide.extendedText}
                        />
                    ))}
                </SliderContent>
                <StyledNavBarButton>
                    {slides.map((_, index) => (
                        <StyledButton
                            key={index}
                            onClick={onClick(index)}
                            isActive={activeIndex === index}
                        />
                    ))}
                </StyledNavBarButton>
            </StyledSlider>
        </>
    );
};

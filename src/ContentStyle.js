import styled from 'styled-components';

export const ContentHeader1 = styled.h1`
  color: #333333;
  text-align: center;
  font-size: 4vmax;
`;

export const ContentHeader3 = styled.h3`
  text-align: center;
  font-size: 1.6vmax;
`;

export const ContentLeftHeader3 = styled.h3`
  text-align: left;
  font-size: 1.6vmax;
`;

export const ContentHeader5 = styled.h5`
  margin: 0;
  text-align: left;
  font-size: 1vmax;
  color: #4f4f4f
`;

export const ContentInnerText = styled.p`
  margin: 0;
  text-align: left;
  color: #666666;
`;

export const ContentAboutMeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 2vw 1vh;
  align-items: center;
`;

export const HorizontalSpan = styled.span`
  display: flex;
  justify-content: 
`;

export const VerticalSpan = styled.span`
  display: flex;
  flex-flow: column;
`;

export const Icons = styled.img`
  width: 5vw;
  height: auto;
  justify-self: center;
`;

export const ContentDivSpan = styled.span`
  ${(props) => props.direction === 'horizontal' ? 
    (`margin: 2vh 0; width: 100%; height: ${props.length}; background-color: ${props.color}`) : 
    (`margin: 0 2vw; width: ${props.length}; height: 100%; background-color: ${props.color};`)};
`;
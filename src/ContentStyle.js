import styled from 'styled-components';

export const ContentHeader1 = styled.h1`
  font-family: 'jua-regular';
  color: #000000;
  text-align: center;
  font-size: 4vmax;
`;

export const ContentHeader3 = styled.h3`
  font-family: 'sans-serif';
  color: #000000;
  text-align: center;
  font-size: 1.6vmax;
`;

export const ContentLeftHeader3 = styled.h3`
  font-family: 'jua-regular';
  color: #000000;
  text-align: left;
  font-size: 1.6vmax;
`;

export const ContentHeader5 = styled.h5`
  margin: 0;
  text-align: left;
  font-size: 1.2vmax;
  color: #000000
`;

export const ContentHeader6 = styled.h5`
  margin: 0;
  text-align: left;
  font-size: 1vmax;
  color: #000000
`;

export const ContentInnerText = styled.p`
  font-family: 'sans-serif';
  margin: 0;
  text-align: left;
  color: #333333;
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

export const Company = styled.p`
  font-family: 'sans-serif';
  font-size: 2.2vh;
`;

export const Duration = styled.p`
  font-family: 'sans-serif';
  font-size: 1.5vh;
`;

export const Logo = styled.img`
  padding: 1vh;
  width: 7vw;
  aspect-ratio: 1/1;
`;

export const LogoLabel = styled.label`
  width: 100%;
  text-align: left;
`;

export const ContentProjectDescGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 2vw 1vh;
  align-items: center;
  justify-content: start;
  margin-bottom: 2vh;

  padding: 10px;
`;

export const ContentProjectStoryGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  grid-template-rows: 1fr;
  gap: 0.5vw 1vh;
  align-items: center;
  justify-items: center;
  margin-bottom: 2vh;

  padding: 10px;
`;

export const ContentProjectStoryImg = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const ContentPreview = styled.div`
  position: fixed;
  width: 75vw;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 5vw;
`;
    
export const ContentStoryImgPreview = styled.img`
  position: relative;
  width: 70vw;
  height: auto;
  background-color: yellow;
  transform: translate(2vw,12%);
`;

export const PrevImg = styled.span`
  height: 78.7vh;
  width: 4vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 16;
  cursor: pointer;
  transform: translate(50%, 11.9%);
  opacity: 1;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  transition: background-color 0.3s ease;
`;

export const NextImg = styled.span`
  height: 78.7vh;
  width: 4vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 16;
  cursor: pointer;
  transform: translate(-70.7%, 11.9%);
  opacity: 1;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  :hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  transition: background-color 0.3s ease;
`;
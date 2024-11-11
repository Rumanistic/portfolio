import styled from 'styled-components';

// app 전체 스타일링
export const Application = styled.div`
  background-color: #000000;
  // background-image: url('./resources/images/bg.jpg');
  // background-size: cover;
  text-align: center;
`;

// 어사이드 메뉴 바 스타일링
export const ContentAside = styled.aside`
  position: fixed;
  left: 5vw;
  width: 15vw;
  height: 100vh;
  display: flex;
  background-color: #6e6e6e;
  color: #eeeeee;
  flex-flow: column;
`;

export const AsideContainer = styled.div`
  padding-top: 10vh;
  ${(props) => (props.selected && `background-color: ${props.stackColor}; color: #000000;`)};
  transition: background-color 0.3s;
`;

export const ContainerImage = styled.img`
width: 80%;
aspect-ratio: 3/4;
border-radius: 40px;
align-self: center
`;

export const ContainerHeader = styled.h1`
  font-size: 1.8vmax;
`;

export const ContainerText = styled.p`
  font-size: 1.4vmax;
`;

// 메뉴 컨테이너 스타일링
export const MenuContainer = styled.ul`
    text-align: left;
    list-style: none;
    padding-left: 3vw;
`;

// 메뉴 스타일링
export const MenuContent = styled.li`
  font-family: 'jua-regular';
  padding: 0.2vh 0;
  font-size: 1.2vmin;
  ${(props) => (props.selected && `background-color: ${props.stackColor}; color: #000000; font-size: 2.5vmin`)};
  cursor: pointer;
  transition: background-color 0.3s, font-size 0.3s;
`;

export const ContentDiv = styled.div`
  position: relative;
  left: 20vw;
  padding: 0 2vw;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 70vw;
  min-height: 100vh;
  background-color: ${(params) => params.stackColor};
  height: 100vh;
  overflow-y: auto;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  padding: 0 2vw;
  height: 100vh;
`;

export const ContentSectionJustify = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  padding: 0 2vw;
  height: 100vh;
`;
import { useRef } from 'react';
import * as Common from '../../CommonStyle';
import * as Content from '../../ContentStyle';

const logos = {
  java: `${process.env.PUBLIC_URL}/resources/images/logos/java.png`,
  jquery: `${process.env.PUBLIC_URL}/resources/images/logos/jquery-color.svg`,
  eclipse: `${process.env.PUBLIC_URL}/resources/images/logos/eclipseide-color.svg`,
  springboot: `${process.env.PUBLIC_URL}/resources/images/logos/springboot-color.svg`,
  html5: `${process.env.PUBLIC_URL}/resources/images/logos/html5-color.svg`,
  css3: `${process.env.PUBLIC_URL}/resources/images/logos/css3-color.svg`,
  javascript: `${process.env.PUBLIC_URL}/resources/images/logos/javascript-color.svg`,
  react: `${process.env.PUBLIC_URL}/resources/images/logos/react-color.svg`,
  vscode: `${process.env.PUBLIC_URL}/resources/images/logos/vscode.png`,
  oracle: `${process.env.PUBLIC_URL}/resources/images/logos/oracle-color.svg`,
  github: `${process.env.PUBLIC_URL}/resources/images/logos/github-color.svg`,
};

function Skills({onScrollEnd, onScrollReverse, stackParam, stackColor}) {
    const contentRef = useRef();

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
  
      if (e.deltaY > 0) {
        // 아래로 스크롤
        if (scrollTop + clientHeight >= scrollHeight) {
          // 스크롤이 끝났을 때
          e.preventDefault();
          onScrollEnd(); // 다음 페이지로 이동
        }
      } else {
        // 위로 스크롤
        if (scrollTop <= 0) {
          // 상단에 도달했을 때
          e.preventDefault();
          // 이전 페이지로 이동 (필요한 경우 구현)
          onScrollReverse();
        }
      }
    };

    const isFront = () => {
      return (
        <Content.VerticalSpan style={{height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Content.VerticalSpan style={{justifyContent: 'center'}}>
            <Content.LogoLabel>Skills</Content.LogoLabel>
            <Content.HorizontalSpan style={{justifyContent: 'center'}}>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.html5} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.css3} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.javascript} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.react} alt=''></Content.Logo>
            </Content.HorizontalSpan>
          </Content.VerticalSpan>
          <Content.VerticalSpan style={{justifyContent: 'center'}}>
            <Content.LogoLabel>Tools</Content.LogoLabel>
            <Content.HorizontalSpan style={{justifyContent: 'center'}}>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.vscode} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.github} alt=''></Content.Logo>
            </Content.HorizontalSpan>
          </Content.VerticalSpan>
        </Content.VerticalSpan>
      );
    }

    const isBack = () => {
      return (
        <Content.VerticalSpan style={{height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Content.VerticalSpan style={{justifyContent: 'center'}}>
            <Content.LogoLabel>Skills</Content.LogoLabel>
            <Content.HorizontalSpan style={{justifyContent: 'center'}}>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.java} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.jquery} alt=''></Content.Logo>
            </Content.HorizontalSpan>
          </Content.VerticalSpan>
          <Content.VerticalSpan style={{justifyContent: 'center'}}>
            <Content.LogoLabel>Tools</Content.LogoLabel>
            <Content.HorizontalSpan style={{justifyContent: 'center'}}>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.eclipse} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.springboot} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.oracle} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.github} alt=''></Content.Logo>
            </Content.HorizontalSpan>
          </Content.VerticalSpan>
        </Content.VerticalSpan>
      );
    }

    return (
        <Common.ContentDiv ref={contentRef} onWheel={handleWheel} stackColor={stackColor}>
          <Content.ContentLeftHeader3>What can I do?</Content.ContentLeftHeader3>
          {stackParam === 'front' ? isFront() : isBack()}
        </Common.ContentDiv>
    )
}



export default Skills;
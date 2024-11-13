import { useEffect, useRef, useState } from 'react';
import * as Common from '../../CommonStyle';
import * as Content from '../../ContentStyle';

function Summary({onScrollReverse, stackColor}) {
    const contentRef = useRef();
    const [showInfo, setShowInfo] = useState([false,false,false]);

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
  
      if (e.deltaY > 0) {
        // 아래로 스크롤
        if (scrollTop + clientHeight >= scrollHeight) {
          // 스크롤이 끝났을 때
          e.preventDefault();
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

    const toggleShowInfo = (i) => {
      const toggleInfo = [...showInfo];
      toggleInfo[i] = !toggleInfo[i];
      setShowInfo(toggleInfo);
    }

    useEffect(() => {

    }, [showInfo])

    return (
        <Common.ContentDiv
            ref={contentRef}
            onWheel={handleWheel}
            stackColor={stackColor}
        >
        <Content.ContentLeftHeader3>Summary</Content.ContentLeftHeader3>
        <Content.ContentContainer>
          <Content.ContentHeader5 style={{paddingLeft: '1vw'}}>@ Popspot</Content.ContentHeader5>
          <Content.ContentInnerText style={{paddingLeft: '2vw'}}>
            기획과 분석 단계에서는 팀원들과 긴밀히 소통하며 프로젝트를 원활하게 진행할 수 있었습니다.<br/> 
            그러나 기능 개발 단계에서 각 파트를 담당한 개발자들과의 의사소통이 부족하여 개발 일정이 2주간 지연되는 상황이 발생했습니다.<br/> 
            이에 따라 팀원들의 강점을 고려하여 역할을 재분배하고, 지속적인 피드백을 통해 목표했던 주요 기능을 갖춘 웹 페이지를 완성할 수 있었습니다.
          </Content.ContentInnerText>
          <br/>
          <Content.ContentHeader5 style={{paddingLeft: '1vw'}}>@ MediViewer</Content.ContentHeader5>
          <Content.ContentInnerText style={{paddingLeft: '2vw'}}>
            Popspot 프로젝트에서의 경험을 살려 팀장 및 팀원들과 긴밀히 소통하며 프로젝트를 진행했습니다.<br/>
            React 라이브러리를 사용하다가 Thymeleaf 라이브러리를 사용하게 되어 초반에 페이지 렌더링에 어려움이 있었지만,<br/>
            서버 사이드 렌더링과 클라이언트 사이드 렌더링의 장단점 및 차이점을 파악하고, 프로젝트 상황에 맞춰 개발하여<br/>
            최종적으로 안정적인 페이지 렌더링을 구현할 수 있었습니다.
          </Content.ContentInnerText>
          <br/>
          <Content.ContentHeader5 style={{paddingLeft: '1vw'}}>so...</Content.ContentHeader5>
          <Content.ContentHeader6 style={{paddingLeft: '2vw'}}>
          이 경험을 통해 팀의 성공을 위해 맞춤형 소통과 업무 배분의 중요성을 배웠고, 적극적인 의사소통으로 팀 목표에 부합하는 웹 개발자가 되도록 노력하겠습니다.
          </Content.ContentHeader6>
          
        </Content.ContentContainer>
        <br/>
        <br/>
        <Content.ContentLeftHeader3>And contact me @</Content.ContentLeftHeader3>
        <Content.ContentContactGrid>
          <Content.Icons src='./resources/images/icons/phonecall.png'></Content.Icons>
          <span>
            <Content.ContentHeader6>Mobile Phone</Content.ContentHeader6>
            <Content.ContentInnerText>+82 10-9890-1388</Content.ContentInnerText>
          </span>
          <Content.Icons src='./resources/images/icons/email.png'></Content.Icons>
          <span>
            <Content.ContentHeader6>E-mail</Content.ContentHeader6>
            <Content.ContentInnerText>xinatic@naver.com<br/>rumanistic@gmail.com</Content.ContentInnerText>
          </span>
          <Content.Icons src='./resources/images/logos/github-color.svg'></Content.Icons>
          <span>
            <Content.ContentHeader6>Github</Content.ContentHeader6>
            <Content.ContentInnerText 
              onClick={() => window.open('https://www.github.com/rumanistic', '_blank')}
              style={{color: '#333333', fontWeight: 'bold', cursor: 'pointer'}}
            >
                <u>@rumanistic</u>
            </Content.ContentInnerText>
          </span>
        </Content.ContentContactGrid>
        <br/>
        <br/>
        <Content.ContentHeader1> THANKS FOR WATCHING</Content.ContentHeader1>
        </Common.ContentDiv>
    )
}

export default Summary;
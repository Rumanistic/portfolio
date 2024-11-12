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

function Aboutme({onScrollEnd, onScrollReverse, stackParam, stackColor}) {
    const contentRef = useRef();

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
  
      if (e.deltaY > 0) {
        // 아래로 스크롤
        if (scrollTop + clientHeight >= scrollHeight) {
          e.preventDefault();
          onScrollEnd();
        }
      } else {
        if (scrollTop <= 0) {
          e.preventDefault();
          onScrollReverse();
        }
      }
    };

    const isFront = () => {
      return (
        <Content.VerticalSpan style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Content.VerticalSpan style={{width: '100%', justifyContent: 'center'}}>
            <Content.ContentHeader5>Skills</Content.ContentHeader5>
            <Content.HorizontalSpan style={{justifyContent: 'space-evenly'}}>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.html5} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.css3} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.javascript} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.react} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.vscode} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.github} alt=''></Content.Logo>
            </Content.HorizontalSpan>
          </Content.VerticalSpan>
        </Content.VerticalSpan>
      );
    }

    const isBack = () => {
      return (
        <Content.VerticalSpan style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Content.VerticalSpan style={{width: '100%', justifyContent: 'center'}}>
            <Content.ContentHeader5>Skills</Content.ContentHeader5>
            <Content.HorizontalSpan style={{justifyContent: 'space-evenly'}}>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.java} alt=''></Content.Logo>
              <Content.Logo style={{margin: '0 0.2vw 4vh'}} src={logos.jquery} alt=''></Content.Logo>
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
        <Common.ContentDiv ref={contentRef} onWheelCapture={handleWheel} stackColor={stackColor}>
          <Content.ContentLeftHeader3>Who am I?</Content.ContentLeftHeader3>
          <Common.ContentSection>
            <Content.ContentAboutMeGrid>
              <Content.Icons src='./resources/images/icons/nametag.png'></Content.Icons>
              <Content.VerticalSpan>
                <Content.ContentHeader5>이름</Content.ContentHeader5>
                <Content.ContentInnerText>김현수</Content.ContentInnerText>
              </Content.VerticalSpan>

              <Content.Icons src='./resources/images/icons/ymd.png'></Content.Icons>
              <Content.VerticalSpan>
                <Content.ContentHeader5>생년월일</Content.ContentHeader5>
                <Content.ContentInnerText>1997. 01. 22</Content.ContentInnerText>
              </Content.VerticalSpan>

              <Content.Icons src='./resources/images/icons/location.png'></Content.Icons>
              <Content.VerticalSpan>
                <Content.ContentHeader5>지역</Content.ContentHeader5>
                <Content.ContentInnerText>서울특별시 종로구</Content.ContentInnerText>
              </Content.VerticalSpan>

              <Content.Icons src='./resources/images/icons/phone.png'></Content.Icons>
              <Content.VerticalSpan>
                <Content.ContentHeader5>연락처</Content.ContentHeader5>
                <Content.ContentInnerText>010-9890-1388</Content.ContentInnerText>
              </Content.VerticalSpan>

              <Content.Icons src='./resources/images/icons/email.png'></Content.Icons>
              <Content.VerticalSpan>
                <Content.ContentHeader5>이메일</Content.ContentHeader5>
                <Content.ContentInnerText>xinatic@naver.com</Content.ContentInnerText>
              </Content.VerticalSpan>

              <Content.Icons src='./resources/images/icons/grade.png'></Content.Icons>
              <Content.VerticalSpan>
                <Content.ContentHeader5>학력</Content.ContentHeader5>
                <Content.ContentInnerText>한국폴리텍1대학 성남캠퍼스<br/>(전자정보통신과)</Content.ContentInnerText>
              </Content.VerticalSpan>
            </Content.ContentAboutMeGrid>

            <Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#555555'/>

            <Content.HorizontalSpan>
              <Content.VerticalSpan style={{whiteSpace: "nowrap"}}>
                <Content.ContentHeader5>Job experience</Content.ContentHeader5><br/>
                <Content.ContentInnerText>
                  &emsp;2021.03.02 - 2024.01.31 (주)디인케이 - Cisco IPCC 엔지니어 
                </Content.ContentInnerText><br/>
                <Content.ContentDivSpan direction='horizontal' length='0.1vh' color='#555555'/>

                <Content.ContentHeader5>Education</Content.ContentHeader5><br/>
                <Content.ContentInnerText>
                  &emsp;2024.05 - 2024.11 더조은컴퓨터아카데미 JAVA 웹개발 풀스택 과정 수료 <br/>
                  &emsp;2017.03 - 2021.02 한국폴리텍1대학 성남캠퍼스 전자정보통신과 전문학사 졸업<br/>
                  &emsp;2016.03 - 2017.02 북부기술교육원 의료전자과 과정 수료
                </Content.ContentInnerText>
              </Content.VerticalSpan>

              <Content.VerticalSpan>
                
              </Content.VerticalSpan>

              <Content.ContentDivSpan direction='vertical' length='0.3vh' color='#555555'/>

              <Content.VerticalSpan>
                <Content.ContentHeader5>Background</Content.ContentHeader5><br/>
                {
                  stackParam === 'front' ? <Content.ContentInnerText>
                  IPCC 엔지니어로 IT 업계에 첫 발을 내디딘 후, Java 백엔드 서버와 연동되어 HTML과 JavaScript를 활용해 웹 페이지를 렌더링하는 웹 개발에 흥미를 느끼며 프론트엔드 개발자로서의 길을 걷고 있습니다.<br/>
                  프로젝트에 있어 기획과 분석 및 설계가 이뤄진다면, 기획과 설계에 맞춰 사용자의 경험을 가장 효과적으로 구현하는 것이 프론트엔드 개발자의 역할이라 생각합니다.<br/> 
                  UI/UX의 관점에서, 단순히 보이는 화면을 넘어서 사용자와의 상호작용을 세밀하게 설계하고 사용자에게 직관적이고 편리한 경험을 제공하고자 합니다.<br/> 
                  이러한 경험을 바탕으로, 사용자에게 최적화된 화면을 제공하고 프로젝트의 가치를 더욱 높이는 프론트엔드 개발자가 되고 싶습니다.
                  </Content.ContentInnerText> : 
                  <Content.ContentInnerText>
                  IPCC 엔지니어로 IT 업계에 첫 발을 내디딘 후, HTML과 JavaScript를 활용해 Java 백엔드 서버와 연동되는 웹 개발에 흥미를 느끼며 백엔드 개발자로서의 길을 걷고 있습니다.<br/>
                  프로젝트에 있어 기획이 끝났다면, 분석과 설계에서 백엔드 작업은 터다지기와 같습니다. 잘 다져진 터에서 좋은 기반이 나오듯이, 견고한 백엔드 구조가 탄탄한 시스템과 기능 구현의 기반이 됩니다.<br/> 
                  기초를 다지고 신뢰할 수 있는 시스템을 만들어내는 과정에서 백엔드 개발의 가치를 발견했습니다.<br/>
                  이러한 경험을 통해 백엔드 작업이 어떻게 전체 프로젝트의 성공을 결정짓는 핵심 요소가 되는지 깨달았고, 이를 기반으로 더욱 효율적이고 견고한 시스템을 설계하고 구현하는 백엔드 개발자로 성장해 나가고자 합니다.
                  </Content.ContentInnerText>
                }
                
              </Content.VerticalSpan>

            </Content.HorizontalSpan>
            
            <Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#555555'/>

            <Content.HorizontalSpan>
              {stackParam === 'front' ? isFront() : isBack()}
            </Content.HorizontalSpan>
          </Common.ContentSection>
        </Common.ContentDiv>
    )
}

export default Aboutme;


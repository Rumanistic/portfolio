import { useRef } from 'react';
import * as Common from '../../CommonStyle';
import * as Content from '../../ContentStyle';
import PopspotFront from './projects/PopspotFront';
import PopspotBack from './projects/PopspotBack';

function Popspot({onScrollEnd, onScrollReverse, stackParam, stackColor}) {
    const contentRef = useRef();

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
  
      if (e.deltaY > 0) {
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

    return (
        <Common.ContentDiv
            ref={contentRef}
            onWheel={handleWheel}
            stackColor={stackColor}
        >
          <Content.ContentLeftHeader3>What is Popspot?</Content.ContentLeftHeader3>
          <Content.ContentInnerText style={{marginBottom: '2vh'}}>
            Popspot 프로젝트는 코로나19 이후 증가한 팝업스토어의 인기에 맞춰 다양한 장소의 팝업 행사 정보를 한곳에 모아 사용자들이 쉽게 접할 수 있도록 기획된 웹 블로그입니다.
          </Content.ContentInnerText>
          
			    <Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#777777' />
          
          <Content.ContentHeader5>Project Description</Content.ContentHeader5>
          
          <Content.ContentProjectDescGrid>
            <Content.HorizontalSpan style={{alignItems: 'center'}}>
              <Content.Icons style={{width: '3vw', marginRight: '0.4vw'}} src='./resources/images/icons/due.png'></Content.Icons>
              <Content.ContentHeader6>프로젝트 기간</Content.ContentHeader6>
            </Content.HorizontalSpan>
            <Content.ContentInnerText>2024. 08. 24 - 2024. 09. 30</Content.ContentInnerText>

            <Content.HorizontalSpan style={{alignItems: 'center'}}>
              <Content.Icons style={{width: '3vw', marginRight: '0.4vw'}} src='./resources/images/icons/member.png'></Content.Icons>
              <Content.ContentHeader6>프로젝트 인원</Content.ContentHeader6>
            </Content.HorizontalSpan>
            <Content.ContentInnerText><strong>4명</strong> (디자인 2명 / FE&BE 2명)</Content.ContentInnerText>

            <Content.HorizontalSpan style={{alignItems: 'center'}}>
              <Content.Icons style={{width: '3vw', marginRight: '0.4vw'}} src='./resources/images/icons/role.png'></Content.Icons>
              <Content.ContentHeader6>담당 역할</Content.ContentHeader6>
            </Content.HorizontalSpan>
            <Content.ContentInnerText><strong>팀장 & FE/BE 개발</strong></Content.ContentInnerText>

            <Content.HorizontalSpan style={{alignItems: 'center'}}>
              <Content.Icons style={{width: '3vw', marginRight: '0.4vw'}} src='./resources/images/icons/tools.png'></Content.Icons>
              <Content.ContentHeader6>작업 환경</Content.ContentHeader6>
            </Content.HorizontalSpan>
            <Content.ContentInnerText>
              <strong>Frontend:</strong> React(node.js)<br/>
              <strong>Backend:</strong> SpringBoot with JPA<br/>
              <strong>Database:</strong> Oracle
            </Content.ContentInnerText>
          </Content.ContentProjectDescGrid>
          <Content.ContentHeader5>Main Function</Content.ContentHeader5>
          {stackParam === 'front' ? <PopspotFront/> : <PopspotBack/>}
          <Common.PageSpliter />
        </Common.ContentDiv>
    )
}

export default Popspot;
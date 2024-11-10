import { useRef } from 'react';
import * as Common from '../../CommonStyle';
import * as Content from '../../ContentStyle';

function Aboutme({onScrollEnd, onScrollReverse}) {
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

    return (
        <Common.ContentDiv ref={contentRef} onWheelCapture={handleWheel}>
          <Content.ContentLeftHeader3>Who am I?</Content.ContentLeftHeader3>
          <Common.ContentSection>
            <Content.ContentAboutMeGrid>
              <Content.Icons src='./resources/images/icons/nametag.png'></Content.Icons>
              <Content.VerticalSpan><Content.ContentHeader5>이름</Content.ContentHeader5><Content.ContentInnerText>김현수</Content.ContentInnerText></Content.VerticalSpan>
                <Content.Icons src='./resources/images/icons/ymd.png'></Content.Icons>
                <Content.VerticalSpan><Content.ContentHeader5>생년월일</Content.ContentHeader5><Content.ContentInnerText>1997. 01. 22</Content.ContentInnerText></Content.VerticalSpan>
                <Content.Icons src='./resources/images/icons/location.png'></Content.Icons>
                <Content.VerticalSpan><Content.ContentHeader5>지역</Content.ContentHeader5><Content.ContentInnerText>서울특별시 종로구</Content.ContentInnerText></Content.VerticalSpan>
                <Content.Icons src='./resources/images/icons/phone.png'></Content.Icons>
                <Content.VerticalSpan><Content.ContentHeader5>연락처</Content.ContentHeader5><Content.ContentInnerText>010-9890-1388</Content.ContentInnerText></Content.VerticalSpan>
                <Content.Icons src='./resources/images/icons/email.png'></Content.Icons>
                <Content.VerticalSpan><Content.ContentHeader5>이메일</Content.ContentHeader5><Content.ContentInnerText>xinatic@naver.com</Content.ContentInnerText></Content.VerticalSpan>
                <Content.Icons src='./resources/images/icons/grade.png'></Content.Icons>
                <Content.VerticalSpan><Content.ContentHeader5>학력</Content.ContentHeader5><Content.ContentInnerText>한국폴리텍1대학 성남캠퍼스<br/>(전자정보통신과)</Content.ContentInnerText></Content.VerticalSpan>
            </Content.ContentAboutMeGrid>

            <Content.ContentDivSpan direction='horizontal' length='0.3vh' color='#555555'/>

              <Content.HorizontalSpan>
                <Content.VerticalSpan>
                  이력 <br/>
                  2021.03.02 - 2024.01.30 (주)디인케이 재직 <br/>
                  2017.03.02 - 2021.02.26 한국폴리텍1대학 성남캠퍼스 전자정보통신과 졸업
                  ooo한 [프론트/백] 개발자가 되는것
                </Content.VerticalSpan>

                <Content.ContentDivSpan direction='vertical' length='0.2vh' color='#555555'/>

                <Content.VerticalSpan>
                  재직 중 직원지식 AI 챗봇 고도화 프로젝트에서 대시보드와 리스트 페이지 개발을 통해 웹 개발에 대해서 알게됨
                  -- 이력서에 있는 내용 축약해서 작성하기 --
                </Content.VerticalSpan>
              </Content.HorizontalSpan>
          </Common.ContentSection>
        </Common.ContentDiv>
    )
}

export default Aboutme;


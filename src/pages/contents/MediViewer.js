import { useRef, useState } from 'react';
import * as Common from '../../CommonStyle';
import * as Content from '../../ContentStyle';
import MediViewerFront from './projects/MediViewerFront';
import MediViewerBack from './projects/MediViewerBack';

function MediViewer({onScrollEnd, onScrollReverse, stackParam, stackColor}) {
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
    style={{position: 'relative'}}>


      <Content.ContentLeftHeader3>What is MediViewer?</Content.ContentLeftHeader3>
      <Content.ContentInnerText style={{marginBottom: '2vh'}}>
        MediViewer 프로젝트는 의료 영상 분석을 위한 웹 뷰어로, DICOM 메타데이터(의료용 디지털 영상 및 통신 표준)를 활용하여 의료 영상을 제공합니다.
      </Content.ContentInnerText>
      
      <Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#777777' />
      
      <Content.ContentHeader5>Project Description</Content.ContentHeader5>
      
      <Content.ContentProjectDescGrid>
        <Content.HorizontalSpan style={{alignItems: 'center'}}>
          <Content.Icons style={{width: '3vw', marginRight: '0.4vw'}} src='./resources/images/icons/due.png'></Content.Icons>
          <Content.ContentHeader6>프로젝트 기간</Content.ContentHeader6>
        </Content.HorizontalSpan>
        <Content.ContentInnerText>
          2024. 10. 07 - 2024. 11. 25.
        </Content.ContentInnerText>

        <Content.HorizontalSpan style={{alignItems: 'center'}}>
          <Content.Icons style={{width: '3vw', marginRight: '0.4vw'}} src='./resources/images/icons/member.png'></Content.Icons>
          <Content.ContentHeader6>프로젝트 인원</Content.ContentHeader6>
        </Content.HorizontalSpan>
        <Content.ContentInnerText>
          <strong>5명</strong> (Frontend 1명, Backend 1명, FE&BE 3명)
        </Content.ContentInnerText>

        <Content.HorizontalSpan style={{alignItems: 'center'}}>
          <Content.Icons style={{width: '3vw', marginRight: '0.4vw'}} src='./resources/images/icons/role.png'></Content.Icons>
          <Content.ContentHeader6>담당 역할</Content.ContentHeader6>
        </Content.HorizontalSpan>
        <Content.ContentInnerText>
          <strong>{stackParam === 'front' ? '리스트페이지 Frontend 개발' : '데이터베이스 SQL 작성'}</strong>
        </Content.ContentInnerText>

        <Content.HorizontalSpan style={{alignItems: 'center'}}>
          <Content.Icons style={{width: '3vw', marginRight: '0.4vw'}} src='./resources/images/icons/tools.png'></Content.Icons>
          <Content.ContentHeader6>작업 환경</Content.ContentHeader6>
        </Content.HorizontalSpan>
        <Content.ContentInnerText>
          <strong>Frontend:</strong> HTML5 & CSS3 & Javascript (Thymeleaf)<br/>
          <strong>Backend:</strong> SpringBoot with JPA<br/>
          <strong>Database:</strong> Oracle
        </Content.ContentInnerText>
      </Content.ContentProjectDescGrid>
      
      {stackParam === 'front' ? <MediViewerFront/> : <MediViewerBack/>}
      <Common.PageSpliter />
    </Common.ContentDiv>
  )
}

export default MediViewer;
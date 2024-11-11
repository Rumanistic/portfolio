import { useRef } from 'react';
import * as Common from '../../CommonStyle';
import * as Content from '../../ContentStyle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Popspot({onScrollEnd, onScrollReverse, stackParam, stackColor}) {
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

    const tagsInputJscode = `  
      function EventSubmit() {
        const onKeyPressed = (e) => {
          if(e.key === 'Enter' && value.trim()) {
            setSpans([...spans, value]);
            setValue('');
          }
        }
        
        return (
          <div className="event-detail-item">
            {spans.map((s, i) => {
              return(
                <label key={i} style={{marginRight: '2px', marginLeft: '2px'}}>
                  {s} 
                  <button value={s} onClick={
                    (e) => {deleteItem(e.target.value)}
                  }>x</button>
                </label>
              )
            })}
            <input name="tags" value={value} onChange={(e) => {setValue(e.target.value)}} onKeyDown={onKeyPressed} 
              placeholder='태그를 입력 후 엔터를 눌러주세요!(최대 5개)' />
          </div>
        )
      };
    `;

    return (
        <Common.ContentDiv
            ref={contentRef}
            onWheel={handleWheel}
            stackColor={stackColor}
        >
          <Content.ContentLeftHeader3>What is Popspot?</Content.ContentLeftHeader3>
          <Content.ContentInnerText>
            Popspot 프로젝트는 코로나19 이후 증가한 팝업스토어의 인기에 맞춰 다양한 장소의 팝업 행사 정보를 한곳에 모아 사용자들이 쉽게 접할 수 있도록 기획된 웹 블로그입니다.
          </Content.ContentInnerText>
          <Content.ContentHeader5>Project Description</Content.ContentHeader5>

          <Content.ContentHeader5>Main Function</Content.ContentHeader5>
          <Content.HorizontalSpan>
            <Content.VerticalSpan>
              <img src={`${process.env.PUBLIC_URL}/resources/images/setTags.gif`} alt=''></img>
              <Content.ContentDivSpan direction='horizontal' length='0.1vh' color='#777777' />
              <img src={`${process.env.PUBLIC_URL}/resources/images/searchByTags.gif`} alt=''></img>
            </Content.VerticalSpan>
            <Content.ContentDivSpan direction='vertical' length='0.3vw' color='#777777' />
            <Content.VerticalSpan style={{justifyContent: 'center'}}>
              <Content.ContentHeader6>#1. 제가 원하는 종류의 글만 보고 싶어요!</Content.ContentHeader6>
              <Content.ContentInnerText>
                <br/>
                사용자가 원하는 종류의 태그에만 접근할 수 있도록<br/> 
                모든 게시글에 한개 이상, 5개 이하의 태그를 부여할 수 있고,<br/>
                사용자는 리스트 페이지에서 좌측 Tags 영역에서<br/>
                원하는 태그를 선택하여 볼 수 있습니다.
              </Content.ContentInnerText>
            </Content.VerticalSpan>
          </Content.HorizontalSpan>

          <Content.ContentDivSpan direction='horizontal' length='0.1vh' color='#777777' />

          <Content.HorizontalSpan>
            <Content.VerticalSpan style={{justifyContent: 'center'}}>
              <Content.ContentHeader6>#1. 제가 원하는 종류의 글만 보고 싶어요!</Content.ContentHeader6>
              <Content.ContentInnerText>
                <br/>
                사용자가 원하는 종류의 태그에만 접근할 수 있도록<br/> 
                모든 게시글에 한개 이상, 5개 이하의 태그를 부여할 수 있고,<br/>
                사용자는 리스트 페이지에서 좌측 Tags 영역에서<br/>
                원하는 태그를 선택하여 볼 수 있습니다.
              </Content.ContentInnerText>
            </Content.VerticalSpan>
            <Content.ContentDivSpan direction='vertical' length='0.3vw' color='#777777' />
            <Content.VerticalSpan>
              <img src={`${process.env.PUBLIC_URL}/resources/images/setTags.gif`} alt=''></img>
              <Content.ContentDivSpan direction='horizontal' length='0.1vh' color='#777777' />
              <img src={`${process.env.PUBLIC_URL}/resources/images/searchByTags.gif`} alt=''></img>
            </Content.VerticalSpan>
          </Content.HorizontalSpan>
        </Common.ContentDiv>
    )
}

export default Popspot;
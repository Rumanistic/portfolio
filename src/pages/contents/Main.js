import { useRef } from 'react';
import * as Common from '../../CommonStyle';
import * as Content from '../../ContentStyle';

function Main({onScrollEnd, stackColor}) {
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
        }
      }
    };

    return (
        <Common.ContentDiv
            ref={contentRef}
            onWheel={handleWheel}
            stackColor={stackColor}
        >
            <Common.ContentSectionJustify>
              <Content.ContentHeader1>ABOUT ME</Content.ContentHeader1>
              <Content.ContentHeader3>저를 소개합니다</Content.ContentHeader3>
              <div style={{position: 'absoulte', left: '50%'}}>
                <Content.ContentHeader3>Scroll down</Content.ContentHeader3>
              </div>
            </Common.ContentSectionJustify>
        </Common.ContentDiv>
    )
}

export default Main;
import { useRef } from 'react';
import * as Common from '../../CommonStyle';
import * as Content from '../../ContentStyle';

function Main({onScrollEnd}) {
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
        >
            <Common.ContentSectionJustify>
              <Content.ContentHeader1>프론트엔드 개발자 포트폴리오</Content.ContentHeader1>
              <Content.ContentHeader3>안녕하세요.<br/> 새로운 도전을 환영하는 프론트엔드 개발자<br/> 김현수입니다.</Content.ContentHeader3>
            </Common.ContentSectionJustify>
        </Common.ContentDiv>
    )
}

export default Main;
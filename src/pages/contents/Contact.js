import { useRef } from 'react';
import * as Common from '../../CommonStyle';

function Contact({onScrollReverse, stackColor}) {
    const contentRef = useRef();

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

    return (
        <Common.ContentDiv
            ref={contentRef}
            onWheel={handleWheel}
            stackColor={stackColor}
        >
        <div className="Content">Contact at...</div>
        </Common.ContentDiv>
    )
}

export default Contact;
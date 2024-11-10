import * as Common from './CommonStyle';
import AsideList from './pages/AsideList';
import Main from './pages/contents/Main';
import Aboutme from './pages/contents/Aboutme';
import Skills from './pages/contents/Skills';
import Popspot from './pages/contents/Popspot';
import MediViewer from './pages/contents/MediViewer';
import Summary from './pages/contents/Summary';
import Contact from './pages/contents/Contact';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const outerDivRef = useRef();
  const [curPage, setCurPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pageHeight = window.innerHeight;

  const scrollToPage = (pageIndex) => {

    if(pageIndex > 6 || pageIndex < 0) return;

    // number 타입으로 변환하기 위해 1을 곱해줌
    const numVal = pageIndex * 1;
    if (isTransitioning) return; // 전환 중이면 함수 실행 중단
    setIsTransitioning(true);
    outerDivRef.current.scrollTo({
      top: pageIndex * pageHeight,
      behavior: 'smooth'
    });
    console.log(numVal);
    setCurPage(numVal);

    const transitionDuration = 600;
    setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
  };

  useEffect(() => {
    scrollToPage(curPage);
  }, [])

  return (
    <Common.Application>
      <AsideList curPage={curPage} onMenuClick={(value) => scrollToPage(value)} />
      <div ref={outerDivRef} style={{ overflow: 'hidden', height: '100vh' }}>
        <Main onScrollEnd={() => scrollToPage(curPage + 1)}/>
        <Aboutme onScrollEnd={() => scrollToPage(curPage + 1)} onScrollReverse={() => scrollToPage(curPage - 1)} />
        <Skills onScrollEnd={() => scrollToPage(curPage + 1)} onScrollReverse={() => scrollToPage(curPage - 1)} />
        <Popspot onScrollEnd={() => scrollToPage(curPage + 1)} onScrollReverse={() => scrollToPage(curPage - 1)} />
        <MediViewer onScrollEnd={() => scrollToPage(curPage + 1)} onScrollReverse={() => scrollToPage(curPage - 1)} />
        <Summary onScrollEnd={() => scrollToPage(curPage + 1)} onScrollReverse={() => scrollToPage(curPage - 1)} />
        <Contact onScrollReverse={() => scrollToPage(curPage - 1)} />
      </div>
    </Common.Application>
  );
}

export default App;
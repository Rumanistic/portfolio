import { useState } from 'react';
import * as Content from '../../../ContentStyle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function MediViewerFront() {
	const [isVisible, setIsVisible] = useState(false);
	const [imgIdx, setImgIdx] = useState(0);

  const imgSlide = ['./resources/images/listStoryboard.png', './resources/images/list_todo_241014.png', './resources/images/design_guide.png', './resources/images/mediviewer_list.png']

const tagsInputJscode = `  
function ShowTag({tags, setList}){
  const [values, setValues] = useState(
    Array(tags.length).fill(false));
  const [selectedTags, setSelectedTags] = useState([]);

  const toggle = (e, i) => {
  const valueToggle = [...values];
  let selected = [...selectedTags];
  valueToggle[i] = !valueToggle[i];
  setValues(valueToggle);
  if(valueToggle[i]){
  	selected.push(e);
  } else {
  	selected = selected.filter(
    (queryTag)=> queryTag !== e
  	);
  	console.log(selected);
  }
  setSelectedTags(selected);
	}
	...
};
`;

const starPointJscode = `
return (
  <EventListSpan>
    {eList.map((e, i) => {
      return(
        <Col12 onClick={() => 
          {navigate(\`/event/\${e.eventNo}\`)}} 
            key={e.eventNo}>
          ...
          <span style={{alignSelf: "center"}}>{
          rPoint[e.eventNo] ? 
            StarPoint(rPoint[e.eventNo]) 
            : StarPoint(0.0)}
            </span>
            <span style={{alignSelf:'center'}}>{
            rPoint[e.eventNo] ? 
              \`리뷰 평점 : 
              \${rPoint[e.eventNo].toFixed(1)} / 5.0\` : 
              '등록된 리뷰가 없습니다.'}</span> 
          </span>
        </Col12>
      )
    })}
  </EventListSpan>
)
`;

	return (
		<Content.VerticalSpan>
						
			{isVisible && <Content.ContentPreview 
				onWheel={(e) => {
					e.preventDefault(); // 기본 동작 방지
					e.stopPropagation(); // 이벤트 버블링 방지
				}}
				onClick={(e) => {
					setIsVisible(!isVisible);
				}}
			>
				<Content.ContentStoryImgPreview src={imgSlide[imgIdx]} alt=''></Content.ContentStoryImgPreview>
      </Content.ContentPreview>}
			<Content.ContentHeader5>Main Design</Content.ContentHeader5>
			<Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#777777' />

			<Content.ContentProjectStoryGrid>
        <Content.ContentHeader6>스토리보드 초안</Content.ContentHeader6>
        <Content.ContentHeader6>초기 작업물</Content.ContentHeader6>
        <Content.ContentHeader6>디자인 가이드</Content.ContentHeader6>
        <Content.ContentHeader6>최종안</Content.ContentHeader6>

        <Content.ContentProjectStoryImg src='./resources/images/listStoryboard.png' alt='스토리보드 초안' onClick={() => {setImgIdx(0); setIsVisible(!isVisible);}}></Content.ContentProjectStoryImg>
        <Content.ContentProjectStoryImg src='./resources/images/list_todo_241014.png' alt='스토리보드 초안' onClick={() => {setImgIdx(1); setIsVisible(!isVisible);}}></Content.ContentProjectStoryImg>
        <Content.ContentProjectStoryImg src='./resources/images/design_guide.png' alt='스토리보드 초안' onClick={() => {setImgIdx(2); setIsVisible(!isVisible);}}></Content.ContentProjectStoryImg>
        <Content.ContentProjectStoryImg src='./resources/images/mediviewer_list.png' alt='스토리보드 초안' onClick={() => {setImgIdx(3); setIsVisible(!isVisible);}}></Content.ContentProjectStoryImg>
      </Content.ContentProjectStoryGrid>

			<Content.ContentHeader5>Main Function</Content.ContentHeader5>
			<Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#777777' />
			<Content.HorizontalSpan>
				<Content.VerticalSpan>
					<img src={`${process.env.PUBLIC_URL}/resources/images/setTags.gif`} alt=''></img>
					<Content.ContentDivSpan direction='horizontal' length='0.1vh' color='#777777' />
					<img src={`${process.env.PUBLIC_URL}/resources/images/searchByTags.gif`} alt=''></img>
				</Content.VerticalSpan>

				<Content.ContentDivSpan direction='vertical' length='0.1vw' color='#777777' />

				<Content.VerticalSpan style={{justifyContent: 'center'}}>
					<Content.ContentHeader6>#1. 제가 원하는 종류의 글만 보고 싶어요!</Content.ContentHeader6>
					<Content.ContentInnerText>
						<br/>
						사용자가 원하는 종류의 태그에만 접근할 수 있도록<br/> 
						모든 게시글에 한개 이상, 5개 이하의 태그를 부여할 수 있고,<br/>
						사용자는 리스트 페이지에서 좌측 Tags 영역에서<br/>
						원하는 태그를 선택하여 볼 수 있습니다.
					</Content.ContentInnerText>
					<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
						{tagsInputJscode}
					</SyntaxHighlighter>
				</Content.VerticalSpan>
			</Content.HorizontalSpan>

			<Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#777777' />

			<Content.HorizontalSpan>
				<Content.VerticalSpan style={{justifyContent: 'center'}}>
					<Content.ContentHeader6>#2. 등록된 행사 리뷰의 평균 평점을 보고싶어요!</Content.ContentHeader6>
					<Content.ContentInnerText>
						<br/>
						행사 리스트 화면에 각 행사에 달린 리뷰의 평균 평점을 표시합니다.<br/>
						리뷰가 없는 행사는 "등록된 리뷰가 없습니다"로 나타나며,<br/>
						리뷰가 하나 이상 있는 경우에는 평균 평점을<br/>
						0.5점 단위의 별점 이미지로 보여줍니다.
					</Content.ContentInnerText>
					<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
						{starPointJscode}
					</SyntaxHighlighter>
				</Content.VerticalSpan>

				<Content.ContentDivSpan direction='vertical' length='0.1vw' color='#777777' />

				<Content.VerticalSpan>
					<img src={`${process.env.PUBLIC_URL}/resources/images/showRPoint.gif`} alt=''></img>
					<Content.ContentDivSpan direction='horizontal' length='0.1vh' color='#777777' />
					<img src={`${process.env.PUBLIC_URL}/resources/images/ratingAndShowResult.gif`} alt=''></img>
				</Content.VerticalSpan>
			</Content.HorizontalSpan>
		</Content.VerticalSpan>
	)
}

export default MediViewerFront;
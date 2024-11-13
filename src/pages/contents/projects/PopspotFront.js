import * as Content from '../../../ContentStyle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function PopspotFront() {
	

const tagsInputJscode = `function ShowTag({tags, setList}){
	// 태그가 선택되었는지 체크하기위한 Flag(true/false) 배열
  const [values, setValues] = useState(
    Array(tags.length).fill(false));
	// 선택된 태그 String 데이터를 담을 배열
  const [selectedTags, setSelectedTags] = useState([]);

  const toggle = (e, i) => {
		// 배열을 복사해서 사용
		const valueToggle = [...values];
		let selected = [...selectedTags];
		valueToggle[i] = !valueToggle[i];
		setValues(valueToggle);
		if(valueToggle[i]){
			// 선택되었을 시 배열에 요소 삽입
			selected.push(e);
		} else {
		 	// 해제되었을 시 배열에서 요소 제거
			selected = selected.filter(
			(queryTag)=> queryTag !== e
			);
		}
  	setSelectedTags(selected);
	}
	...
};
`;

const starPointJscode = `return (
  <EventListSpan>
	{/* eList의 요소로 반복 */}
    {eList.map((e, i) => {
      return(
        <Col12 onClick={() => 
          {navigate(\`/event/\${e.eventNo}\`)}} 
            key={e.eventNo}>
          ...
			{/* rPoint 요소에서 eventNo 탐색 */}
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

export default PopspotFront;
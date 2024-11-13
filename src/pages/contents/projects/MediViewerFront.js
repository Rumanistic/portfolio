import { useState } from 'react';
import * as Content from '../../../ContentStyle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function MediViewerFront() {
	const [isVisible, setIsVisible] = useState(false);
	const [imgIdx, setImgIdx] = useState(0);

  const imgSlide = ['./resources/images/listStoryboard.png', './resources/images/list_todo_241014.png', './resources/images/design_guide.png', './resources/images/mediviewer_list.png']

const setParamsJscode = `function setParams() {
	const pid = $("#pid").val();
	const pname = $("#pname").val();
	const modality = $("#modality").val();
	const state = parseInt($("#status").val(), 10);
	const slice = parseInt($("#slice").val(), 10);
	const nowPage = 1;
	const date = [];
	
	const param = {
		pid,
		pname,
		modality,
		state,
		slice,
		nowPage,
		sdate: date[0],
		edate: date[1]
	}
	
	return param;
}`;

const studySelectJscode = `// 리스트 항목 선택
$(document).on('click', 'li[name=listItem]', (e) => {
    prevStudyKey = 
			$(e.target).closest('li[name=listItem]')
				.attr('value');
    const pID = 
			$(e.target).closest('li[name=listItem]')
				.find('span[name=pID]').text();
    const pName = 
			$(e.target).closest('li[name=listItem]')
				.find('span[name=pName]').text();
    
    const params = {
		studyKey: prevStudyKey,
		pid: pID,
		pname: pName
	}
    getHistoryList(params); 
    showPreviewData(prevStudyKey);
});

// dicom 프리뷰
function showPreviewData(studyKey) {
	const element = document.getElementById('previewImage');
	cornerstone.enable(element);
	
	getImgPreview(studyKey, element);
}
`;

const setPreviewJscode = `const getPreviewSeries = (studykey) => {
	axios.get(\`/api/lists/preview/\${studykey}/series\`)
		.then(response => {
			let currentIndex = 0;
			...
			const rData = response.data;
			testImgItems.splice(0, testImgItems.length);
			testImgItems.push(...rData.imageFileName);
			...
			displayImage(currentIndex);
			
			function displayImage(index) {
		        ...
		    }
		    ...			
			// axios 체이닝 - comment 가져오기
		return axios.get(\`/api/lists/comment/\${studykey}\`);
		})
		.then(response => {
			const rData = response.data;
			
			const section = 
				document.querySelector("#commentContainer");
			section.innerHTML = "";
	
			const head = document.createElement("h3");
			head.textContent = "Comment";
			section.appendChild(head);
			
			const p = document.createElement("p");
			p.textContent = rData.comment;
			section.appendChild(p);
		});
}
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
					<img src={`${process.env.PUBLIC_URL}/resources/images/textSearchQuery.gif`} alt=''></img>
					<Content.ContentDivSpan direction='horizontal' length='0.1vh' color='#777777' />
					<img src={`${process.env.PUBLIC_URL}/resources/images/dateSearchQuery.gif`} alt=''></img>
				</Content.VerticalSpan>

				<Content.ContentDivSpan direction='vertical' length='0.1vw' color='#777777' />

				<Content.VerticalSpan style={{justifyContent: 'center'}}>
					<Content.ContentHeader6>#1. 제가 원하는 조건으로 검색해서 보고싶어요!</Content.ContentHeader6>
					<Content.ContentInnerText>
						<br/>
						사용자가 원하는 항목으로 검색이 가능하도록<br/> 
						화면 리스트 상단 검색창에 입력한 항목에 대해<br/>
						모두 일치하는 항목을 검색해서 볼 수 있으며<br/>
						좌측 어사이드 메뉴에서 기간 선택으로 기간 검색도 가능합니다.
					</Content.ContentInnerText>
					<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
						{setParamsJscode}
					</SyntaxHighlighter>
				</Content.VerticalSpan>
			</Content.HorizontalSpan>

			<Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#777777' />

			<Content.HorizontalSpan>
				<Content.VerticalSpan style={{justifyContent: 'center'}}>
					<Content.ContentHeader6>#2. 조회하려는 환자의 과거 이력을 함께 확인하고 싶어요!</Content.ContentHeader6>
					<Content.ContentInnerText>
						<br/>
						검색한 환자의 검진 데이터를 선택하면<br/> 
						하단에 과거 검사 이력과 함께 선택한 검진 데이터가 표시됩니다.<br/> 
						과거 이력을 통해서도 검진 데이터를 미리 볼 수 있습니다.
					</Content.ContentInnerText>
					<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
						{studySelectJscode}
					</SyntaxHighlighter>
				</Content.VerticalSpan>

				<Content.ContentDivSpan direction='vertical' length='0.1vw' color='#777777' />

				<Content.VerticalSpan>
					<img src={`${process.env.PUBLIC_URL}/resources/images/selectListData.gif`} alt=''></img>
					<Content.ContentDivSpan direction='horizontal' length='0.1vh' color='#777777' />
					<img src={`${process.env.PUBLIC_URL}/resources/images/selectHistData.gif`} alt=''></img>
				</Content.VerticalSpan>
			</Content.HorizontalSpan>

			<Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#777777' />
			
			<Content.HorizontalSpan>
				<Content.VerticalSpan>
					<img src={`${process.env.PUBLIC_URL}/resources/images/prevWithComments.gif`} alt=''></img>
					<Content.ContentDivSpan direction='horizontal' length='0.1vh' color='#777777' />
					<img src={`${process.env.PUBLIC_URL}/resources/images/prevNoComments.gif`} alt=''></img>
				</Content.VerticalSpan>

				<Content.ContentDivSpan direction='vertical' length='0.1vw' color='#777777' />

				<Content.VerticalSpan style={{justifyContent: 'center'}}>
					<Content.ContentHeader6>#3. 리스트에서 검진 내용을 미리 보고 싶어요!</Content.ContentHeader6>
					<Content.ContentInnerText>
						<br/>
						리스트 페이지 우측 하단의 썸네일을 클릭하여<br/> 
						검진 결과를 미리 확인할 수 있으며,<br/> 
						작성된 코멘트도 함께 확인 가능합니다.
					</Content.ContentInnerText>
					<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
						{setPreviewJscode}
					</SyntaxHighlighter>
				</Content.VerticalSpan>
			</Content.HorizontalSpan>
		</Content.VerticalSpan>
	)
}

export default MediViewerFront;
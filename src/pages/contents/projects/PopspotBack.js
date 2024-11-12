import * as Content from '../../../ContentStyle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function PopspotBack() {

const tagsInputJava = `  
public String getAllTags() {
	List<String> tagsList = eventRepository.findAllBy();
	Set<String> tags = new HashSet<String>();
	for(String s : tagsList) {
		String[] temp = s.split(",");
		tags.addAll(Arrays.asList(temp));
	}
	
	return String.join(",", tags);
};
`;

const reviewPointJava = `
@Query(value = "
  select r.event_no as eventNo, 
    avg(r.rating) as reviewPointAvg 
  from review r 
  where r.is_deleted = :i group by r.event_no", 
  nativeQuery = true)
List<ReviewPoint> findAllByDeleted(@Param("i") int i);
  
@GetMapping("/popup/lists")
  public ResponseEntity<HashMap<String, Object>> getAllList() {
    HashMap<String, Object> result = new HashMap<>();
  
    List<Event> eList = eventService.getAllList();

    // review group by event_no 쿼리
    HashMap<Long, Double> rPoint = new HashMap<>();
    List<ReviewPoint> rPoints = 
		  reviewService.getReviewPointAvg();
  
    for(ReviewPoint rp : rPoints) {
      rPoint.put(rp.getEventNo(), rp.getReviewPointAvg());
    }
  
    result.put("eList", eList);
    result.put("rPoint", rPoint);
  
    return ResponseEntity.ok().body(result);
  };
`

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
					<Content.ContentHeader6>#1. 중복되지 않는 모든 태그 데이터 전송</Content.ContentHeader6>
					<Content.ContentInnerText>
						<br/>
						사용자가 입력한 태그 데이터는 쉼표로 구분된 문자열로 저장됩니다.<br/> 
						모든 태그를 중복 없이 가져오기 위해 쿼리 후 Set 자료형에 저장하며,<br/> 
						최종적으로 쉼표로 구분된 하나의 문자열로 반환하여 프론트엔드에서 파싱할 수 있도록 합니다.
					</Content.ContentInnerText>
					<SyntaxHighlighter language="java" style={vscDarkPlus}>
						{tagsInputJava}
					</SyntaxHighlighter>
				</Content.VerticalSpan>
			</Content.HorizontalSpan>

			<Content.ContentDivSpan direction='horizontal' length='0.5vh' color='#777777' />

			<Content.HorizontalSpan>
				<Content.VerticalSpan style={{justifyContent: 'center'}}>
					<Content.ContentHeader6>#2. 행사 데이터와 평점 데이터 동시 전송</Content.ContentHeader6>
					<Content.ContentInnerText>
						<br/>
						행사 게시글과 리뷰 데이터는 각각<br/> 
						개별 데이터베이스 테이블에 저장됩니다.<br/>
						행사 리스트를 호출할 때 평점 데이터를 처리하여<br/> 
						평균 평점 데이터와 함께 전송하여 처리합니다.
					</Content.ContentInnerText>
					<SyntaxHighlighter language="java" style={vscDarkPlus}>
						{reviewPointJava}
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

export default PopspotBack;
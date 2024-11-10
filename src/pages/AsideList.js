import * as Common from '../CommonStyle';

function AsideList({curPage, onMenuClick}) {
    const selected = curPage;

    const goToMenu = (e) => {
        const value = e.target.getAttribute('value');
        onMenuClick(value);
    }

    return (
        <Common.ContentAside>
            <Common.AsideContainer selected={selected === 0}>
                <Common.ContainerImage src='./resources/images/2.jpg'></Common.ContainerImage>
                <Common.ContainerHeader>김현수</Common.ContainerHeader>
                <Common.ContainerText>프론트엔드 개발자</Common.ContainerText>
            </Common.AsideContainer>
            <nav>
                <Common.MenuContainer onClick={goToMenu}>
                    <Common.MenuContent selected={selected === 1} value={1}>About me</Common.MenuContent>
                    <Common.MenuContent selected={selected === 2} value={2}>Skills</Common.MenuContent>
                    <Common.MenuContent selected={selected === 3} value={3}>Project: Popspot</Common.MenuContent>
                    <Common.MenuContent selected={selected === 4} value={4}>Project: Mediviewer</Common.MenuContent>
                    <Common.MenuContent selected={selected === 5} value={5}>Summary</Common.MenuContent>
                    <Common.MenuContent selected={selected === 6} value={6}>Contact</Common.MenuContent>
                </Common.MenuContainer>
            </nav>
        </Common.ContentAside>
    )
}

export default AsideList;



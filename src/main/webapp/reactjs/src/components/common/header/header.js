import {Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap";

export function IntroNav() {
    return (
        <Navbar.Collapse id="header-main-navbar-nav">
            <Nav className="header_navbar">
                <Nav.Item>
                    <Nav.Link href="#intro_service">서비스 소개</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#intro_partners">파트너스 소개</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#intro_devs">개발팀 소개</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#intro_partners">가격 정책</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    );
}

export function ListNav() {
    return (
        <Navbar.Collapse id="header-list-navbar-nav">
            <Nav className="header_navbar">
                <NavDropdown title="기본정보" id="">
                    <NavDropdown.Item href="#action/3.1">점포정보</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">점주정보</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">결제계좌정보</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">리뷰관리</Nav.Link>
                <Nav.Link href="#link">예약관리</Nav.Link>
                <NavDropdown title="상품/서비스관리" id="">
                    <NavDropdown.Item href="#action/3.1">상품목록</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">서비스목록</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.2">매출통계</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">판매내역</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    );
}

export function PartnersNav() {
    return (
        <Navbar.Collapse id="header-partners-navbar-nav">
            <Nav className="header_navbar">
                <NavDropdown title="기본정보" id="">
                    <NavDropdown.Item href="#action/3.1">점포정보</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">점주정보</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">결제계좌정보</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">리뷰관리</Nav.Link>
                <Nav.Link href="#link">예약관리</Nav.Link>
                <NavDropdown title="상품/서비스관리" id="">
                    <NavDropdown.Item href="#action/3.1">상품목록</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">서비스목록</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.2">매출통계</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">판매내역</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    );
}

export function HeaderFragment() {
    return (
        <Navbar className="header" bg="dark" variant="dark" expand="xxl">
            <Container>
                <Navbar.Brand href="#home" className="header_container_title">집사의 노트 Partners</Navbar.Brand>
                {IntroNav()}
                <Button className="primary" >파트너스(관리자) 로그인</Button>
            </Container>
        </Navbar>
    );
}

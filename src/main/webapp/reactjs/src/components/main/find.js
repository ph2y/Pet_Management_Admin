import {Button, Card, Form, Nav} from "react-bootstrap";
import {HeaderFragment} from "components/common/header/header";
import "css/main/find.css";
import {useState} from "react";

export function FindUsernameView() {
    const [selectedTab, selectTab] = useState("find_username");

    return(
        <div className="find_username_main">
            {HeaderFragment()}
            <div className="find_username_body">
                <Card className="find_username_card">
                    <Card.Header>
                        <Nav fill variant="tabs" defaultActiveKey="find_username">
                            <Nav.Item>
                                <Nav.Link onClick={() => {selectTab("find_username")}} eventKey="find_username">
                                    파트너스 ID 찾기
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => {selectTab("find_password")}} eventKey="find_password">
                                    파트너스 PW 찾기
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        {selectedTab === "find_username" ? FindUsernameForm() : FindPasswordForm()}
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export function FindUsernameForm() {
    return(
        <Form className="find_username_form">
            <Form.Control className="find_username_form_control" type="text" placeholder="매니저 성함"/>
            <Form.Control className="find_username_form_control" type="text" placeholder="매니저 이메일"/>
            <div className="d-grid gap-2">
                <Button>
                    파트너스 ID 찾기
                </Button>
                <div className="d-flex justify-content-end">
                    <Button size="sm" variant="link">
                        로그인
                    </Button>
                    <Button size="sm" variant="link">
                        회원가입
                    </Button>
                </div>

            </div>
        </Form>
    );
}

export function FindPasswordForm() {
    const [verifyTimer, setVerifyTimer] = useState("10:00");

    return (
        <Form className="find_username_form">
            <Form.Control className="find_username_form_control" type="text" placeholder="파트너스 ID"/>
            <Form.Control className="find_username_form_control" type="text" placeholder="매니저 성함"/>
            <Form.Control className="find_username_form_control" type="text" placeholder="매니저 이메일"/>
            <div className="d-grid gap-2">
                <Button>
                    인증 이메일 발송
                </Button>
                <div>남은 시간: {verifyTimer}</div>
            </div>
            <Form.Control className="find_username_form_control" type="text" placeholder="이메일 인증코드"/>
            <div className="d-grid gap-2">
                <Button>
                    파트너스 PW 재설정
                </Button>
                <div className="d-flex justify-content-end">
                    <Button size="sm" variant="link">
                        로그인
                    </Button>
                    <Button size="sm" variant="link">
                        회원가입
                    </Button>
                </div>
            </div>
        </Form>
    );
}
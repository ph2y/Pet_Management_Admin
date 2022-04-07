import {Button, Card, Form} from "react-bootstrap";
import {HeaderFragment} from "components/common/header/header";
import "css/main/login.css";

export function LoginView() {
    return(
        <div className="login_main">
            {header()}
            <div className="login_body">
                <Card className="login_card">
                    <Card.Body>
                        <Card.Title>파트너스(관리자) 로그인</Card.Title>
                        <Form className="login_form">
                            <Form.Control className="login_form_control" type="text" placeholder="파트너스(관리자)아이디"/>
                            <Form.Control className="login_form_control" type="password" placeholder="파트너스(관리자)비밀번호"/>
                            <div className="d-grid gap-2">
                                <Button>
                                    로그인
                                </Button>
                                <div className="d-flex justify-content-end">
                                    <Button size="sm" variant="link">
                                        회원가입
                                    </Button>
                                    <Button size="sm" variant="link">
                                        ID/PW 찾기
                                    </Button>
                                </div>

                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
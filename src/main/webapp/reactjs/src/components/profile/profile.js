import {HeaderFragment} from "components/common/header/header";
import {Card, Form, Button} from "react-bootstrap";
import "css/profile/profile.css";

export function ProfileView() {
    return (
        <div className="profile_main">
            {HeaderFragment()}
            <div className="profile_body">
                {ShopProfileCard()}
                {PartnerProfileCard()}
            </div>
        </div>
    );
}

function ShopProfileCard() {
    return (
        <Card className="place_profile_card">
            <Card.Body>
                <Card.Title>점포 정보</Card.Title>
                <Form className="place_profile_form">
                    <div className="row mb-3">
                        <Form.Group className="col">
                            <Form.Label>상호명</Form.Label>
                            <Form.Control type="text" placeholder="상호명을 입력하세요" />
                            <Form.Text className="text-muted">
                                5자 이상 20자 이하로 입력 가능합니다
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="col">
                            <Form.Label>업종</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>===업종을 선택하세요===</option>
                                <option value="1">동물병원</option>
                                <option value="2">펫샵</option>
                                <option value="3">애견호텔</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>소재지</Form.Label>
                        <Form.Control type="text" placeholder="점포 주소를 입력하세요" />
                        <Form.Text className="text-muted">
                            유효한 도로명 주소로 입력하세요
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>점포 설명</Form.Label>
                        <Form.Control type="text" placeholder="점포 설명을 입력하세요" />
                        <Form.Text className="text-muted">
                            200자 이내로 입력하세요
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>점포 영업 요일</Form.Label>
                        <div>
                            <Form.Check className="me-3 d-inline-block" type="checkbox" label="월" />
                            <Form.Check className="me-3 d-inline-block" type="checkbox" label="화" />
                            <Form.Check className="me-3 d-inline-block" type="checkbox" label="수" />
                            <Form.Check className="me-3 d-inline-block" type="checkbox" label="목" />
                            <Form.Check className="me-3 d-inline-block" type="checkbox" label="금" />
                            <Form.Check className="me-3 d-inline-block" type="checkbox" label="토" />
                            <Form.Check className="me-3 d-inline-block" type="checkbox" label="일" />
                            <Form.Check className="me-3 d-inline-block" type="checkbox" label="법정공휴일" />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>점포 영업 시간</Form.Label>
                        <Form.Control type="text" placeholder="점포의 운영 시간을 입력하세요" />
                    </Form.Group>
                    <Button className="float-end" variant="primary" type="submit">
                        정보 저장
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

function PartnerProfileCard() {
    return (
        <Card className="place_profile_card">
            <Card.Body>
                <Card.Title>점주 정보</Card.Title>
                <Form className="place_profile_form">
                    <div className="row mb-3">
                        <Form.Group className="col">
                            <Form.Label>점주 성함</Form.Label>
                            <Form.Control type="text" placeholder="점주 성함을 입력하세요" />
                        </Form.Group>
                        <Form.Text className="text-muted">
                            [집사의노트] 서비스 제공을 위해 수집되며, 일반 고객에게 공개되지 않습니다
                        </Form.Text>
                        <Form.Group className="col">
                            <Form.Label>전화번호</Form.Label>
                            <Form.Control type="text" placeholder="점주 또는 매니저의 전화번호를 입력하세요" />
                        </Form.Group>
                        <Form.Text className="text-muted">
                            [집사의노트] 서비스 제공을 위해 수집되며, 일반 고객에게 공개되지 않습니다<br/>
                            공개 연락처는 "점포정보" 화면의 전화번호 란에 입력해주세요<br/>
                            공개 연락처와 동일한 연락처도 입력할 수 있습니다
                        </Form.Text>
                    </div>
                    <div className="row mb-3">
                        <Form.Group className="col">
                            <Form.Label>이메일 주소</Form.Label>
                            <Form.Control type="text" placeholder="점주 또는 매니저의 이메일 주소를 입력하세요" />
                            <Form.Text className="text-muted">
                                [집사의노트] 서비스 제공을 위해 수집되며, 일반 고객에게 공개되지 않습니다<br/>
                                공개 이메일은 "점포정보" 화면의 점포 설명란에 입력해주세요<br/>
                                공개 이메일과 동일한 연락처도 입력할 수 있습니다
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="col">
                            <Form.Label>가입일자</Form.Label>
                            <Form.Control type="text" />
                            <Form.Text className="text-muted">
                                최초 가입 일자이며, 탈퇴후 재가입시 재가입한 일자가 표시됩니다
                            </Form.Text>
                        </Form.Group>
                    </div>
                    <Button className="float-end" variant="primary" type="submit">
                        정보 저장
                    </Button>
                    <Button className="float-end" variant="primary" type="submit">
                        회원 탈퇴 (서비스 해지)
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}
import { useRef, useState } from 'react';

import {
	Button,
	CarouselIndicators,
	Input,
	Label,
	Modal,
	Typography,
} from '@goorm-dev/gds-challenge';

const TEL_REGEX = /^010[0-9]{8}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MESSAGE = '양식에 맞게 입력해주세요.';

const ModalSign = ({ isOpen, increment, toggle }) => {
	const [agreePolicy, setAgreePolicy] = useState(true);
	const [agreeMarketing, setAgreeMarketing] = useState(true);
	const [agreeAds, setAgreeAds] = useState(true);
	const [agreeEmail, setAgreeEmail] = useState(true);
	const [agreeSms, setAgreeSms] = useState(true);

	const [tel, setTel] = useState('');
	const [email, setEmail] = useState('');

	const allAgreeRef = useRef(null);
	const agreePolicyRef = useRef(null);
	const agreeMarketingRef = useRef(null);
	const agreeAdsRef = useRef(null);
	const agreeEmailRef = useRef(null);
	const agreeSmsRef = useRef(null);

	const nameRef = useRef(null);
	const telRef = useRef(null);
	const emailRef = useRef(null);

	const handleOnClickSubmit = () => {};

	const handleAgreement = (e) => {
		const { name, checked } = e.target;

		if (name === 'policy-agreement') setAgreePolicy(checked);
		else if (name === 'marketing-agreement') setAgreeMarketing(checked);
		else if (name === 'ads-agreement') {
			setAgreeAds(checked);
			setAgreeEmail(checked);
			setAgreeSms(checked);
		} else if (name === 'email-agreement') setAgreeEmail(checked);
		else if (name === 'sms-agreement') setAgreeSms(checked);
		else {
			setAgreePolicy(checked);
			setAgreeMarketing(checked);
			setAgreeAds(checked);
			setAgreeEmail(checked);
			setAgreeSms(checked);
		}
	};

	return (
		<Modal isOpen size="md">
			<Modal.Header toggle={toggle}>
				<Typography weight={700} block={false} token="h4">
					참여자 정보를 입력해주세요.
				</Typography>
				<Typography
					weight={400}
					block={false}
					token="paragraph-sm"
					color="info"
				>
					오프라인 팀 챌린지 참여자의 정보를 수집하려고 해요.
				</Typography>
			</Modal.Header>
			<Modal.Body>
				<Label required pointer={false} htmlFor="name">
					이름
				</Label>
				<Input
					type="text"
					name="name"
					size="lg"
					block
					ref={nameRef}
					placeholder="이름을 입력해주세요."
				/>
				<Label required pointer={false} htmlFor="tel">
					전화번호
				</Label>
				<Input
					name="tel"
					type="tel"
					size="lg"
					block
					ref={telRef}
					placeholder="ex. 01012345678"
					onChange={(e) => {
						return setTel(e.target.value);
					}}
				/>
				<Typography color="danger" weight={400} token="paragraph">
					{tel === '' || TEL_REGEX.test(tel) ? '' : MESSAGE}
				</Typography>
				<Label required pointer={false} htmlFor="email">
					이메일
				</Label>
				<Input
					name="email"
					type="email"
					size="lg"
					block
					ref={emailRef}
					placeholder="ex. goormee@goorm.io"
					onChange={(e) => {
						return setEmail(e.target.value);
					}}
				/>
				<Typography color="danger" weight={400} token="paragraph">
					{EMAIL_REGEX.test(email) ? '' : MESSAGE}
				</Typography>
				<div>
					<Input
						type="checkbox"
						size="sm"
						block={false}
						label={
							<Typography weight={500} token="subtitle-1">
								전체 동의
							</Typography>
						}
						checked={agreePolicy && agreeMarketing && agreeAds}
						onChange={handleAgreement}
						name="all-agreement"
					/>
					<hr />
					<Input
						type="checkbox"
						size="sm"
						block={false}
						label={
							<Typography weight={500} token="subtitle-1">
								(필수) 개인정보처리방침
							</Typography>
						}
						checked={agreePolicy}
						onChange={handleAgreement}
						name="policy-agreement"
					/>
					<Input
						type="checkbox"
						size="sm"
						block={false}
						label={
							<Typography weight={500} token="subtitle-1">
								(선택) 마케팅 목적의 개인 정보 수집 및 이용
							</Typography>
						}
						checked={agreeMarketing}
						onChange={handleAgreement}
						name="marketing-agreement"
					/>
					<Input
						type="checkbox"
						size="sm"
						block={false}
						label={
							<Typography weight={500} token="subtitle-1">
								광고성 정보 수신
							</Typography>
						}
						checked={agreeEmail || agreeSms}
						onChange={handleAgreement}
						name="ads-agreement"
					/>
					<div>
						<Input
							type="checkbox"
							size="sm"
							block
							label={
								<Typography weight={500} token="subtitle-1">
									이메일
								</Typography>
							}
							checked={agreeEmail}
							onChange={handleAgreement}
							name="email-agreement"
						/>
						<Input
							type="checkbox"
							size="sm"
							block
							label={
								<Typography weight={500} token="subtitle-1">
									SMS
								</Typography>
							}
							checked={agreeSms}
							onChange={handleAgreement}
							name="sms-agreement"
						/>
					</div>
				</div>
				<Typography
					color="primary"
					weight={500}
					token="caption"
					block={false}
				>
					※ 광고성 정보 수신에 동의하시면 챌린지에 꾸준히 참여하실 수
					있도록 리마인드 알림을 보내드려요.
				</Typography>
			</Modal.Body>
			<Modal.Footer>
				<div style={{ marginRight: '300px' }}>
					<CarouselIndicators length={4} activeIndex={0} />
				</div>
				<Button onClick={increment} disabled={!agreePolicy}>
					다음
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalSign;

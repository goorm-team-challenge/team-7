import cn from 'classnames';

import {
	Button,
	CarouselIndicators,
	Modal,
	Typography,
} from '@goorm-dev/gds-challenge';

import styles from './Survey.module.scss';

const Survey = ({ isOpen, toggle }) => {
	return (
		<Modal isOpen={isOpen} toggle={toggle}>
			<Modal.Header toggle={toggle} centered />
			<Modal.Body>
				<div>
					<Typography
						token="h1"
						className={cn(styles.expected_challenge)}
					>
						오프라인 팀 챌린지에 <br /> 가장 기대하는 점은
						무엇인가요?
					</Typography>

					<Typography
						weight={500}
						token="caption"
						color="info"
						className={cn(styles.collect_data)}
					>
						더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.
					</Typography>
				</div>

				<div className={cn(styles.suvery_buttons)}>
					<Button
						size="lg"
						content="start"
						outline
						block
						active={false}
						color="basic"
						iconSide="left"
						icon={null}
					>
						1. (예시) 정해진 시간 내에 오프라인 팀 챌린지 과제를
						수행
					</Button>
					<Button
						size="lg"
						content="start"
						outline
						block
						active={false}
						color="basic"
						iconSide="left"
						icon={null}
					>
						2. 팀과의 협업을 경험
					</Button>
					<Button
						size="lg"
						content="start"
						outline
						block
						active={false}
						color="basic"
						iconSide="left"
						icon={null}
					>
						3. 멘토들과의 만남
					</Button>
					<Button
						size="lg"
						content="start"
						outline
						block
						active={false}
						color="basic"
						iconSide="left"
						icon={null}
					>
						4. 기타 이유를 적어주세요
					</Button>
				</div>
			</Modal.Body>
			<Modal.Footer between>
				<CarouselIndicators length={4} activeIndex={2} />
				<Button>다음</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Survey;

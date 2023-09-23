import cn from 'classnames';

import {
	Button,
	CarouselIndicators,
	Modal,
	TextArea,
	Typography,
} from '@goorm-dev/gds-challenge';

import styles from './FeedBack.module.scss';

const FeedBack = ({ isOpen, toggle }) => {
	return (
		<Modal isOpen={isOpen} toggle={toggle}>
			<Modal.Header toggle={toggle} centered />
			<Modal.Body>
				<div>
					<Typography
						token="h1"
						className={cn(styles.expected_challenge)}
					>
						구름톤 챌린지에 <br /> 전하고 싶은 말을 적어주세요.
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

				<TextArea
					block
					invalid={false}
					rows={4}
					resize="none"
					className={cn(styles.feedback_area)}
					placeholder="ex. 다음 번 챌린지에서는 더 어려운 문제가 출제되면 좋겠어요. 오프라인 과제가 다양했으면 좋겠어요."
				/>
			</Modal.Body>
			<Modal.Footer between>
				<CarouselIndicators length={4} activeIndex={3} />
				<div className={cn(styles.back_forward_bt)}>
					<Button color="basic">이전</Button>
					<Button onClick={() => {}}>다음</Button>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default FeedBack;

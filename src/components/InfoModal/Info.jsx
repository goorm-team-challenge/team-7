import cn from 'classnames';

import { Button, Typography, Modal, Label, Input, Form, TextArea, CarouselIndicators} from '@goorm-dev/gds-challenge';
import {useState} from "react";

import styles from './Info.module.scss';

const Info = ({isOpen, increment, toggle}) => {
	const [isMajor, setIsMajor] = useState(0);
	const [isEverUsed, setIsEverUsed] = useState(0);
	
	const handleClick = (func, input) => {
		func(input);
	}
	
	return (
		<>
			<Modal isOpen={isOpen} toggle={toggle} size="md">
				<Modal.Header toggle={toggle} centered>
					<Typography weight={700} token={"h4"}>구름 서비스 이용 경험을 알려주세요.</Typography>
					<Typography token={"caption"}>더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.</Typography>
				</Modal.Header>
				<Modal.Body>
					<Label>1. SW 관련 학과를 전공하셨나요? <span className={cn(styles.asterik)}>*</span></Label>
					<Form.Group>
						<div className={cn(styles.FlexContainer)}>
							<Button 
								block 
								onClick={() => handleClick(setIsMajor, 1)}
								color={isMajor == 0 ? 'basic' : (isMajor == 1) ? 'primary' : 'basic'} 
								outline={isMajor == 0 ? false : (isMajor == 1) ? true : false } 
							>
								전공
							</Button>
							<Button 
								block 
								onClick={() => handleClick(setIsMajor, 2)}
								color={isMajor == 0 ? 'basic' : (isMajor == 1) ? 'basic' : 'primary'} 
								outline={isMajor == 0 ? false : (isMajor == 1) ? false : true } 
							>
								비전공
							</Button>
						</div>
					</Form.Group>
					<Label>2. 구름 서비스를 사용해보신 적이 있나요? <span className={cn(styles.asterik)}>*</span></Label>
					<Form.Group>
						<div className={cn(styles.FlexContainer)}>
							<Button 
								block 
								color={isEverUsed == 0 ? 'basic' : (isEverUsed == 1) ? 'primary' : 'basic'} 
								outline={isEverUsed == 0 ? false : (isEverUsed == 1) ? true : false } 
								onClick={() => handleClick(setIsEverUsed, 1)}
							>
								예
							</Button>
							<Button 
								block 
								color={isEverUsed == 0 ? 'basic' : (isEverUsed == 1) ? 'basic' : 'primary'}
								outline={isEverUsed == 0 ? false : (isEverUsed == 1) ? false : true } 
								onClick={() => handleClick(setIsEverUsed, 2)}
							>
								아니오
							</Button>
						</div>
					</Form.Group>
					
					{
						isEverUsed &&
						<>
							<Typography>2-1. 사용 경험이 있는 서비스를 선택해주세요.(복수 선택 가능)</Typography>
							<div className={cn(styles.GridContainer)}>
							  <div className={cn(styles.item)}>
								<Input block type="checkbox" label="구름EDU" />
							  </div>
							  <div className={cn(styles.item)}>
								<Input block type="checkbox" label="구름LEVEL" />
							  </div>
							  <div className={cn(styles.item)}>
								<Input block type="checkbox" label="구름DEVTH" />
							  </div>
							  <div className={cn(styles.item)}>
								<Input block type="checkbox" label="구름IDE" />
							  </div>
							  <div className={cn(styles.item)}>
								<Input block type="checkbox" label="구름EXP" />
							  </div>
							</div>

							<div>
								<Typography>2-2. 해당 서비스를 사용하게 된 이유는 무엇인가요?</Typography>
								<TextArea rows={4} block></TextArea>
							</div>
						</>
					}
					
				</Modal.Body>
				<Modal.Footer>
					<div style={{ marginRight: '300px' }}>
						<CarouselIndicators length={4} activeIndex={1} />
					</div>
			
					<Button onClick={increment}>다음</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Info;

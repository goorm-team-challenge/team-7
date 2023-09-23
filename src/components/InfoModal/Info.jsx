import cn from 'classnames';

import { Button, Typography, Modal, Label, Input, Form, TextArea} from '@goorm-dev/gds-challenge';
import {useState} from "react";

import styles from './Info.module.scss';

const Info = ({isOpen, toggle}) => {
	const [isMajor, setIsMajor] = useState(false);
	const [isEverUsed, setIsEverUsed] = useState(false);
	
	const handleClick = (func, input) => {
		func(input);
	}
	
	return (
		<>
			<Modal isOpen={isOpen} toggle={toggle} size="md">
				<Modal.Header toggle={toggle} centered>
					<Typography>구름 서비스 이용 경험을 알려주세요.</Typography>
					<Typography>더 좋은 챌린지가 될 수 있도록 데이터를 수집하려고 해요.</Typography>
				</Modal.Header>
				<Modal.Body>
					<Label>1. SW 관련 학과를 전공하셨나요? *</Label>
					<Form.Group>
						<Button color="basic" onClick={() => handleClick(setIsMajor, true)}>전공</Button>
						<Button color="basic" onClick={() => handleClick(setIsMajor, false)}>비전공</Button>
					</Form.Group>
					<Label>2. 구름 서비스를 사용해보신 적이 있나요? *</Label>
					<Form.Group>
						<Button color="basic" onClick={() => handleClick(setIsEverUsed, true)}>예</Button>
						<Button color="basic" onClick={() => handleClick(setIsEverUsed, false)}>아니오</Button>
					</Form.Group>
					
					{
						isEverUsed &&
						<>
							<Typography>2-1. 사용 경험이 있는 서비스를 선택해주세요.(복수 선택 가능)</Typography>
							<div>
								<Input type="checkbox" label="구름EDU"></Input>
								<Input type="checkbox" label="구름LEVEL"></Input>
								<Input type="checkbox" label="구름DEVTH"></Input>								
							</div>

							<div>
								<Input type="checkbox" label="구름IDE"></Input>
								<Input type="checkbox" label="구름EXP"></Input>
							</div>

							<div>
								<Typography>2-2. 해당 서비스를 사용하게 된 이유는 무엇인가요?</Typography>
								<TextArea rows={4} block></TextArea>
							</div>
						</>
					}
					
				</Modal.Body>
				<Modal.Footer>
					<Button>다음</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Info;

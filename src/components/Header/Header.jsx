import { useState } from 'react';
import cn from 'classnames';

import { FeedBack, Info, ModalSign, Survey } from '@/components';

import { Button, Typography } from '@goorm-dev/gds-challenge';

import styles from './Header.module.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(0);
	const [toggle, setToggle] = useState(false);

	const handleOpen = () => {
		setIsOpen((prev) => {
			return prev + 1;
		});
	};

	const handleToggle = () => {
		setToggle(true);
		setIsOpen(0);
	};

	return (
		<header className={cn(styles.header)}>
			<div className={cn(styles.contents)}>
				<Typography token="h5">
					구름톤 챌린지 참여자 정보 수집
				</Typography>
				<Button size="lg" onClick={handleOpen}>
					설문조사 참여하기
				</Button>
				{!toggle && isOpen === 1 && (
					<ModalSign isOpen={isOpen} increment={handleOpen} toggle={handleToggle} />
				)}
				{!toggle && isOpen === 2 && (
					<Info isOpen={isOpen} increment={handleOpen} toggle={handleToggle} />
				)}
				{!toggle && isOpen === 3 && (<Survey isOpen={isOpen} increment={handleOpen} toggle={handleOpen} />)}
				{!toggle && isOpen === 4 && (<FeedBack isOpen={isOpen} increment={handleOpen} toggle={handleOpen} />)}
			</div>
		</header>
	);
};

export default Header;

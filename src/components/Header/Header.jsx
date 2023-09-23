import cn from 'classnames';

import { Button, Typography } from '@goorm-dev/gds-challenge';
import { Info } from '@/components';
import { useState } from "react";

import styles from './Header.module.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const handleOpen = () => {
		setIsOpen((prev) => {
			return !prev;
		});
	};
	
	return (
		<header className={cn(styles.header)}>
			<div className={cn(styles.contents)}>
				<Typography token="h5">
					구름톤 챌린지 참여자 정보 수집
				</Typography>
				<Button size="lg" onClick={handleOpen}>설문조사 참여하기</Button>
				{isOpen && <Info isOpen={isOpen} toggle={handleOpen}/>}
			</div>
		</header>
	);
};

export default Header;

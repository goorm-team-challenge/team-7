import { useState } from 'react';
import cn from 'classnames';

import { Survey } from '@/components';

import { Button, Typography } from '@goorm-dev/gds-challenge';

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
				<Button size="lg" onClick={handleOpen}>
					{isOpen && <Survey isOpen={isOpen} toggle={handleOpen} />}
				</Button>
			</div>
		</header>
	);
};

export default Header;

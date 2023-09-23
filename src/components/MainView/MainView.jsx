import { useState } from 'react';
import cn from 'classnames';

import { Card } from '@/components';

import { Button, Collapse, Typography } from '@goorm-dev/gds-challenge';
import { ChevronDownIcon, EditIcon, TrashIcon } from '@goorm-dev/gds-icons';

const MainView = ({ props }) => {
	const [toggle, setToggle] = useState(false);
	const handleToggleClick = () => {
		setToggle(!toggle);
	};

	return (
		<Card center padding="none">
			<Card flat="bottom" center padding="md">
				<div>
					<span>응답한 참여자: </span>
					<span style={{ color: '#5094FA' }}>{props.length}</span>
				</div>
			</Card>
			<div
				style={{
					overflowY: 'auto',
					maxHeight: '400px',
					scrollbarWidth: 'none',
				}}
			>
				{props.map((item, index) => {
					return (
						<Collapse
							isOpen
							style={{
								padding: '10px',
								paddingLeft: '25px',
								border: '1px solid rgba(0, 0, 0, 0.1)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							참여자 {`${index + 1}. ${item.name}`}
							<div style={{ display: 'flex', gap: '5px' }}>
								<Button
									color="basic"
									iconSide="left"
									icon={<EditIcon />}
								>
									수정하기
								</Button>
								<Button
									color="basic"
									iconSide="left"
									icon={<TrashIcon />}
								>
									수정하기
								</Button>

								<Button
									onClick={handleToggleClick}
									block={false}
									outline
									disabled={false}
									active={false}
									color="link"
									icon={<ChevronDownIcon />}
								/>
							</div>
						</Collapse>
					);
				})}
			</div>
		</Card>
	);
};

export default MainView;

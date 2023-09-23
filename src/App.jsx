import { EmptyView, Header } from '@/components';

import styles from './App.module.scss';
import MainView from './components/MainView/MainView';

function App() {
	const users = [
		{ id: 1, name: '최민우', email: 'email' },
		{ id: 2, name: '�����우', email: 'email' },
		{ id: 3, name: '최민우', email: 'email' },
		{ id: 4, name: '�����우', email: 'email' },
		{ id: 5, name: '최민우', email: 'email' },
		{ id: 6, name: '�����우', email: 'email' },
		{ id: 7, name: '최민우' },
		{ id: 8, name: '�����우', email: 'email' },
		{ id: 9, name: '최민우', email: 'email' },
		{ id: 10, name: '�����우', email: 'email' },
		{ id: 11, name: '최민우', email: 'email' },
		{ id: 12, name: '�����우', email: 'email' },
	];
	return (
		<div className={styles.App}>
			<Header />
			<main className={styles.main}>
				{users ? <MainView props={users} /> : <EmptyView />}
			</main>
		</div>
	);
}

export default App;

import { EmptyView, Header } from '@/components';

import styles from './App.module.scss';
import ModalSign from './components/ModalSign/ModalSign';

function App() {
	return (
		<div className={styles.App}>
			<ModalSign />
			{/*
			<Header />
			<main className={styles.main}>
				<EmptyView />
			</main>
			*/}
		</div>
	);
}

export default App;

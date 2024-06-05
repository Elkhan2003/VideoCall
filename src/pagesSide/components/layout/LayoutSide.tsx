import scss from './LayoutSide.module.scss';
import Footer from './footer/Footer.tsx';
import Header from './header/Header.tsx';
import { Outlet } from 'react-router-dom';

const LayoutSide = () => {
	return (
		<div className={scss.Layout}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default LayoutSide;

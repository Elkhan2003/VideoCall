import { createBrowserRouter } from 'react-router-dom';
import LayoutSide from '../pagesSide/components/layout/LayoutSide.tsx';
import HomePage from '../pagesSide/components/pages/HomePage.tsx';
import CallPage from '../pagesSide/components/pages/CallPage.tsx';
import LayoutAuth from '../pagesAuth/components/layout/LayoutAuth.tsx';
import LoginPage from '../pagesAuth/components/pages/LoginPage.tsx';
import RegistrationPage from '../pagesAuth/components/pages/RegistrationPage.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LayoutSide />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/call',
				element: <CallPage />
			}
		]
	},
	{
		path: '/auth',
		element: <LayoutAuth />,
		children: [
			{
				path: '/auth/login',
				element: <LoginPage />
			},
			{
				path: '/auth/registration',
				element: <RegistrationPage />
			}
		]
	}
]);

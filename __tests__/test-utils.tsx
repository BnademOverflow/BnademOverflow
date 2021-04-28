import { FC } from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

export const routerMock = {
	basePath: '',
	pathname: '/',
	route: '/',
	asPath: '/',
	query: {},
	push: jest.fn().mockResolvedValue(true),
	replace: jest.fn().mockResolvedValue(true),
	reload: jest.fn(),
	back: jest.fn(),
	prefetch: jest.fn().mockResolvedValue(undefined),
	beforePopState: jest.fn(),
	events: {
		on: jest.fn(),
		off: jest.fn(),
		emit: jest.fn(),
	},
	isFallback: false,
	isLocaleDomain: false,
	isReady: false,
	isPreview: false,
};

const ProvidersRenderer: FC = ({ children }) => (
	<RouterContext.Provider value={routerMock}>{children}</RouterContext.Provider>
);

const customRenderer = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'queries'>
): RenderResult =>
	render(ui, {
		wrapper: ProvidersRenderer,
		...options,
	});

export * from '@testing-library/react';
export { customRenderer as render };
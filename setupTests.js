window.matchMedia = jest.fn().mockImplementation((query) => {
	return {
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(),
		removeListener: jest.fn(),
	};
});

jest.mock('next/dynamic', () => () => {
	const DynamicComponent = () => null;
	DynamicComponent.displayName = 'LoadableComponent';
	DynamicComponent.preload = jest.fn();
	return DynamicComponent;
});

// jest.mock('next/router', () => ({
//   useRouter() {
//     return {
//       basePath: '',
//       pathname: '/',
//       route: '/',
//       asPath: '/',
//       query: {},
//       push: jest.fn(),
//       replace: jest.fn(),
//       reload: jest.fn(),
//       back: jest.fn(),
//       prefetch: jest.fn(),
//       beforePopState: jest.fn(),
//       events: {
//         on: jest.fn(),
//         off: jest.fn(),
//         emit: jest.fn(),
//       },
//       isFallback: false,
//     };
//   },
// }));

export { };
import '@testing-library/jest-dom/extend-expect';
// import userEvent from '@testing-library/user-event';
// import { server } from 'mocks/server';
import { render, screen, fireEvent } from '../test-utils';

beforeAll(() => {
	// this is here to silence a warning temporarily
	// we'll fix it in the next exercise
	jest.spyOn(console, 'error').mockImplementation(() => {
		return null;
	});
	// server.listen();
});

// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// const data = {};

describe('Test test', () => {
	test('test', async () => {
		render(
			<div>
				<h1>Test</h1>
			</div>
		);

		expect(await screen.findByText('Test')).toBeInTheDocument();
	});
});
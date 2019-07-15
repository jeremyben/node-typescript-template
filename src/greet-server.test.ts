import { greet } from './greet-server'

test('Hello world', async () => {
	const consoleLogSpy = spyOn(console, 'log')
	const result = await greet()

	expect(result).toBe('Hello world')
	expect(consoleLogSpy).toBeCalledWith('Side effect')
})

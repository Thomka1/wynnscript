import https from 'https';

// Custom-made functions for https get request because packages
// like Got and node-fetch are really heavy and make overall bundle weight x10 more
export function getJSONfromHttps(url: string): Promise<any> {
	return new Promise((resolve, reject) => {
		let buffer: string = "";
		https.get(url, e => {
			e.setEncoding('utf8');
			e.on('data', x => buffer += x);
			e.on('end', () => resolve(JSON.parse(buffer)));
		});
	});
}
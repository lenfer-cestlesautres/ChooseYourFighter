// import axios from 'axios';

export const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
    // reject(new Error('timeout'));
	resolve('foo');
	}, 300);
});

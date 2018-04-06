"use strict";

const Rx = require('rxjs');
const request = require('request');

let basicObservable = Rx.Observable.create( observer => {
    observer.next('Learning RxJs');
    observer.next('piece');
    observer.next('by');
    observer.next('piece');
});
basicObservable.subscribe(val => console.log(val));

console.log('-------');

var options = {
	uri: 'https://api.github.com/users/kjhe11e/repos',
	method: 'GET',
	headers: {'user-agent': 'node.js'}
};

let apiRequestObservable = Rx.Observable.create(function (observer) {
	request(options, function (err, response, body) {
		if (err) {
			observer.error();
		} else {
			observer.next({response: response, body: body });
		}
		observer.complete();
	})
})
.map(e => console.log(e));
apiRequestObservable.subscribe();



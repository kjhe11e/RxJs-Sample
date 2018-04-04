"use strict";

const Rx = require('rxjs');
const Promise = require('bluebird');

let observable = Rx.Observable.create( observer => {
    observer.next('Learning RxJs');
    observer.next('piece');
    observer.next('by');
    observer.next('piece');
});
observable.subscribe(val => console.log(val));

console.log('-------');

console.log('Promises can be converted to observables...');

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('like this resolved promise!');
    }, 3000);
});

const obsvPromise = Rx.Observable.fromPromise(myPromise);
obsvPromise.subscribe(result => {
    console.log(result);
    console.log('-------');
});


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppThree from './AppThree';
import registerServiceWorker from './registerServiceWorker';
import { arrive, leave } from 'arrive';
let MutationObserver = require('mutation-observer');


var observer = new MutationObserver(function(mutations) {
	// For the sake of...observation...let's output the mutation to console to see how this all works
	mutations.forEach(function(mutation) {
		console.log("mutation observeeer "+ mutation.type);
	});    
});
 
// Notify me of everything!
var observerConfig = {
    subtree: true,    
	attributes: true, 
	childList: true, 
	characterData: true 
};
 
// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.body;
observer.observe(targetNode, observerConfig);



console.log("watching app loaded");
document.arrive(".mkt-app", function (newElem) {
    let appName = newElem.getAttribute("id");
    console.log("new app " + appName + " added");
    switch (appName) {
        case "App1":
            ReactDOM.render(<App appName="App1" />, newElem);
            break;
        case "App3":
            ReactDOM.render(<AppThree appName="App3!" />, newElem);
            break;
        default:
            break;
    }

});
document.leave(".mkt-app", function () {
    let appName = this.getAttribute("id");
    console.log("app removed was " + appName);
    ReactDOM.unmountComponentAtNode(this);
});

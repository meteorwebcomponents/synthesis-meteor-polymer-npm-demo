##  Set Up

#### clone the repo

`git clone git@github.com:meteorwebcomponents/synthesis-meteor-polymer-npm-demo.git`

#### Install npm dependencies

`npm install`

>Do not use meteor npm install. Instead use npm install @polymer/components-name

#### Load components.

##### Load webcomponents and polymer before everything else.

```js
/* imports/ui/index.js */
import "webcomponents.js/webcomponents-lite.min.js";
import "@polymer/polymer/polymer.html";

```

##### Load third party components you use on the go.

```js
/* imports/ui/components/test-element.js */
import "@polymer/paper-button/paper-button.html";

```

>Note that you cannot use `<link rel="import" href="@polymer/component/component.html">` from html files since synthesis considers link import paths as relative. You can give absolute path(relative path from root directory) as href though.

##### Load your components using import/require from js files. You can use link imports from html files.

```js
/* imports/ui/index.js */
import "./components/test-element.html";
```

# Constants Tree
Arrange your constants.
```
npm install --save constants-tree
```
## What is this for?
In large projects, a lot of constants are created. Each of them requires a unique name. That entails an increase and a muddle in constants. This library will organize your constants.
### Example
```JS
export const LOGIN_FORM_REQUEST = "LOGIN_FORM_REQUEST";
export const LOGIN_FORM_RESPONSE = "LOGIN_FORM_RESPONSE";
export const LOGIN_ACCEPT = "LOGIN_ACCEPT";
export const LOGIN_REJECT = "LOGIN_REJECT";
...

import {LOGIN_FORM_REQUEST, LOGIN_FORM_RESPONSE,
  LOGIN_ACCEPT, LOGIN_REJECT} from './constants';

export const LoginFormRequest = () => ({
  type: LOGIN_FORM_REQUEST,
});
export const LoginFormResponse = () => ({
  type: LOGIN_FORM_RESPONSE,
});
export const LoginAccept = () => ({
  type: LOGIN_ACCEPT,
});
export const LoginReject = () => ({
  type: LOGIN_REJECT,
});

```
#### Replace
```JS
import {constantsTree} from 'constants-tree';

const appConstant = {
  loginForm: {
    request: '',
    response: '',
  },
  login: {
    accept: '',
    reject: '',
  }
}
constantsTree(appConstant, 'app');
export const APPLICATION = appConstant;
...

import {APPLICATION} from './constants';
export const LoginFormRequest = () => ({
  type: APPLICATION.loginForm.request,
});
export const LoginFormResponse = () => ({
  type: APPLICATION.loginForm.response,
});
export const LoginAccept = () => ({
  type: APPLICATION.login.accept,
});
export const LoginReject = () => ({
  type: APPLICATION.login.reject,
});

```

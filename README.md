# tibia-tasks
Build some automated tasks in tibia.com =)

## Project IDEA
```
var tibia = require('tibia-tasks');
```

### Methods Summary
* [tibia.login](#login)
* [tibia.account](#account)
* [tibia.createCharacter](#createCharacter)
* [tibia.createAccount](#createAccount)
* [tibia.createFullAccount](#createFullAccount)

---

### login
```js
tibia.login(acc, pass, callback)
```

**Parameters**  
`acc` string | _account number_  
`pass` string | _account password_  

**Callback**  (success, response)  
`success` boolean |    
`response` object |  

**Example**
```js
tibia.login('your-account', 'your-password', function(success, response){
  if(success){
    console.log('Yes! Im logged');
  } else {
    console.log('Ops, wrong credentials?');
    console.log(response.tibiaerrors); // ['Account name or password is not correct.']
  }
}
```

[[back to top]] (#methods-summary)

---

### account
```js
tibia.account(callback)
```

**Parameters**  
_nothing_

**Callback**  (success, response)  
`success` boolean |   
`response` object |

**Example**
```js
tibia.account(function(success, response){
  if(success){
    console.log('Yes! Im logged');
  } 
}
```

[[back to top]] (#methods-summary)

---



### Callbacks
Callback `response` is from _[Request Response](https://github.com/request/request)_ 

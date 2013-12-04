Sun.js Preview
==============

Sun.js is a utility-belt library for JavaScript.And it will always constantly review and update.For Your Information.:sunglasses:

**But, it beta now.**

### About namespace

```
sun
├── ajax
├── context
│   ├── cookie
│   └── localStorage
├── md
└── util
```

sun
---

**$** sun.$(domId)

```
sun.$('#btn_ok');
=>[<button id='btn_ok' />]
```

sun.ajax
--------

**post**    sun.ajax.post('moo/lazyer', oData, fnCallBack, [isAsync])

```
sun.ajax.post(sPageUrl, oData, fnCallBack, [isAsync]);
```

**getJSON** sun.ajax.getJSON(sPageUrl, oData, fnCallBack, [isAsync])

```
sun.ajax.getJSON('~/defined/product.json', oData, fnCallBack, [isAsync]);
=> { "name" : "sun" }
```

sun.context
-----------

**getQueryStringByName** sun.context.getQueryStringByName(name)

It will return the value of checking url.If name is null, then null will be returned.

```
 sun.context.getQueryStringByName("id");
 => 10035
```

sun.context.cookie
------------------

**set** sun.context.cookie.set(name, value)

```
sun.context.cookie.set('passId', 350350);
```

**setExpires**  sun.context.cookie.setExpires(name,value,expiresValue)

The arguments expiresValue type is int.

```
sun.context.cookie.setExpires("passId", 350350, 15);
```

**get** sun.context.cookie.get(name, value)

```
sun.context.cookie.get('passId');
=> 350350
```

**del** sun.context.cookie.del(name, value)

```
sun.context.cookie.del('passId');
```

sun.context.localStorage
------------------

**set** sun.context.localStorage.set(name, value)

```
sun.context.localStorage.set('passId', 350350);
```

**get** sun.context.localStorage.get(name, value)

```
sun.context.localStorage.get('passId');
=> 350350
```

**del** sun.context.localStorage.del(name, value)

```
sun.context.localStorage.del('passId');
```

**clearAll** sun.context.localStorage.clearAll()

```
sun.context.localStorage.clearAll();
```


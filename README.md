Sun.js Preview
==============

Sun.js is a utility-belt library for JavaScript.And it will always constantly review and update.For Your Information.

### About namespace

```
sun
├── ajax
├── md
├── context
│   ├── cookie
│   └── localStorage
└── util
```

sun.ajax
--------

**post**    sun.ajax.post: function(sPageUrl, oData, fnCallBack, isAsync)

```
sun.ajax.post: function(sPageUrl, oData, fnCallBack, isAsync);
```

**getJSON** sun.ajax.getJSON: function(sPageUrl, oData, fnCallBack, isAsync)

```
sun.ajax.getJSON: function(sPageUrl, oData, fnCallBack, isAsync);
=> { "name" : "sun" }
```

sun.context
-----------

**getQueryStringByName** sun.context.getQueryStringByName(name)

It will return the value of checking url.If name is null, then null will be returned.

```
 sun.context.getQueryStringByName('id');
 => 10035
```

sun.context.cookie
------------------

**setCookie** sun.context.cookie.setCookie(name,value)

```
sun.context.cookie.setCookie(name,value);
```

**setCookieAndExpires**  sun.context.cookie.setCookieAndExpires(name,value,expiresValue)

The arguments expiresValue type is int.

```
sun.context.cookie.setCookieAndExpires("passId", 350350, 15);
```
For this drill, you need to implement a GET endpoint at `/echo/:what`, where `:what` is [named route parameter](https://expressjs.com/en/guide/routing.html#route-parameters).

The endpoint should return an object with keys for `host`, `query`, and `params`. `host` should be the host for the app. `query` should be an object representing URL query parameters sent in the request (if any), and `echo` should be an object representing any named route parameters (in this case, it will only have an entry for "what"). So, for instance, a request to `https://my-great-app.glitch.me/echo/foo?cats=dogs` should receive a JSON response that looks like this:

```json
{
    "host": "brawny-soil.glitch.me",
    "query": {
        "cats": "dogs"
    },
    "params": {
      "what": "foo"
    }
}
```

Note that the values for all of these can be found on the request object, as documented [here](http://expressjs.com/uk/api.html#req).

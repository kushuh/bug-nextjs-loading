# Bug NextJS Loading component

How to reproduce:

```
npm run dev
```

Click on the "Go to feed" button.

![go to feed](img/home.png)

See the loader displaying "Mounted" (expected behavior). Page will resolve 10s later with a "Home" button.

![go to feed](img/loading-ok.png)

Reload the page. See the wrong text displayed.

![go to feed](img/loading-broken.png)

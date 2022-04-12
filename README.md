# Dad Jokes

> Nuxt.js app that ists corny dad jokes. Uses the [icanhazdadjoke.com API](https://icanhazdadjoke.com/api)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
$ yarn dev

# build for production and launch server
# 如果沒有跑 npm run generate 則不會跑出新版本的內容
$ npm run build
$ yarn start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## 技術債

在2021年欠的技術債，於2022年整合完的同時順便還一還

### Layout 切分含糊

各校作品的顏色消失的原因在於Layout的結構太複雜了，因此在這裡先必要的切分Layout

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h0cwd0patuj21h50on7d6.jpg)

以下列出目前所使用的Layout

````txt
SuperNine     => 九九數位
OneNine       => 109y
SchoolOneNine => 109y學校頁總覽/學生頁總覽
OneTen        => 110y
SchoolOneTen  => 
````

九九數位的樣板

````javascript
export default {
  head() {
    return {
      title: "九九數位",
      /* 九九數位的metadata，凡事使用九九數位樣板所呈現的metadata都會長這樣 */
      meta: [
        { hid: "title", name: "九九數位", content: "九九數位" },
        { hid: "description", name: "九九數位", content: "九九數位" },
        { hid: 'og:image', property: 'og:image', 
          content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtm3dp9sYNV25HMrjT9ECXwBSAN4QnWoAgSQ&usqp=CAU" }
      ],
      /* 使用fontawesome & boxicons */
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css" },
        { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css" }
      ]
    };
  },
  mixins: [website],
  name: "navbar",
  computed: {
    navItem() {
      return [
        ...map(el => ({ path: el.path, name: el.name }), superNineNine)
      ];
    },
  },
  layout: "SuperNine",
};
````

話說掛cdn的地方應在 `nuxt.config.js` ，下列導覽列分別引入了比較的metaData，以及欲使用的圖

````js
export default {
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title'  , property: 'og:title', content: '心之所向' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:description', property: 'og:description', content: pkg.description },
      { hid: 'og:url', property: 'og:url', content: 'https://woo-think.vercel.app/'},
      { hid: 'og:image', property: 'og:image', content: '/palette.png'},
      { hid: 'og:type' , property: 'og:type' , content: 'ninenine-digital-design'},
    ],
    /* bootstrap, boxicons, fontawesome 放在這裡 */
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/palette.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css' },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css" },
      { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css" }
    ]
  },
}  
````

### CSS

如何保持正常的hover體驗

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h0d0ur831fj215b0baq4z.jpg)

````scss
ul.menu-item {
  display: block;
  li {
    line-height: 2.8;
  }
  li:first-child {
    background: #37523d;
    color: #fafafa;
  }
  /* 側邊欄第一位不會跟著被hover */
  li + li:hover {
    background: #eaf0ed;
  }
}
````

### 考古

````js
tenSchoolNavItemColor() {
  return {
    "ten-school": this.isSchoolNav,
    "article-nav-item": this.articlePage,
    "page-109y": this.is109y
  };
},
````

### this.$route

````js
this.$route.query // query string
this.$route.path  // path
````

### 110

進入線上藝廊的按鈕和109年度的外觀有差

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h0dvza5h4lj20f606ujrf.jpg)

#### 檢查圖片是否存在

````js
export function checkImage(url) {
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  
  return request.status == 200
}
````

### 快捷鍵

- 沒有選擇只有游標的話，`ctrl+c`就是複製

- 選行模式：`shift + command + 8`

- 進入選行模式以後，先用`ctrl + F`

  `ctrl + G`的話跳到下一個關鍵字（`next occurrance`）
  `ctrl + shift + G`的話跳到上個關鍵字（`next occurrance`）

- `cmd + 左邊`：游標到最左

- 多選往下平移：`下面`

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h0qujshehsg20go065n1y.gif)

### axios

Add it into your `nuxt.config.js` file:

```javascript
modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    // extra config e.g
    // BaseURL: 'https://link-to-API'
  }
```

The `modules` array accepts a list of Nuxt.js modules such as dotenv, auth and in this case, Axios. What we’ve done is to inform our application that we would be using the Axios module, which we reference using `@nuxtjs/axios`. This is then followed by the `axios` property which is an object of configurations like the baseURL for both client-side and server-side.

Now, you can access Axios from anywhere in your application by calling `this.$axios.method` or `this.$axios.$method`. Where *method* can be `get`, `post`, or `delete`.

### http to https forward

在ftp的根目錄創建`.htaccess`，並且寫入下述內容即可。

````txt
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
````

### Nuxt routes

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h0quk6u500j20im0653z9.jpg)



### 參考來源

- [icon](https://www.flaticon.com/search?word=art&order_by=4&type=icon)
- [圖片路徑](https://forum.freecodecamp.org/t/problem-with-image-path-generated-from-function-in-react/249420)

# vant-viewport-template

> A Vue.js project based on vant & viewport

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
npm test
```

### 使用手册
本模板使用的ui框架是[vant](https://youzan.github.io/vant/#/zh-CN/)

#### 准备原料
- [vant](https://youzan.github.io/vant/#/zh-CN/)

#### 具体功能（以上提到的小编封装的小细节或者小demo，可以参考）
- 图片放大功能
考虑到页面中多处用到图片放大的功能，小编在store/modules/images里定义了mutation的方法，直接调用this.store.commit('HANDLE_PREVIEW_IMAGES',img),需要注意的是，img的类型只能是字符串或者数组（this只能在能获取vue实例里调用store里的方法）

- 上拉加载 下拉刷新
可以查看page
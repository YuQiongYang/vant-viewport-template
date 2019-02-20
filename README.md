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
- pug 
实现代码简写，只需要在组件的template模板上加上lang="pug" 则可以开始写[pug](https://pug.bootcss.com/language/plain-text.html)语法，没写过pug语法的可以参考一下文档，不过呢，我觉得可以先看下小编的小demo，说不定你就会了

- viewport
移动端实现自适应布局方法不止一个，小编选择了viewport，写样式的时候根据750*1334的设计稿来就可以啦，直接写px哟，不用怀疑，如果你想直接写vw的话，也是可以的（只是没有必要），你可以看下文件根目录下的.postcssrc.js的文件，看了我相信你会明白里面的配置项的，如果你想引进其他的插件的话，记得要注意一下selectorBlackList数组，避免px变成vw，然而这不是你想要的效果

- [vant](https://youzan.github.io/vant/#/zh-CN/)
一个小编认为非常好的移动ui框架（不接受反驳）,下面的具体功能是小编觉得项目中通常用到的，可能补充的不完整，毕竟小编第一次做模板。可能需要发现的时候再补充

#### 具体功能（以上提到的小编封装的小细节或者小demo，可以参考

- 图片放大功能
考虑到页面中多处用到图片放大的功能，小编在store/modules/images里定义了mutation的方法，直接调用this.store.commit('HANDLE_PREVIEW_IMAGES',img),需要注意的是，img的类型只能是字符串或者数组（this只能在能获取vue实例里调用store里的方法）

- 上拉加载 下拉刷新
可以查看page/pull 下的demo，基本可以直接复制过来使用（当然要改的东西还是要改哟）


<template lang="pug">
  .container
    .sidebar
      ul.menu-item
        li 服務項目
        li 所有網站
        li 十校聯展
    .content
      .content-item
        img(src="http://super-ninenine.synology.me/109/banner.jpg", alt="109年十校")
        .desc
          .product-name
            span 焦糖甜甜圈
          .price
            span NT$450
        .btn
          nuxt-link(to="/exhibitions")
            span 109學年度各級聯合展覽
      .content-item
        img(src="http://super-ninenine.synology.me/110/banner.jpg", alt="110年十校")
        .desc
          .product-name
            span 焦糖甜甜圈
          .price
            span NT$450
        .btn
          nuxt-link(to="/exhibitions")
            span 110學年度各級聯合展覽
</template>

<style lang="scss" scoped>
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 1600px) {
  .container {
    max-width: 1600px;
  }
}
@media (min-width: 1900px) {
  .container {
    max-width: 1900px;
  }
}
@media (min-width: 768px) {
  .sidebar {
    width: 30%;
  }
  .container {
    width: 750px;
  }
}
@media (max-width: 991px) {
  .sidebar {
    display: none;
  }
  /* 增加權重 */
  .content.content {
    margin-left: 0;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1180px;
  }
}
/* https://blog.hubspot.com/website/css-sidebar */
.sidebar {
  width: 20%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 40px;
  ul.menu-item {
    display: block;
    li {
      line-height: 2.8;
    }
    li:first-child {
      background: var(--first-color);
      color: #fafafa;
    }
    li + li:hover {
      background: #eaf0ed;
    }
  }
}
.menu-item {
  width: 300px;
  text-align: center;
  font-size: 20px;
  color: var(--first-color);
  padding: 20px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  margin-left: 35%;
}
.content-item {
  margin: 4px;
  img {
    width: 100%;
  }

  .desc {
    display: flex;
    padding: 4px 7px;
    border-width: 1px;
    justify-content: space-between;
    border-style: solid;
    border-color: #f2f5f4;
    color: #45614b;
    .product-name,
    .price {
      line-height: 3;
    }

    .price {
      font-weight: bold;
    }
  }

  .btn {
    text-align: center;
    line-height: 3;
    background-color: #eaf0ed;
    a {
      color: #3f5c46;
      font-weight: bold;
    }
  }
}
</style>

<script>
export default {
  layout: "SuperNine",
};
</script>

export const siteType = {
  chi: 'chi', school: 'school'
}

/**
 * Route Meta Fields 可以用來標示哪些網站需要登入權限，
 * 以現在的使用場景則用 meta 要區隔2合1的網站
 *
 * 參考網站: https://router.vuejs.org/guide/advanced/meta.html
 */

/* 崎崎 */
export const superNineNine = [
  {
    path: "/",
    name: "首頁",
    meta: { genre: siteType.chi },
  },
  {
    path: "/about",
    name: "關於我們",
    meta: { genre: siteType.chi },
  },
  {
    path: "/service",
    name: "服務項目",
    meta: { genre: siteType.chi },
  },
  {
    path: "/achievement",
    name: "履約實績",
    meta: { genre: siteType.chi },
  },
  {
    path: "/cooperation",
    name: "合作網頁",
    meta: { genre: siteType.chi },
  },
]
/* 十校聯展 */
export const schoolExhibition = [
  {
    path: "/exhibitions",
    name: "十校連展-首頁",
    meta: { genre: siteType.school },
  },
  {
    path: "/schools/about",
    name: "十校連展-關於展覽",
    meta: { genre: siteType.school },
  },
  {
    path: "/schools/:id",
    name: "十校連展-各校",
    meta: { genre: siteType.school },
    onNav: false
  },
  {
    path: "/schools",
    name: "十校連展-各校作品",
    meta: { genre: siteType.school },
  },
]

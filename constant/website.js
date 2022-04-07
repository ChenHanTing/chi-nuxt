/* 運行主機 */
export const host = "http://super-ninenine.synology.me"
/* 現在年份 */
export const currentYear = new Date().getFullYear() - 1911 - 1
/* 九九數位導覽列 */
export const superNineNine = [
  {
    path: "/",
    name: "首頁",
  },
  {
    path: "/about",
    name: "關於我們",
  },
  {
    path: "/service",
    name: "服務項目",
  },
  {
    path: "/achievements",
    name: "履約實績",
  },
  {
    path: "/cooperation",
    name: "合作網頁",
  },
]
/* 九九數位服務項目 */

/* 十校聯展 */
export const schoolExhibition = [
  {
    path: "/exhibitions",
    name: "十校連展-首頁",
  },
  {
    path: "/exhibitions/about",
    name: "十校連展-關於展覽",
  },
  {
    path: "/schools/:id",
    name: "十校連展-各校",
    onNav: false
  },
  {
    path: "/schools/mces",
    name: "十校連展-各校作品",
  },
  {
    path: "/exhibitions/introduction",
    name: "十校連展-展場介紹",
  },
  {
    path: "/exhibitions/activity",
    name: "十校連展-活動花絮",
  },
]

/* 十校聯展 */
export const schoolExhibitionOneTen = [
  {
    path: "/exhibitions/110",
    name: "十校連展-首頁",
    en: "home"
  },
  {
    path: "/exhibitions/110/about",
    name: "十校連展-關於展覽",
    en: "about"
  },
  {
    path: "/schools/110/:id",
    name: "十校連展-各校",
    en: "schools",
    onNav: false
  },
  {
    path: "/schools/110/mces",
    name: "十校連展-各校作品",
    en: "activles"
  },
  {
    path: "/exhibitions/110/introduction",
    name: "十校連展-展場介紹",
    en: "introduction"
  },
  {
    path: "/exhibitions/110/activity",
    name: "十校連展-活動花絮",
    en: "activity"
  },
]

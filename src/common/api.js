// 各环境域名地址
// const dev_host = 'https://smgdatadev.smgtech.net'
const test_host = 'https://smgdatatest.smgtech.net'
const product_host = 'https://smgdata.smgtech.net'
// 根路径
export const CATEGORY = '/index.php?r='
// 概况：昨日／整体数据
export const S_Total_Data_Path = 'analysis/index'
export const S_Total_Data_DEV = CATEGORY + S_Total_Data_Path
export const S_Total_Data_TEST = test_host + CATEGORY + S_Total_Data_Path
export const S_Total_Data_PRODUCT = product_host + CATEGORY + S_Total_Data_Path
// 概况：微信数据
export const S_WX_Data_Path = 'analysis/statistics'
export const S_WX_Data_DEV = CATEGORY + S_WX_Data_Path
export const S_WX_Data_TEST = test_host + CATEGORY + S_WX_Data_Path
export const S_WX_Data_PRODUCT = product_host + CATEGORY + S_WX_Data_Path
// 概况：微信趋势
export const S_WX_Trend_Path = 'analysis/details'
export const S_WX_Trend_DEV = CATEGORY + S_WX_Trend_Path
export const S_WX_Trend_TEST = test_host + CATEGORY + S_WX_Trend_Path
export const S_WX_Trend_PRODUCT = product_host + CATEGORY + S_WX_Trend_Path
// 概况：排行榜
export const S_WX_Board_Path = 'analysis/wxrank'
export const S_WX_Board_DEV = CATEGORY + S_WX_Board_Path
export const S_WX_Board_TEST = test_host + CATEGORY + S_WX_Board_Path
export const S_WX_Board_PRODUCT = product_host + CATEGORY + S_WX_Board_Path
// 稿件总览：分享收藏
export const PS_WX_SHARE_Path = 'analysis/overviewnum'
export const PS_WX_SHARE_DEV = CATEGORY + PS_WX_SHARE_Path
export const PS_WX_SHARE_TEST = test_host + CATEGORY + PS_WX_SHARE_Path
export const PS_WX_SHARE_PRODUCT = product_host + CATEGORY + PS_WX_SHARE_Path
// 稿件总览：热门稿件
export const PS_HOT_PAGES_Path = 'analysis/hotarticlelist'
export const PS_HOT_PAGES_DEV = CATEGORY + PS_HOT_PAGES_Path
export const PS_HOT_PAGES_TEST = test_host + CATEGORY + PS_HOT_PAGES_Path
export const PS_HOT_PAGES_PRODUCT = product_host + CATEGORY + PS_HOT_PAGES_Path
// 稿件总览：三审稿件
export const PS_EXAM_PAGES_Path = 'analysis/threearticlenum'
export const PS_EXAM_PAGES_DEV = CATEGORY + PS_EXAM_PAGES_Path
export const PS_EXAM_PAGES_TEST = test_host + CATEGORY + PS_EXAM_PAGES_Path
export const PS_EXAM_PAGES_PRODUCT = product_host + CATEGORY + PS_EXAM_PAGES_Path
// 稿件总览：分享阅读场景
export const PS_SCENES_Path = 'analysis/sharereadscene'
export const PS_SCENES_DEV = CATEGORY + PS_SCENES_Path
export const PS_SCENES_TEST = test_host + CATEGORY + PS_SCENES_Path
export const PS_SCENES_PRODUCT = product_host + CATEGORY + PS_SCENES_Path

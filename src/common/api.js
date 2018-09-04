// 接口地址组件
// 各环境域名
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
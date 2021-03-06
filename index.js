/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-10 16:50:09
 */

module.exports = {
  mobile: /^1\d{10}$/,
  qq: /^[1-9]\d{4,10}$/,
  number: /^[-+]?(?:\d+(?:\.\d*)|(?:\d*\.)?\d+)$/,
  email: /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/,
  url: /^(https?)\:\/\/www\.(.*?)\.(com|cn|org|net|org|gov)$/,
  /**
   * @ipv4
   * 250-255：三位数，百位是2，十位是5，个位是0~5，用正则表达式可以写成：25[0-5] 
   * 200-249：三位数，百位是2，十位是0~4，个位是0~9，用正则表达式可以写成：2[0-4]\d 
   * 0-199：这个继续分拆. 
   *  0-9：一位数，个位是0~9，用正则表达式可以写成：\d 
   *  10-99：   二位数，十位是1~9，个位是0~9，用正则表达式可以写成：[1-9]\d 
   *  100-199：三位数，百位是1，十位是0~9，个位是0~9，用正则表达式可以写成：1\d{2}
   */
  ipv4: /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/,
  /** 
   * @idcard：验证身份证
   * 18位：xxxxxx yyyy MM dd 375 0
   * 15位：xxxxxx   yy MM dd  75 0
   * [1-9]\d{5}: 地区
   * (18|19|20)?: 年的前两位或者无
   * \d{2}：年的后两位
   * ((0[1-9])|(10|11|12))： 月份
   * (([0-2][1-9])|10|20|30|31)： 天数
   * \d{2,3}： 两到三位顺序码
   * [0-9Xx]： 校验码
   * 
  */
  idcard: /^[1-9]\d{5}(18|19|20)?\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2,3}[0-9x]$/i,
};
/*
 * @Author: Semmy Wong
 * @Date: 2024-03-15 19:11:42
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 22:43:14
 * @Description: Description
 */
interface ResponseJSONType {
  code: number;
  message: string;
  data?: any;
}
export const responseJSON = ({ code, message, data }: ResponseJSONType) => {
  return {
    code: code || 0,
    message: message || 'ok',
    data: data || null,
  };
};

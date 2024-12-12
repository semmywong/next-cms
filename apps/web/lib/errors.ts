/*
 * @Author: Semmy Wong
 * @Date: 2024-03-27 21:23:34
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-27 21:23:44
 * @Description: Description
 */
export class ApiError extends Error {
    status: number;
  
    constructor(status: number, message: string) {
      super(message);
      this.status = status;
    }
  }
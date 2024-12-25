/*
 * @Author: Semmy Wong
 * @Date: 2024-11-27 21:11:53
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-12-12 20:27:34
 * @Description: Description
 */
import { log } from "@next-cms/logger";
import { createServer } from "./server";

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});

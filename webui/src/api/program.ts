import type { ApiSuccess } from '#/api';

export const apiProgram = {
  /**
   * 重启
   */
  async restart() {
    const { data } = await axios.get<ApiSuccess>('api/v1/restart');
    return data;
  },

  /**
   * 启动
   */
  async start() {
    const { data } = await axios.get<ApiSuccess>('api/v1/start');
    return data;
  },

  /**
   * 停止
   */
  async stop() {
    const { data } = await axios.get<ApiSuccess>('api/v1/stop');
    return data;
  },

  /**
   * 状态
   */
  async status() {
    const { data } = await axios.get<{ status: boolean; version: string }>(
      'api/v1/status'
    );

    return data!;
  },

  /**
   * 终止
   */
  async shutdown() {
    const { data } = await axios.get<ApiSuccess>('api/v1/shutdown');
    return data;
  },
};

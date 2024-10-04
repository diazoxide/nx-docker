import { ExecutorContext } from '@nx/devkit';

import { ImagePushExecutorSchema } from './schema';
import executor from './executor';

const options: ImagePushExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('ImagePush Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});

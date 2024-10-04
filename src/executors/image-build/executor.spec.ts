import { ExecutorContext } from '@nx/devkit';

import { ImageBuildExecutorSchema } from './schema';
import executor from './executor';

const options: ImageBuildExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('ImageBuild Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});

import {DockerOptions} from "dockerode";
import {DockerOptionsContainer} from "../../common";

export interface ImageBuildExecutorSchema extends DockerOptionsContainer {
    dockerfile?: string
    context: string
    target?: string
    tag?: string
} // eslint-disable-line

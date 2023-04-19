import Mock from 'mockjs';
import setupMock, {
    successResponseWrap,
} from '../setup-mock';
/**
 * 服务器信息
 */
const module = 'server'

let data = {
    "ip": "58.23.48.91",
    "ipLocation": "福建  厦门",
    "lanIp": "10.10.10.36",
    "serverName": "USER-20220531TX",
    "systemOs": "Microsoft Windows 10.0.19044",
    "osArchitecture": "X64",
    "processorCount": "12",
    "frameworkDescription": ".NET 6.0.12",
    "ramUse": "134.98 MB",
    "startTime": "2023-04-19 15:02"
};
let servarStatus = {
    "cpuRate": 5,
    "totalRAM": "32 GB",
    "ramRate": 45,
    "runTime": "01 天 22 小时 04 分 15 秒"
};

setupMock({
    setup() {
        Mock.mock(`/api/${module}/read`, () => {
            return successResponseWrap(data);
        });
        Mock.mock(`/api/${module}/readStatus`, () => {
            return successResponseWrap(servarStatus);
        });
    },
});
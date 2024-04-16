const {PlatformConfig, PlatformClient} = require('./sdk/platform');
const {fdkAxios} = require('./sdk/common/AxiosHelper');
const Utility = require('./sdk/common/Utility');
const Constant = require('./sdk/common/Constant');

module.exports = {
    PlatformConfig: PlatformConfig,
    PlatformClient: PlatformClient,
    FdkAxios: fdkAxios,
    Utility,
    Constant,
};

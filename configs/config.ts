const envName = process.env.ENV_NAME || 'navigator';

const config = {
    baseUrl: `https://www.${envName}.ba`,
};

export default config;

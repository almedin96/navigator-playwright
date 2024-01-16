module.exports = async () => {
    // Check if required environment variables are set
    if (!process.env.ENV_NAME) {
      console.error('Required environment variables ENV_NAME.');
      process.exit(1); // Exit with a non-zero status code to indicate failure
    }
};
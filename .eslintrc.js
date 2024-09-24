// https://docs.expo.dev/guides/using-eslint/
/**
 * integrate Prettier with ESlint,
 */
module.exports = {
    extends: ["expo", "prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "warn",
    },
};
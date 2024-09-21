// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
    js.configs.recommended,
    {
        env: {
            browser: true,
            node: true,
            es2021: true
        },
        plugins: ["react"],
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            "no-unused-vars": "warn",  // Warns for unused variables
            "react/react-in-jsx-scope": "off",  // Disable React-in-JSX-scope for React 17+
        }
    }
];


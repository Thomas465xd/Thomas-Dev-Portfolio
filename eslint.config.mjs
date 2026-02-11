import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		ignores: [
			"node_modules/**",
			".next/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
		],
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off"
        }
	},
];

// export default eslintConfig;

// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "typescript-eslint";

// export default tseslint.config(
//     { ignores: ["dist"] },
//     {
//         extends: [js.configs.recommended, ...tseslint.configs.recommended],
//         files: ["**/*.{ts,tsx}"],
//         languageOptions: {
//             ecmaVersion: 2020,
//             globals: globals.browser,
//         },
//         plugins: {
//             "react-hooks": reactHooks,
//             "react-refresh": reactRefresh,
//         },
//         rules: {
//             ...reactHooks.configs.recommended.rules,
//             "react-refresh/only-export-components": [
//                 "warn",
//                 { allowConstantExport: true },
//             ],
//         },
//     }
// );

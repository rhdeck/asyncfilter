import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import json from "@rollup/plugin-json";
import pkg from "./package.json";
import autoExternal from "rollup-plugin-auto-external";
export default [
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],

    plugins: [
      autoExternal(),
      resolve(), // so Rollup can find `ms`
      json(),
      babel({
        runtimeHelpers: true,
        exclude: ["node_modules/**"]
      }),
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  }
];

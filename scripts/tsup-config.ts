import type { Options } from 'tsup';

const config: Options = {
	splitting: false,
	dts: true,
	minify: true,
	clean: true,
	entryPoints: ['src/index.ts'],
	outDir: 'lib',
	format: ['cjs', 'esm'],
	sourcemap: true,
};

export default config;

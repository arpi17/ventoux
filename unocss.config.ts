import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  // https://github.com/unocss/unocss#shortcuts
  shortcuts: {
    btn: 'py-2 px-4 border-none rounded-lg bg-green text-white hover:(bg-green-500 cursor-pointer) rounded-full text-sm font-medium',
  },
  presets: [
    presetUno(), // https://github.com/unocss/unocss/tree/main/packages/preset-uno#usages
    presetAttributify(), // https://github.com/unocss/unocss/tree/main/packages/preset-attributify#attributify-mode
  ],
  transformers: [
    transformerDirectives(), // https://github.com/unocss/unocss/tree/main/packages/transformer-directives#usage
    transformerVariantGroup(), // https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group#usage
  ],
});

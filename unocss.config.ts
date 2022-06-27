import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

// https://github.com/unocss/unocss#configurations
export default defineConfig({
  shortcuts: {
    btn: 'py-2 px-4 border-none rounded-lg bg-green text-white hover:(bg-green-500 cursor-pointer) rounded-full text-sm font-medium',
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});

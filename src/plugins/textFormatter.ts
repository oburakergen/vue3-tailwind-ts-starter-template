import type { App, DirectiveBinding } from 'vue';

// Plugin Options Type
interface FormatterOptions {
  uppercase?: (text: string) => string;
  lowercase?: (text: string) => string;
  capitalize?: (text: string) => string;
  [key: string]: ((text: string) => string) | undefined;
}

const defaultOptions: FormatterOptions = {
  uppercase: (text: string) => text.toUpperCase(),
  lowercase: (text: string) => text.toLowerCase(),
  capitalize: (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
};

export default {
  install(app: App, options?: FormatterOptions) {
    const formatter: FormatterOptions = { ...defaultOptions, ...options };

    app.directive('format-text', {
      mounted(el: HTMLElement, binding: DirectiveBinding) {
        const formatType = binding.arg || 'uppercase';
        const formatFunction = formatter[formatType];

        if (typeof formatFunction === 'function') {
          el.textContent = formatFunction(el.textContent || '');
        } else {
          console.warn(`Format type "${formatType}" is not defined.`);
        }
      },
    });
  },
};

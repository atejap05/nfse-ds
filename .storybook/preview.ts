import type { Preview } from '@storybook/react-vite';
import '../src/tokens/theme-fonts.css';
import '../src/tokens/theme.css';
import './preview.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    a11y: {
      test: 'todo',
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;

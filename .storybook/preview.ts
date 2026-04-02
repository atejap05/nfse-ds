import type { Preview } from '@storybook/react-vite';
import '../src/tokens/theme-fonts.css';
import '../src/tokens/theme.css';
import '../src/tokens/utilities.css';
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
    viewport: {
      viewports: {
        nfseMobile: {
          name: 'NFS-e mobile',
          styles: { width: '375px', height: '812px' },
        },
        nfseTablet: {
          name: 'NFS-e tablet (md)',
          styles: { width: '768px', height: '1024px' },
        },
      },
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: [
          'NFS-e',
          ['Introdução NFS-e', 'Design System Overview', 'Layouts', 'Recipes'],
        ],
      },
    },
  },
};

export default preview;

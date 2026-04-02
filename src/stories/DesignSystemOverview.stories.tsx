import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '../components/Alert/Alert';
import { Button } from '../components/Button/Button';
import { Container } from '../components/Container/Container';
import { Stack } from '../components/Stack/Stack';
import { TextField } from '../components/TextField/TextField';
import { Typography } from '../components/Typography/Typography';
import overviewStyles from './DesignSystemOverview.module.css';

const meta = {
  title: 'NFS-e/Design System Overview',
  parameters: {
    layout: 'fullscreen',
    docs: { page: null },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const swatches = [
  { name: 'Verde principal', token: '--nfse-color-primary', hex: '#0A7A3F' },
  { name: 'Amarelo', token: '--nfse-color-yellow', hex: '#FDB813' },
  { name: 'Azul marinho', token: '--nfse-color-navy', hex: '#1A3B7E' },
  { name: 'Cinza claro', token: '--nfse-color-gray-light', hex: '#E0E0E0' },
  { name: 'Texto', token: '--nfse-color-text', hex: '#333333' },
];

export const Overview: Story = {
  render: () => (
    <div className={overviewStyles.page}>
      <header className={overviewStyles.header}>
        <Container>
          <div className={overviewStyles.headerRow}>
            <img
              className={overviewStyles.logo}
              src="/logo-nfse-assinatura-horizontal.png"
              alt="NFSe — Nota Fiscal de Serviço eletrônica"
            />
            <nav className={overviewStyles.nav} aria-label="Seções da documentação">
              <span className={overviewStyles.navLink}>Componentes</span>
              <span className={overviewStyles.navLink}>Tipografia</span>
              <span className={overviewStyles.navLink}>Cores</span>
              <span className={overviewStyles.navLink}>Diretrizes</span>
            </nav>
          </div>
        </Container>
      </header>

      <section className={overviewStyles.hero} aria-labelledby="overview-title">
        <Container>
          <Stack gap="lg">
            <Typography variant="h1" id="overview-title">
              NFS-e Design System Overview
            </Typography>
            <Typography variant="body" className={overviewStyles.heroLead}>
              Guia de referência para interfaces do portal da Nota Fiscal de Serviço eletrônica: consistência
              visual, componentes reutilizáveis e base para acessibilidade (eMAG / WCAG 2.1).
            </Typography>
          </Stack>
        </Container>
      </section>

      <main className={overviewStyles.main}>
        <Container>
          <Stack gap="xl">
            <section aria-labelledby="cores-title">
              <Typography variant="h2" id="cores-title">
                Paleta de cores
              </Typography>
              <p className={overviewStyles.sectionIntro}>
                Cores primárias e neutros alinhados à identidade NFS-e. Use tokens CSS para manter contraste e
                consistência.
              </p>
              <div className={overviewStyles.swatches}>
                {swatches.map((s) => (
                  <figure key={s.hex} className={overviewStyles.swatchCard}>
                    <div
                      className={overviewStyles.swatch}
                      style={{ background: `var(${s.token})` }}
                      role="img"
                      aria-label={s.name}
                    />
                    <figcaption>
                      <strong>{s.name}</strong>
                      <span className={overviewStyles.swatchMeta}>{s.hex}</span>
                      <code className={overviewStyles.code}>{s.token}</code>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section aria-labelledby="tipo-title">
              <Typography variant="h2" id="tipo-title">
                Tipografia (Roboto)
              </Typography>
              <Stack gap="md">
                <Typography variant="h1">H1 — Roboto Bold (cor heading)</Typography>
                <Typography variant="h2">H2 — Roboto Medium (cor heading)</Typography>
                <Typography variant="h3">H3 — Roboto Regular 24px</Typography>
                <Typography variant="body">Corpo — Roboto Regular 16px</Typography>
                <Typography variant="caption">Legenda — Roboto Light 14px</Typography>
              </Stack>
            </section>

            <section aria-labelledby="ui-title">
              <Typography variant="h2" id="ui-title">
                Componentes de interface
              </Typography>
              <div className={overviewStyles.uiGrid}>
                <div>
                  <Typography variant="h3">Botões</Typography>
                  <div className={overviewStyles.btnRow}>
                    <Button variant="primary">Primário</Button>
                    <Button variant="secondary">Secundário</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>
                <div>
                  <Typography variant="h3">Campo de texto</Typography>
                  <TextField label="Exemplo" placeholder="Digite aqui" />
                </div>
                <div className={overviewStyles.alerts}>
                  <Alert variant="success" title="Sucesso">
                    Operação realizada com sucesso.
                  </Alert>
                  <Alert variant="warning" title="Atenção">
                    Revise os dados antes de continuar.
                  </Alert>
                  <Alert variant="error" title="Erro">
                    Não foi possível processar a solicitação.
                  </Alert>
                </div>
              </div>
            </section>
          </Stack>
        </Container>
      </main>

      <footer className={overviewStyles.footer}>
        <Container>
          <div className={overviewStyles.footerRow}>
            <Typography variant="caption">© {new Date().getFullYear()} NFS-e. Todos os direitos reservados.</Typography>
            <div className={overviewStyles.footerLinks}>
              <span>Política de privacidade</span>
              <span>Declaração de acessibilidade</span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  ),
};

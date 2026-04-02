import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupItem,
  SidebarGroupTrigger,
  SidebarItem,
  SidebarItemIcon,
  SidebarNav,
} from './Sidebar';

describe('Sidebar', () => {
  it('permite ícone decorativo com SidebarItemIcon', () => {
    render(
      <Sidebar defaultSelectedValue="a">
        <SidebarNav aria-label="Teste">
          <SidebarItem value="a">
            <SidebarItemIcon>
              <svg aria-hidden>
                <circle cx="8" cy="8" r="6" />
              </svg>
            </SidebarItemIcon>
            Rótulo
          </SidebarItem>
        </SidebarNav>
      </Sidebar>,
    );

    expect(screen.getByRole('button', { name: /Rótulo/i })).toBeInTheDocument();
  });

  it('seleciona item e chama onItemSelect', () => {
    const onItemSelect = vi.fn();
    render(
      <Sidebar defaultSelectedValue="a" onItemSelect={onItemSelect}>
        <SidebarNav aria-label="Teste">
          <SidebarItem value="a">A</SidebarItem>
          <SidebarItem value="b">B</SidebarItem>
        </SidebarNav>
      </Sidebar>,
    );

    const b = screen.getByRole('button', { name: 'B' });
    expect(screen.getByRole('button', { name: 'A' })).toHaveAttribute('aria-current', 'page');

    fireEvent.click(b);
    expect(onItemSelect).toHaveBeenCalledWith({ value: 'b', categoryValue: undefined });
    expect(b).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: 'A' })).not.toHaveAttribute('aria-current');
  });

  it('propaga categoryValue em item dentro de grupo', () => {
    const onItemSelect = vi.fn();
    render(
      <Sidebar defaultOpenCategories={['cat1']} onItemSelect={onItemSelect}>
        <SidebarNav aria-label="Teste">
          <SidebarGroup value="cat1">
            <SidebarGroupTrigger>Cat</SidebarGroupTrigger>
            <SidebarGroupContent>
              <SidebarGroupItem>
                <SidebarItem value="x">X</SidebarItem>
              </SidebarGroupItem>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarNav>
      </Sidebar>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'X' }));
    expect(onItemSelect).toHaveBeenCalledWith({ value: 'x', categoryValue: 'cat1' });
  });

  it('trigger de grupo tem aria-expanded e alterna ao clicar', () => {
    render(
      <Sidebar defaultOpenCategories={[]}>
        <SidebarNav aria-label="Teste">
          <SidebarGroup value="g">
            <SidebarGroupTrigger>Grupo</SidebarGroupTrigger>
            <SidebarGroupContent>
              <SidebarGroupItem>
                <SidebarItem value="i">Item</SidebarItem>
              </SidebarGroupItem>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarNav>
      </Sidebar>,
    );

    const trigger = screen.getByRole('button', { name: /Grupo/i });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('com multiple=false abrir uma categoria fecha a outra', () => {
    render(
      <Sidebar multiple={false} defaultOpenCategories={['a']}>
        <SidebarNav aria-label="Teste">
          <SidebarGroup value="a">
            <SidebarGroupTrigger>A</SidebarGroupTrigger>
            <SidebarGroupContent>
              <SidebarGroupItem>
                <SidebarItem value="a1">A1</SidebarItem>
              </SidebarGroupItem>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup value="b">
            <SidebarGroupTrigger>B</SidebarGroupTrigger>
            <SidebarGroupContent>
              <SidebarGroupItem>
                <SidebarItem value="b1">B1</SidebarItem>
              </SidebarGroupItem>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarNav>
      </Sidebar>,
    );

    const triggerA = screen.getByRole('button', { name: 'A' });
    const triggerB = screen.getByRole('button', { name: 'B' });
    expect(triggerA).toHaveAttribute('aria-expanded', 'true');
    expect(triggerB).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(triggerB);
    expect(triggerA).toHaveAttribute('aria-expanded', 'false');
    expect(triggerB).toHaveAttribute('aria-expanded', 'true');
  });
});

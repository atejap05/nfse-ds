import {
  createContext,
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type HTMLAttributes,
  type LiHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type Ref,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { cn } from '../../utils/cn';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible/Collapsible';
import styles from './Sidebar.module.css';

export type SidebarDensityName = 'default' | 'compact';

export interface SidebarItemSelectData {
  value: string;
  /** Presente quando o item pertence a uma `SidebarGroup`. */
  categoryValue?: string;
}

export interface SidebarCategoryToggleData {
  categoryValue: string;
  open: boolean;
}

interface SidebarContextValue {
  density: SidebarDensityName;
  selectedValue: string;
  selectedCategoryValue?: string;
  selectItem: (data: SidebarItemSelectData) => void;
  openCategories: string[];
  setCategoryOpen: (categoryValue: string, open: boolean) => void;
  multiple: boolean;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

function useSidebarContext(component: string): SidebarContextValue {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error(`${component} must be used within Sidebar`);
  }
  return ctx;
}

interface SidebarGroupContextValue {
  categoryValue: string;
}

const SidebarGroupContext = createContext<SidebarGroupContextValue | null>(null);

export interface SidebarProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  children: ReactNode;
  /** Raiz semântica; `aside` é o padrão para navegação lateral. */
  as?: ElementType;
  /** Espaçamento vertical dos itens (Fluent: small/medium). */
  density?: SidebarDensityName;
  /** Valor do item selecionado (modo controlado). */
  selectedValue?: string;
  /** Valor inicial do item selecionado (modo não controlado). */
  defaultSelectedValue?: string;
  /** Categoria com filho selecionado (ex.: grupo fechado com item ativo). */
  selectedCategoryValue?: string;
  /** IDs de categorias abertas (modo controlado). */
  openCategories?: string[];
  /** Categorias abertas por defeito (modo não controlado). */
  defaultOpenCategories?: string[];
  /** Várias categorias abertas em simultâneo (acordeão quando `false`). */
  multiple?: boolean;
  /** Chamado quando um item é escolhido. */
  onItemSelect?: (data: SidebarItemSelectData) => void;
  /** Chamado quando o conjunto de categorias abertas muda (modo controlado). */
  onOpenCategoriesChange?: (categories: string[]) => void;
  /** Chamado ao expandir/colapsar uma categoria. */
  onCategoryToggle?: (data: SidebarCategoryToggleData) => void;
}

export function Sidebar({
  as: Root = 'aside',
  className,
  children,
  density = 'default',
  selectedValue: selectedValueProp,
  defaultSelectedValue = '',
  selectedCategoryValue,
  openCategories: openCategoriesProp,
  defaultOpenCategories,
  multiple = true,
  onItemSelect,
  onOpenCategoriesChange,
  onCategoryToggle,
  ...props
}: SidebarProps) {
  const [internalSelected, setInternalSelected] = useState(defaultSelectedValue);
  const selectedValue =
    selectedValueProp !== undefined ? selectedValueProp : internalSelected;

  const [internalOpen, setInternalOpen] = useState<string[]>(() => defaultOpenCategories ?? []);
  const openCategories = openCategoriesProp !== undefined ? openCategoriesProp : internalOpen;

  const setOpenCategories = useCallback(
    (next: string[]) => {
      if (openCategoriesProp === undefined) {
        setInternalOpen(next);
      }
      onOpenCategoriesChange?.(next);
    },
    [openCategoriesProp, onOpenCategoriesChange],
  );

  const setCategoryOpen = useCallback(
    (categoryValue: string, open: boolean) => {
      let next: string[];
      if (multiple) {
        if (open) {
          next = [...openCategories.filter((v) => v !== categoryValue), categoryValue];
        } else {
          next = openCategories.filter((v) => v !== categoryValue);
        }
      } else {
        next = open ? [categoryValue] : [];
      }
      setOpenCategories(next);
      onCategoryToggle?.({ categoryValue, open });
    },
    [multiple, openCategories, setOpenCategories, onCategoryToggle],
  );

  const selectItem = useCallback(
    (data: SidebarItemSelectData) => {
      if (selectedValueProp === undefined) {
        setInternalSelected(data.value);
      }
      onItemSelect?.(data);
    },
    [selectedValueProp, onItemSelect],
  );

  const ctx = useMemo<SidebarContextValue>(
    () => ({
      density,
      selectedValue,
      selectedCategoryValue,
      selectItem,
      openCategories,
      setCategoryOpen,
      multiple,
    }),
    [
      density,
      selectedValue,
      selectedCategoryValue,
      selectItem,
      openCategories,
      setCategoryOpen,
      multiple,
    ],
  );

  return (
    <SidebarContext.Provider value={ctx}>
      <Root
        className={cn(
          styles.root,
          density === 'default' && styles.defaultDensity,
          density === 'compact' && styles.compactDensity,
          className,
        )}
        {...props}
      >
        {children}
      </Root>
    </SidebarContext.Provider>
  );
}

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function SidebarHeader({ className, children, ...props }: SidebarHeaderProps) {
  return (
    <div className={cn(styles.header, className)} {...props}>
      {children}
    </div>
  );
}

export interface SidebarNavProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function SidebarNav({
  className,
  children,
  'aria-label': ariaLabel = 'Navegação secundária',
  ...props
}: SidebarNavProps) {
  return (
    <nav className={cn(styles.nav, className)} aria-label={ariaLabel} {...props}>
      <div className={styles.navInner}>{children}</div>
    </nav>
  );
}

export interface SidebarItemIconProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

/**
 * Envolve ícones decorativos junto ao texto em `SidebarItem`, `SidebarGroupTrigger` ou `SidebarHeader`.
 * Com bibliotecas como `lucide-react`, passe o componente de ícone como filho; marque SVG só decorativos com `aria-hidden`.
 */
export function SidebarItemIcon({ className, children, ...props }: SidebarItemIconProps) {
  return (
    <span className={cn(styles.itemIcon, className)} {...props}>
      {children}
    </span>
  );
}

export interface SidebarGroupProps {
  /** Identificador estável da categoria (abertura e `categoryValue` nos eventos). */
  value: string;
  children: ReactNode;
}

export function SidebarGroup({ value: categoryValue, children }: SidebarGroupProps) {
  const { openCategories, setCategoryOpen } = useSidebarContext('SidebarGroup');

  const open = openCategories.includes(categoryValue);

  const groupCtx = useMemo(
    () => ({ categoryValue }),
    [categoryValue],
  );

  return (
    <SidebarGroupContext.Provider value={groupCtx}>
      <Collapsible
        className={styles.group}
        open={open}
        onOpenChange={(next) => setCategoryOpen(categoryValue, next)}
      >
        {children}
      </Collapsible>
    </SidebarGroupContext.Provider>
  );
}

export type SidebarGroupTriggerProps = ComponentPropsWithoutRef<typeof CollapsibleTrigger>;

export function SidebarGroupTrigger({ className, children, ...props }: SidebarGroupTriggerProps) {
  const { selectedCategoryValue } = useSidebarContext('SidebarGroupTrigger');
  const group = useContext(SidebarGroupContext);
  if (!group) {
    throw new Error('SidebarGroupTrigger must be used within SidebarGroup');
  }
  const categorySelected = selectedCategoryValue === group.categoryValue;

  return (
    <CollapsibleTrigger
      type="button"
      className={cn(
        styles.groupTrigger,
        categorySelected && styles.itemCategorySelected,
        className,
      )}
      {...props}
    >
      <span className={styles.groupTriggerLabel}>{children}</span>
      <SidebarGroupChevron />
    </CollapsibleTrigger>
  );
}

function SidebarGroupChevron() {
  return <span className={styles.groupChevron} aria-hidden />;
}

export type SidebarGroupContentProps = ComponentPropsWithoutRef<typeof CollapsibleContent>;

export function SidebarGroupContent({ className, children, ...props }: SidebarGroupContentProps) {
  return (
    <CollapsibleContent className={cn(styles.groupContent, className)} {...props}>
      <ul className={styles.groupList}>{children}</ul>
    </CollapsibleContent>
  );
}

export interface SidebarGroupItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

/** Envolve `SidebarItem` dentro de `SidebarGroupContent` para lista semântica válida (`ul` > `li`). */
export function SidebarGroupItem({ className, children, ...props }: SidebarGroupItemProps) {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
}

export interface SidebarItemBaseProps {
  /** Identificador do item (seleção e eventos). */
  value: string;
  children: ReactNode;
}

export type SidebarItemProps = SidebarItemBaseProps &
  (
    | ({ href: string } & Omit<ComponentPropsWithoutRef<'a'>, 'children'>)
    | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'type'>)
  );

export const SidebarItem = forwardRef<HTMLAnchorElement | HTMLButtonElement, SidebarItemProps>(
  function SidebarItem({ className, value, children, href, onClick, ...props }, ref) {
    const { selectedValue, selectItem } = useSidebarContext('SidebarItem');
    const group = useContext(SidebarGroupContext);
    const selected = selectedValue === value;

    const handleClick = (e: MouseEvent<HTMLAnchorElement & HTMLButtonElement>) => {
      onClick?.(e as MouseEvent<HTMLAnchorElement> & MouseEvent<HTMLButtonElement>);
      if (e.defaultPrevented) return;
      selectItem({
        value,
        categoryValue: group?.categoryValue,
      });
    };

    const itemClass = cn(styles.item, selected && styles.itemSelected, className);

    if (href !== undefined) {
      const anchorProps = props as Omit<ComponentPropsWithoutRef<'a'>, 'children'>;
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={itemClass}
          aria-current={selected ? 'page' : undefined}
          onClick={handleClick}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    const buttonProps = props as Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'type'>;
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type="button"
        className={itemClass}
        aria-current={selected ? 'page' : undefined}
        onClick={handleClick}
        {...buttonProps}
      >
        {children}
      </button>
    );
  },
);

SidebarItem.displayName = 'SidebarItem';

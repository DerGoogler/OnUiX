import { ActivityX } from './extend/ActivityX';
import { ViewX } from './extend/ViewX';
import { XInit } from './extend/XInit';
import { UiXTheme } from './theme/UiXTheme';
import { findViewById } from './utils/findViewById';
import { ContentXView } from './View/ContentXView';
import { GestureX } from './View/GestureX';
import { ListViewX } from './View/ListViewX';

export type HTMLAttributes<E, P = {}> = React.DetailedHTMLProps<
  React.HTMLAttributes<E> & P,
  E
>;
export type AnchorHTMLAttributes<E, P = {}> = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<E> & P,
  E
>;

export {
  XInit,
  ActivityX,
  ViewX,
  UiXTheme,
  findViewById,
  ListViewX,
  ContentXView,
  GestureX,
};

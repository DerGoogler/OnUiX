import React, { Component, ReactNode } from 'react';
import { findViewById } from '../utils/findViewById';

/**
 * ViewX includes all HTML props, no need to add it extra
 */
export class ViewX<Props = {}, State = {}, SS = any> extends Component<
  HTMLAttributes<Element> & Props,
  State,
  SS
> {
  public constructor(
    props:
      | (HTMLAttributes<Element> & Props)
      | Readonly<HTMLAttributes<Element> & Props>
  ) {
    super(props);
  }

  /**
   * @wrapper Uses findViewById core
   *
   * @param id Given element or ref
   * @param callback HTMLElement or React.RefObject
   *
   * @description
   * Usage
   * ```ts
   * // Id's
   * this.findViewById("element", (element: HTMLElement) => { element.style.display = "none" })
   *
   * // Refs
   * this.findViewById(this.myRef, (ref: HTMLElement) => { ref.style.display = "none" })
   * ```
   */
  public findViewById<Object = any>(
    id: string | React.RefObject<Object>,
    callback?: (...props: any) => void
  ): Object | Element | null | undefined {
    if (typeof callback === 'function') {
      new findViewById<Object>(id, callback);
      return null;
    } else {
      return new findViewById<Object>(id, callback).get;
    }
  }

  public createView = (): JSX.Element => {
    return <></>;
  };

  /**
   * @deprecated
   */
  public render(): ReactNode {
    return <this.createView />;
  }
}

import React, { createRef, RefObject, ReactNode } from 'react';
import { ViewX } from '../extend/ViewX';

interface Props {
  event:
    | 'drag'
    | 'dragleft'
    | 'dragright'
    | 'dragup'
    | 'dragdown'
    | 'hold'
    | 'release'
    | 'swipe'
    | 'swipeleft'
    | 'swiperight'
    | 'swipeup'
    | 'swipedown'
    | 'tap'
    | 'doubletap'
    | 'touch'
    | 'transform'
    | 'pinch'
    | 'pinchin'
    | 'pinchout'
    | 'rotate';
  callback(...props: any): void;
  children: ReactNode;
}

export class GestureX extends ViewX<Props, {}> {
  private gerstureID: RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.gerstureID = createRef();
  }
  public componentDidMount = () => {
    const { callback, event } = this.props;

    // Find element
    this.findViewById<HTMLDivElement>(this.gerstureID)?.addEventListener(
      event,
      callback
    );
  };

  public createView = () => {
    const { children } = this.props;
    return <div ref={this.gerstureID}>{children}</div>;
  };
}

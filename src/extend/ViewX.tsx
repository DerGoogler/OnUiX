import React, { Component, Fragment, ReactNode } from 'react';

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

  public render(): ReactNode {
    return <Fragment key={this.props.id}>{this.props.children}</Fragment>;
  }
}

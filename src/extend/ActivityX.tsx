import React, { Component, ReactNode } from 'react';
import { Page } from 'react-onsenui';
import { ContentXView } from '../View/ContentXView';

export class ActivityX<Props = {}, State = {}, SS = any> extends Component<
  Props,
  State,
  SS
> {
  public constructor(props: Props | Readonly<Props>) {
    super(props);
  }

  public componentDidMount(): void {}

  public componentDidUpdate(): void {}

  public componentWillUnmount(): void {}

  /**
   * Creates the activity
   */
  protected onCreate(): JSX.Element {
    return <></>;
  }

  /**
   * Renders the Toolbar
   */
  protected onCreateToolbar(): JSX.Element {
    return <></>;
  }

  protected onCreateModal(): JSX.Element {
    return <></>;
  }

  protected onCreateBottomToolbar(): JSX.Element {
    return <></>;
  }

  protected onCreateFAB(): JSX.Element {
    return <></>;
  }

  protected onInit(): void {}

  protected onShow(): void {}

  protected onHide(): void {}

  protected onInfiniteScroll(): void {}

  //@ts-ignore
  protected get pageModifier(): string {
    return '';
  }

  /**
   * Don't use render in a ActivityX component
   * @deprecated
   */
  public render(): ReactNode {
    return (
      <Page
        modifier={this.pageModifier}
        renderBottomToolbar={this.onCreateBottomToolbar}
        renderFixed={this.onCreateFAB}
        renderModal={this.onCreateModal}
        onInfiniteScroll={this.onInfiniteScroll}
        onHide={this.onHide}
        onShow={this.onShow}
        onInit={this.onInit}
        renderToolbar={this.onCreateToolbar}
      >
        <ContentXView>
          <this.onCreate />
        </ContentXView>
      </Page>
    );
  }
}
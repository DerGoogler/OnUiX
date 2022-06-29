import React, { ReactNode } from 'react';
import { Page } from 'react-onsenui';
import { ContentXView } from '../View/ContentXView';
import { ViewX } from './ViewX';

export class ActivityX<Props = {}, State = {}, SS = any> extends ViewX<
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
  public onCreate(): JSX.Element {
    return <></>;
  }

  /**
   * Renders the Toolbar
   */
  public onCreateToolbar(): JSX.Element {
    return <></>;
  }

  public onCreateModal(): JSX.Element {
    return <></>;
  }

  public onCreateBottomToolbar(): JSX.Element {
    return <></>;
  }

  public onCreateFAB(): JSX.Element {
    return <></>;
  }

  public onInit(): void {}

  public onShow(): void {}

  public onHide(): void {}

  public onInfiniteScroll(): void {}

  //@ts-ignore
  public get pageModifier(): string {
    return '';
  }

  /**
   * Don't use render in a ActivityX component
   * @deprecated
   */
  public render = (): ReactNode => {
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
  };
}

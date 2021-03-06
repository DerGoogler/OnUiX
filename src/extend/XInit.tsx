import jss, { Styles } from 'jss';
import preset from 'jss-preset-default';
import React from 'react';
import { Component, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { Page, RouterNavigator, RouterUtil } from 'react-onsenui';
import { ContentXView } from '../View/ContentXView';

export interface IIntentXPushProps {
  activity: any;
  key?: any;
  extra?: any;
}

export type ThemeType<Name extends string = string> = {
  [P in keyof Styles<Name, any, undefined>]?:
    | Styles<Name, any, undefined>[P]
    | undefined;
};

export interface XInitProps {
  component: ReactNode;
  theme: ThemeType<'@global'>;
}

interface States {
  currentPage: string;
  routeConfig: any;
}

/**
 * Initializes the component for OnUiX DOM
 */
export class XInit extends Component<XInitProps, States> {
  public constructor(props: XInitProps | Readonly<XInitProps>) {
    super(props);

    const routeConfig = RouterUtil.init([
      {
        component: this.props.component,
        props: {
          key: 'main',
          pushPage: (props: IIntentXPushProps) => this.pushPage(props),
        },
      },
    ]);

    this.state = { routeConfig, currentPage: 'main' };
  }

  public componentDidMount = () => {
    jss.setup(preset());
    jss.createStyleSheet<'@global'>(this.props.theme).attach();
  };

  private pushPage = (props: IIntentXPushProps): void & IIntentXPushProps => {
    const route = {
      component: props.activity,
      props: {
        key: props.key,
        extra: props?.extra,
        popPage: () => this.popPage(),
        pushPage: (props: IIntentXPushProps) => this.pushPage(props),
      },
    };

    let routeConfig = this.state.routeConfig;

    routeConfig = RouterUtil.push({
      routeConfig,
      route,
    });

    this.setState({ routeConfig, currentPage: props.key });
  };

  private popPage = (options = {}) => {
    let routeConfig = this.state.routeConfig;

    routeConfig = RouterUtil.pop({
      routeConfig,
      options: {
        ...options,
        animationOptions: {
          duration: 0.2,
          timing: 'ease-in',
          animation: 'fade-md',
        },
      },
    });

    this.setState({ routeConfig, currentPage: 'main' });
  };

  private onPostPush = () => {
    const routeConfig = RouterUtil.postPush(this.state.routeConfig);
    this.setState({ routeConfig });
  };

  private onPostPop = () => {
    const routeConfig = RouterUtil.postPop(this.state.routeConfig);
    this.setState({ routeConfig });
  };

  private loadPage = (route: any): JSX.Element => {
    const props = route.props || {};
    return <route.component {...props} />;
  };

  public render = () => {
    return (
      <>
        <Page>
          <RouterNavigator
            swipeable={true}
            // @ts-ignore
            swipePop={(options: any) => this.popPage(options)}
            routeConfig={this.state.routeConfig}
            renderPage={this.loadPage}
            onPostPush={() => this.onPostPush()}
            onPostPop={() => this.onPostPop()}
          />
        </Page>
      </>
    );
  };

  /**
   * Creates an React DOM
   *
   * @usage
   * ```tsx
   * XInit.render<HTMLElement>(App, UiXTheme())
   * ```
   */
  public static render<E extends Element = Element>(
    component: ReactNode,
    theme: ThemeType
  ) {
    // Setup root node where our React app will be attached to
    // @ts-ignore
    const app = document.createElement(component?.name);
    document.body.prepend(app);

    // Render the app component
    // @ts-ignore
    const container = document.querySelector<E>(component?.name);
    const root = createRoot(container!);
    root.render(<XInit component={component} theme={theme} />);
  }
}

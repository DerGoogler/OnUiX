import { ThemeType } from '../extend/XInit';
import dark_theme from './dark_theme';
import light_theme from './light_theme';

/**
 * Uses the defaut OnUiX theme
 * @param themeMode light or dark
 * @returns {ThemeType} ThemeType
 * @default light
 */
export class UiXTheme {
  private themeMode: string | undefined;
  public constructor(themeMode?: 'light' | 'dark') {
    this.themeMode = themeMode;
  }

  /**
   * Applies the theme to the current UiX
   */
  //@ts-ignore
  public get apply(): ThemeType {
    switch (this.themeMode) {
      case 'light':
        return light_theme;
      case 'dark':
        return dark_theme;
      default:
        return light_theme;
    }
  }

  //@ts-ignore
  public get dark(): ThemeType {
    return dark_theme;
  }

  //@ts-ignore
  public get light(): ThemeType {
    return light_theme;
  }
}

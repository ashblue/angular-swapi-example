import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTextByTestId(id: string): Promise<string> {
    return element(by.css(`[data-testid="${id}"]`)).getText() as Promise<string>;
  }
}

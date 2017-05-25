import { TestNG2Page } from './app.po';

describe('test-ng2 App', () => {
  let page: TestNG2Page;

  beforeEach(() => {
    page = new TestNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

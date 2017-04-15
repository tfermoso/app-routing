import { AppRoutingPage } from './app.po';

describe('app-routing App', () => {
  let page: AppRoutingPage;

  beforeEach(() => {
    page = new AppRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

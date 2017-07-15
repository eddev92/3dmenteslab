import { ThreeDmentesAppPage } from './app.po';

describe('three-dmentes-app App', () => {
  let page: ThreeDmentesAppPage;

  beforeEach(() => {
    page = new ThreeDmentesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

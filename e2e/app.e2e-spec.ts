import { DeleteMeAppPage } from './app.po';

describe('delete-me-app App', () => {
  let page: DeleteMeAppPage;

  beforeEach(() => {
    page = new DeleteMeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

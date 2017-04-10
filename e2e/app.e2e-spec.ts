import { TutoUdemyPage } from './app.po';

describe('tuto-udemy App', () => {
  let page: TutoUdemyPage;

  beforeEach(() => {
    page = new TutoUdemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

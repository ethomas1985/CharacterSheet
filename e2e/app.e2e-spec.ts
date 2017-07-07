import { CharacterSheetPage } from './app.po';

describe('character-sheet App', () => {
  let page: CharacterSheetPage;

  beforeEach(() => {
    page = new CharacterSheetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

const Card = require('../src/models/Card');
const CardCollection = require('../src/models/CardCollection');
const ThemeContext = require('../src/models/ThemeContext');

describe('Models', () => {
  it('should create a Card object', () => {
    const card = new Card('1', 'Title', 'Description', 'Icon', 'Category');
    expect(card.id).toBe('1');
    expect(card.title).toBe('Title');
    expect(card.description).toBe('Description');
    expect(card.icon).toBe('Icon');
    expect(card.category).toBe('Category');
  });

  it('should create a CardCollection object', () => {
    const card = new Card('1', 'Title', 'Description', 'Icon', 'Category');
    const collection = new CardCollection('1', 'Collection Name', [card]);
    expect(collection.id).toBe('1');
    expect(collection.name).toBe('Collection Name');
    expect(collection.cards).toEqual([card]);
  });

  it('should create a ThemeContext object', () => {
    const themeContext = new ThemeContext('Theme', 'Context');
    expect(themeContext.theme).toBe('Theme');
    expect(themeContext.context).toBe('Context');
  });
});

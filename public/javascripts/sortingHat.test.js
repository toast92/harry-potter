import handleSorting from '../javascripts/sortingHat.js';




const myMockElement = {
    addEventListener: jest.fn(),
};

test('sorts on click', () => {
    const fetch = jest.fn(() => Promise.resolve());

    handleSorting(myMockElement);

    expect(myMockElement.addEventListener.mock.calls.length).toBe(1);
});

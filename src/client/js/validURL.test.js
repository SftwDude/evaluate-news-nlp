import {validURL}  from './validURL';

test('test http://example.com as valid URL',() => {
    expect(validURL('http://example.com')).toBe(true);
})
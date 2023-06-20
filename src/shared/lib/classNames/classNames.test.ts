import { classNames } from '@/shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1n', 'class2n'])).toBe(
            'someClass class1n class2n',
        );
    });

    test('with mods', () => {
        expect(
            classNames('someClass', { hovered: true, active: false }, [
                'class1n',
                'class2n',
            ]),
        ).toBe('someClass class1n class2n hovered');
    });
});

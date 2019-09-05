import routes from '@/app/routes';

describe('routes.js', () => {
  it('Verify routes', () => {
    expect(routes.length).toBe(1);
    expect(routes[0].path).toBe('/');
    expect(routes[0].component()).toBeTruthy();
    expect(routes[0].children.length).toBe(2);
  });
});

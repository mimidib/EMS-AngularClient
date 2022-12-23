import { compute } from './compute';

fdescribe('compute test', () => {
  it('should return 0 if we pass 0', () => {
    var result = compute(0);
    expect(result).toBe(0);
  });

  it('should return 0 if we pass -ve', () => {
    var result = compute(-4);
    expect(result).toBe(0);
  });
});

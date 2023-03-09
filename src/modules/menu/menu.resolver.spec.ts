import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeResolver } from './menu.resolver';

describe('CoffeeResolver', () => {
  let resolver: CoffeeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeResolver],
    }).compile();

    resolver = module.get<CoffeeResolver>(CoffeeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

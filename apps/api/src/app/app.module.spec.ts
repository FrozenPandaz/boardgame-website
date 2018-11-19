import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as supertest from 'supertest';
import { SuperTest } from 'supertest';

import { AppModule } from './app.module';
import { BoardgameService } from 'libs/boardgame/data-access/src/lib/boardgame.service';

describe('Api Application', () => {
  let app: INestApplication;
  let test: SuperTest<supertest.Test>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = module.createNestApplication();

    const boardgameService = module.get(BoardgameService);
    jest.spyOn(boardgameService, 'getBoardgameById').mockReturnValue({
      id: 1,
      name: 'Boardgame'
    });
    await app.init();
    test = supertest(app.getHttpServer);
  });
  describe('GET /api/boardgame/:id', () => {
    it('should return a boardgame by id', () => {
      test
        .get('/api/boardgame/1')
        .expect(200)
        .expect({
          id: 1,
          name: 'Boardgame'
        });
    });
  });
});

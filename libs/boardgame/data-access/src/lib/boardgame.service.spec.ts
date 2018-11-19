jest.mock('@boardgame-website/fetch-xml');

import { Test } from '@nestjs/testing';
import { fetchXML } from '@boardgame-website/fetch-xml';

import { BoardgameService } from './boardgame.service';

describe('getBoardgameById', () => {
  let service: BoardgameService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BoardgameService]
    }).compile();

    service = module.get(BoardgameService);

    fetchXML.mockReturnValue(
      Promise.resolve({
        boardgames: {
          boardgame: {
            name: 'boardgame'
          }
        }
      })
    );
  });

  describe('.getBoardgameById', () => {
    it('should fetch boardgame with given id', async () => {
      await service.getBoardgameById(2);
      expect(fetchXML).toHaveBeenCalledWith(
        'https://www.boardgamegeek.com/xmlapi/boardgame/2'
      );
    });
  });
});

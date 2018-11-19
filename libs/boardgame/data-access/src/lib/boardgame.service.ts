import { fetchXML } from '@boardgame-website/fetch-xml';

import { Boardgame } from '@boardgame-website/boardgame/contract';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardgameService {
  async getBoardgameById(id: number): Promise<Boardgame> {
    const url = 'https://www.boardgamegeek.com/xmlapi/boardgame/' + id;
    const { boardgames } = await fetchXML<{
      boardgames: { boardgame: Boardgame };
    }>(url);

    return this.normalizeBoardgame(boardgames.boardgame);
  }

  private normalizeBoardgame(boardgame: any): Boardgame {
    return {
      ...boardgame,
      minplayers: +boardgame.minplayers,
      maxplayers: +boardgame.maxplayers
    };
  }
}

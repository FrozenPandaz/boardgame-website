import { Controller, Get, Param } from '@nestjs/common';

import { BOARDGAME_BY_ID_ENDPOINT } from '@boardgame-website/boardgame/contract';

import { BoardgameService } from './boardgame.service';

@Controller()
export class BoardgameController {
  constructor(private boardgameService: BoardgameService) {}

  @Get(BOARDGAME_BY_ID_ENDPOINT)
  getById(@Param('id') id: string) {
    return this.boardgameService.getBoardgameById(+id);
  }
}

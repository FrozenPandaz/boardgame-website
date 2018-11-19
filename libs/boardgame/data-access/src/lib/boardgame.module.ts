import { Module } from '@nestjs/common';

import { BoardgameService } from './boardgame.service';
import { BoardgameController } from './boardgame.controller';

@Module({
  controllers: [BoardgameController],
  providers: [BoardgameService]
})
export class BoardgameModule {}

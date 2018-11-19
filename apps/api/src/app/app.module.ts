import { Module } from '@nestjs/common';
import { BoardgameModule } from '@boardgame-website/boardgame/data-access';

@Module({
  imports: [BoardgameModule]
})
export class AppModule {}

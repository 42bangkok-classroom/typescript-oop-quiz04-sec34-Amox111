import { Module } from '@nestjs/common';
import { MissionModule } from './mission/mission.module';
import { MissionService } from './mission/mission.service';
import { MissionController } from './mission/mission.controller';

@Module({
  imports: [MissionModule],
  controllers: [MissionController],
  providers: [MissionService],
})
export class AppModule {}

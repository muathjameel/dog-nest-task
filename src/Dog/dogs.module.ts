import { Module } from '@nestjs/common'
import { DogsController } from './dogs.controller'
import { DogService } from './dogs.services'

@Module({
    controllers: [DogsController],
    providers: [DogService],
    exports: [DogService],
    
})
export class DogsModule {}
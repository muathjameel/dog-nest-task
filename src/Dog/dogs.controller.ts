import {Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common'
import { Dog } from './dog.interface'
import { DogService } from './dogs.services'



@Controller('dogs')
export class DogsController{
    static globalId:number =  0;
    constructor(private dogService: DogService){}
    
    @Get()
    async findAll():Promise<Dog[]>{
        return this.dogService.findAll();
    }
    @Get(':id')
    async findOne(@Param() params){
        
        return this.dogService.findOne(params.id);
        
    }
    @Post()
    async create(dog:Dog){ 
        this.dogService.create(dog);
    }
    @Put(':id')
    update(@Param() params):string{
        console.log(params.id);
        
        return 'update dog'+params.id
    }
    @Delete(':id')
     async delete(@Param() params){ 
        this.dogService.delete(params.id);
    }

    
}
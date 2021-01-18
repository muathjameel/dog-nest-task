import { Injectable } from '@nestjs/common'
import { Dog } from './dog.interface'


@Injectable()
export class DogService{
    private readonly dogs : Dog[]=[];

    create(dog:Dog){
        this.dogs.push(dog);
    }

    findAll(): Dog[] {
        return this.dogs;
    }
    findOne(id:number){
        this.dogs.forEach(dog => {
            if(dog.id == id)
                return dog;
        });
    }

    delete(id:number){
        this.dogs.filter((dog) => dog.id == id);
    }
}
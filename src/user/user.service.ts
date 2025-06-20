import {Injectable} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    get (): Promise<User[]> {
        return this.userRepository.find();
    }

    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto);
    }

    update(updateUserDto: UpdateUserDto, userId: number ) {
        return this.userRepository.update(userId, updateUserDto);
    }

    show(userId: number) {
        return this.userRepository.findOne({ where : {id: userId }});
    } 

    findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }

    delete(userId: number) {
        return this.userRepository.delete(userId);
    }
}
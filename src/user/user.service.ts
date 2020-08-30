import { Injectable } from '@nestjs/common';
import { User } from './user.entity' 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async findAll (): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne (id: number): Promise<User> {
    return await this.userRepo.findOne(id)
  }


  async create (user: User): Promise<User> {
    return await this.userRepo.save(user)
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.userRepo.update(user.id, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepo.delete(id);
  }
}
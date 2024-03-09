import { Injectable } from '@nestjs/common';
import { User } from 'src/model/user.entity';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Jhon',
      role: 'Inter',
    },
    {
      id: 2,
      name: 'Peter',
      role: 'Inter',
    },
    {
      id: 3,
      name: 'Due thapa',
      role: 'Engineer',
    },
    {
      id: 4,
      name: 'Trpt',
      role: 'Doctor',
    },
  ];

  findAll() {
    let output = {
      success: false,
      message: '',
      data: [] as unknown as User,
    };
    try {
      if (this.users) {
        output = {
          success: true,
          message: 'Data found successfully',
          data: this.users as unknown as User,
        };
      }
      return output;
    } catch (error) {
      output = {
        success: false,
        message: `${error.message}`,
        data: [] as unknown as User,
      };
    }
  }

  findOne(id: number) {
    let output = {
      success: false,
      message: '',
      data: null as unknown as User,
    };
    try {
      const user = this.users.find((i) => i.id === id);
      if (user) {
        output = {
          success: true,
          message: 'Specific data found successfully',
          data: user as unknown as User,
        };
      } else {
        output = {
          success: true,
          message: 'Data not found',
          data: null as unknown as User,
        };
      }
      return output;
    } catch (error) {
      output = {
        success: false,
        message: `${error.message}`,
        data: null as unknown as User,
      };
      return output;
    }
  }

  create(user: any) {
    if (user) {
      const highestId = [...this.users].sort((a, b) => b.id - a.id);
      const newUser = {
        id: highestId[0].id + 1,
        ...user,
      };
      this.users.push(newUser);
      return newUser;
    }
  }
}

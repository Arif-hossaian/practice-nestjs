/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
//import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { User } from 'src/model/user.entity';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    let output = {
      success: false,
      message: '',
      data: null as unknown as User,
    };
    try {
      const createdEmployee = await this.databaseService.employee.create({
        data: createEmployeeDto,
      });
      output.success = true;
      output.data = createdEmployee;
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

  async findAll() {
    let output = {
      success: false,
      message: '',
      data: [] as unknown as any,
    };
    try {
      const usrs = await this.databaseService.employee.findMany();
      output.success = true;
      output.data = usrs;
      return output;
    } catch (error) {
      output = {
        success: false,
        message: `${error.message}`,
        data: [] as unknown as User,
      };
      return output;
    }
  }

  async findOne(id: number) {
    return this.databaseService.employee.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.databaseService.employee.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id,
      },
    });
  }
}

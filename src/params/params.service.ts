import { Injectable } from '@nestjs/common';
import { FakerModuleFinance } from 'src/shared/constants/data-type-fakerjs-finance';
import { CreateParamDto } from './dto/create-param.dto';
import { UpdateParamDto } from './dto/update-param.dto';

@Injectable()
export class ParamsService {
  getMetadataFinance() {
    return JSON.stringify(FakerModuleFinance);
  }

  create(createParamDto: CreateParamDto) {
    return 'This action adds a new param';
  }

  findAll() {
    return `This action returns all params`;
  }

  findOne(id: string) {
    console.log('id :>> ', id);
    switch (id) {
      case 'finance':
        return this.getMetadataFinance();
      case 'person':
        return 'this.getMetadataFinance(';
      default:
        return '';
    }
  }

  update(id: number, updateParamDto: UpdateParamDto) {
    return `This action updates a #${id} param`;
  }

  remove(id: number) {
    return `This action removes a #${id} param`;
  }
}

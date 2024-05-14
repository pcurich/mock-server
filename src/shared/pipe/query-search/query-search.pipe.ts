import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class QuerySearchPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const hasLimit = value.hasOwnProperty('limit');
    const hasPage = value.hasOwnProperty('page');
    const limit = hasLimit ? parseInt(value.limit.toString(), 10) : 0
    const page = hasPage ? parseInt(value.page.toString(), 10) : 0

    console.log('value', value)

    // if (value.hasOwnProperty('limit'))
    return { ...value, hasLimit, limit, hasPage, page };
  }
}

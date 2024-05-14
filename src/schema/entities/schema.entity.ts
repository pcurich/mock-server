export class Schema {
  public endPoint: string = '';
  public verb: string = '';
  public description: string = '';

  public body: SchemaBody[] = [];
  public header: SchemaHeader[] = [];
}

export class SchemaHeader {
  public codeResponse: string = '';
  public headerBody: HeaderBody[] = [];
}

export class SchemaBody {
  public parameterName: string = '';
  public parameterType: string = '';
}

export class HeaderBody {
  public key: string = '';
  public value: string = '';
}

import { fakerEN } from '@faker-js/faker';

export const FakerModuleFinance = {
  key: 'FakerModuleFinance',
  summary: 'Module to generate finance and money related entries.',
  methods: [
    {
      method: 'accountName',
      summary: 'Generates a random account name.',
      example: fakerEN.finance.accountName(),
    },
    {
      method: 'accountNumber',
      summary: 'Generates a random account number.',
      options: '{ length: number }',
      example: fakerEN.finance.accountNumber(10),
    },
    {
      method: 'amount',
      summary:
        'Generates a random amount between the given bounds (inclusive).',
      options:
        '{ autoFormat: boolean,  dec: number,  max: number,  min: number,  symbol: string }',
      example: fakerEN.finance.amount({
        min: 5,
        max: 10,
        dec: 5,
        symbol: 'S/',
        autoFormat: true,
      }),
    },
  ],
};

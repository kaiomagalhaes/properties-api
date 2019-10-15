import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class Address extends Entity {
  @property({
    type: 'string',
  })
  addressLine1: string;

  @property({
    type: 'string',
  })
  addressLine2: string;

  @property({
    type: 'string',
  })
  city: string;

  @property({
    type: 'string',
  })
  state: string;

  @property({
    type: 'string',
  })
  country: string;

  @property({
    id: true,
    generated: true,
  })
  id: number;

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;

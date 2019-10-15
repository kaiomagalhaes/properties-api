import { Entity, hasOne, model, property } from '@loopback/repository';
import { Address } from './address.model';

@model({ settings: { strict: false } })
export class Property extends Entity {
  @property({
    type: 'string',
  })
  notes: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
  })
  minRent: number;

  @property({
    type: 'number',
  })
  maxRent: number;

  @property({
    id: true,
    generated: true,
  })
  id: number;

  @hasOne(() => Address)
  address?: Address;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Property>) {
    super(data);
  }
}

export interface PropertyRelations {
  // describe navigational properties here
}

export type PropertyWithRelations = Property & PropertyRelations;

import { DefaultCrudRepository, HasOneRepositoryFactory, repository } from '@loopback/repository';
import { AddressRepository } from './address.repository'
import { Address, Property, PropertyRelations } from '../models';
import { PostgresDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';

export class PropertyRepository extends DefaultCrudRepository<
  Property,
  typeof Property.prototype.id,
  PropertyRelations
  > {
  public readonly address: HasOneRepositoryFactory<
    Address,
    typeof Address.prototype.id
  >;
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
    @repository.getter('AddressRepository')
    getAddressRepository: Getter<AddressRepository>,
  ) {
    super(Property, dataSource);
    this.address = this.createHasOneRepositoryFactoryFor(
      'address',
      getAddressRepository,
    );
    this.registerInclusionResolver('address', this.address.inclusionResolver);
  }
}

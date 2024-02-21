// id: (primary key, unique)
// name: (e.g., "Toronto", "Melbourne")
// country_id: (foreign key to Country entity)

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class CityModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  city: string;

  //   @Field()
  //   @Column()
  //   country_id: string;
}

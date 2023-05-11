import { Entity, Column } from 'typeorm';
import { CoreEntity } from './core.entity';

@Entity({ name: 'User' })
export class UserEntity extends CoreEntity {
  @Column({ name: 'user_name', type: 'varchar', length: 50 })
  userName!: string;

  @Column({ name: 'password', type: 'varchar', length: 200 })
  password!: string;
}

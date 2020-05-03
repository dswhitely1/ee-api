import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
import * as bcrypt from 'bcryptjs';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: () => 'user' })
  role: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  checkPassword(password: string) {
    return bcrypt.compareSync(password, this.password);
  }
}

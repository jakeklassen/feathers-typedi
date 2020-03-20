import NeDB from 'nedb';
import path from 'path';
import { Inject, Service } from 'typedi';

@Service()
export class UsersModel {
  public datastore: NeDB;

  constructor(@Inject('dbPath') dbPath: string) {
    this.datastore = new NeDB({
      filename: path.join(dbPath, 'users.db'),
      autoload: true,
    });

    this.datastore.ensureIndex({ fieldName: 'email', unique: true });
  }
}

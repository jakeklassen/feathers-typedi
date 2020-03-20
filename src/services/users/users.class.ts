import { NedbServiceOptions, Service as NeDBService } from 'feathers-nedb';
import { Inject, Service } from 'typedi';
import type { Application } from '../../declarations';
import { UsersModel } from '../../models/users.model';

@Service()
export class UsersService extends NeDBService {
  constructor(
    @Inject('app') app: Application,
    model: UsersModel,
    options: Partial<NedbServiceOptions>,
  ) {
    super({
      ...options,
      Model: model.datastore,
      paginate: app.get('paginate'),
    });
  }
}

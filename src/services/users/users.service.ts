// Initializes the `users` service on path `/users`
import { ServiceAddons } from '@feathersjs/feathers';
import { Inject, Service } from 'typedi';
import type { Application } from '../../declarations';
import { UsersService } from './users.class';
import hooks from './users.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    users: UsersService & ServiceAddons<any>;
  }
}

@Service()
export class Users {
  constructor(@Inject('app') app: Application, usersService: UsersService) {
    // Initialize our service with any options it requires
    app.use('/users', usersService);

    // Get our initialized service so that we can register hooks
    const service = app.service('users');

    service.hooks(hooks);
  }
}

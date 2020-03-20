import { Application } from '../declarations';
import { Container } from 'typedi';
import { Users } from './users/users.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function(app: Application) {
  // Register our services by requesting them from the container
  Container.get(Users);
}

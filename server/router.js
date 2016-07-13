import router from 'koa-router';
import * as article from './article';
import * as comment from './comment';
import * as user from './user';

const route = router();

route.get('/article/:id?', article.read);
route.post('/article', user.auth, user.role(2), article.create);
route.patch('/article/:id', user.auth, user.role(1), article.update);
route.delete('/article/:id', user.auth, user.role(1), article.del);

route.get('/comment/:id?', comment.read);
route.post('/comment', user.auth, comment.create);
route.delete('/comment/:id', user.auth, user.role(1), comment.del);

route.get('/user/:name?', user.read);
route.post('/user', user.create);
route.patch('/user/:name', user.auth, user.role(1), user.update);
route.delete('/user/:name', user.auth, user.role(1), user.del);
route.post('/auth', user.auth);

export default route;
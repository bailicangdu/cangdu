import express from 'express';
import config from 'config-lite';
import routes from './rotues/index';
const app = express();

app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});

app.use(express.static('./public'));

routes(app);

app.use((err, req, res, next) => {
	res.send('未找到当前路由');
});


app.listen(config.port, () => {
	console.log(`成功监听端口：${config.port}`)
});

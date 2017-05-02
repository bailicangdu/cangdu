import express from 'express';
import config from 'config-lite';

const app = express();
app.use(express.static('./public'));

app.use((err, req, res, next) => {
	res.send('未找到当前路由');
});


app.listen(config.port);
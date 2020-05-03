import { configService } from '../config/config.service';
import fs = require('fs');

const filename = 'ormconfig.json';

try {
  fs.unlinkSync(filename);
} catch (err) {
  console.log('File Not Found');
}

fs.writeFileSync(
  filename,
  JSON.stringify(configService.getTypeOrmConfig(), null, 2),
);

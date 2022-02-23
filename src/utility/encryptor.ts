import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';
import * as bcrypt from 'bcrypt';
import { promisify } from 'util';



export class Encryptor {

  async encrypt(password: string): Promise<string>{
    
    const iv = randomBytes(16);
    const randomCypher = 'avkafi-oafajfbafaug42daasf34';

    const key = (await promisify(scrypt)(randomCypher, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const encryptedText = Buffer.concat([
      cipher.update(password),
      cipher.final(),
    ]);
   
    return encryptedText.toString();
  }

  async hash(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds); 
    return hash;
  }

}
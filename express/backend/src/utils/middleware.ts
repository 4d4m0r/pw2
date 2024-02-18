import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';

require('dotenv').config();

function accessLogger(format: 'simples' | 'completo') {
    return function(req: Request, res: Response, next: NextFunction) {
        const logFormat = format.toLowerCase();
        const logPath = process.env.LOG_PATH;

        if (logFormat !== 'simples' && logFormat !== 'completo') {
            return res.status(500).send('Formato de log inválido');
        }

        let logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}`;

        if (logFormat === 'completo') {
            logMessage += ` HTTP/${req.httpVersion} ${req.headers['user-agent']}`;
        }

        logMessage += '\n';

        const logFilePath = path.join(logPath!, 'access.log');
        fs.appendFile(logFilePath, logMessage, (err) => {
            if (err) {
                console.error('Erro ao salvar no arquivo de log:', err);
            }
        });

        next();
    };
}

export default accessLogger;

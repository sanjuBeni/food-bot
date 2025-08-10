import {createLogger, format, transports} from "winston";
import { ConsoleTransportInstance, FileTransportInstance } from "winston/lib/winston/transports";
import util from 'util';
import { ApplicatinEnvironmentEnum } from "../constant/application";
import config from "../config/config";
import path from "path";
import * as sourceMapSupport from 'source-map-support';

// Linking Trace Support
sourceMapSupport.install();

const consoleLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta= {} } = info;

    const customeMeta = util.inspect(meta, {
        showHidden: false,
        depth: null
    });

    const customLog = `${level.toUpperCase()} [${timestamp}] ${message}\n${"META"} ${customeMeta}\n`;
    
    return  customLog;

});

const consoleTransports = () : Array<ConsoleTransportInstance> => {
    if(ApplicatinEnvironmentEnum.DEVELOPMENT === config.ENV) {
        return [
            new transports.Console({
                level: 'info',
                format: format.combine(format.timestamp(), consoleLogFormat),
            })
        ]
    }
    return [];
}

const fileLogFormat = format.printf((info) => {
    const {level, message, timestamp, meta={}} = info;

    const logMeta: Record<string, unknown> = {}
    if(typeof meta === 'object' && meta !== null) {
        for (const [key, value] of Object.entries(meta)) {
            if(value instanceof Error) {
                logMeta[key] = {
                    name: value.name,
                    message: value.message,
                    trace: value.stack || ''
                }
            }else {
                logMeta[key] = value;
            }
        }
    }
    const logData = {
        level: level.toUpperCase(),
        message,
        timestamp,
        meta: logMeta
    }
    return JSON.stringify(logData, null, 4); 
});

const fileTransports = () : Array<FileTransportInstance> => {
    return [
        new transports.File({
            filename: path.join(__dirname, '../', '../', 'logs', `${config.ENV}.log`), 
            level: 'info',
            format: format.combine(format.timestamp(), fileLogFormat)
        })
    ];
}

export default createLogger({
    defaultMeta: {
        meta: {} 
    },
    transports: [
        ...fileTransports(),
        ...consoleTransports()
    ],
});
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module as M } from './entities/module.entity';
import { ModuleService } from './services/module.service';
import { ModuleController } from './controllers/module.controller';
import { Page } from './entities/page.entity';
import { PageController } from './controllers/page.controller';
import { PageService } from './services/page.service';
import { Control } from './entities/control.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([M, Page, Control])
    ],
    controllers: [
        ModuleController,
        PageController
    ],
    providers: [
        ModuleService,
        PageService
    ]
})
export class ModuleModule { }

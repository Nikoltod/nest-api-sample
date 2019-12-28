import { Get, Post, Controller, Body } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) { }
    @Get()
    async findAll(): Promise<string[]> {
        return this.itemService.findAll();
    }

    @Post()
    async create(@Body() item: string) {
        return this.itemService.create(item);
    }
}

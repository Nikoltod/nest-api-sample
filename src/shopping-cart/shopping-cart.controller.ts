import { Post, Controller } from '@nestjs/common';

@Controller('shopping-cart')
export class ShoppingCartController {
    @Post()
    async addItem() {
        return 'My fake service.';
    }
}
